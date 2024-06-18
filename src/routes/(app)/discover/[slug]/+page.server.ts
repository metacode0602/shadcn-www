import type { EntryGenerator, PageLoad } from "./$types.js";
import { error } from "@sveltejs/kit";
import type { DocResolver, FrontMatterWithPath } from "$lib/types/docs.js";

export const load: PageLoad = async (event) => {
	const slug = event.params.slug.replace(".md", "");//删除所有的.md后缀
	const modules = import.meta.glob(`/data/discover/**/*.md`);
	// let match: { path?: string; resolver?: DocResolver } = {};
	let indexMatch: { path?: string; resolver?: DocResolver } = {};
	const items: FrontMatterWithPath[] = [];
	let doc;
	//获取目录下所有的文件
	for (const [path, resolver] of Object.entries(modules)) {
		if (path.startsWith("/data/discover/" + slug + "/")) {
			console.warn("path:", path, " index:", path.includes("index.md"))

			if (path.includes("index.md")) { //当前页面的index.md
				// indexMatch = { path, resolver: resolver as unknown as DocResolver };
				// console.warn("Index match:", indexMatch?.resolver());
				// const result = svleteCompile(content.code, { generate: 'ssr' });
				indexMatch = (await import(path)/* @vite-ignore */).metadata;
				// console.warn("doc0", (await import(path)));
			} else {//非index.md
				// doc = await match?.resolver?.();
				doc = (await import(path)/* @vite-ignore */).metadata;
				if (doc) {
					items.push({ path: getSlugFilePath(slug, path), ...doc });
				}
			}
		}
	}
	if (!items || items.length == 0) {
		error(404);
	}
	// 对items数组按照sort字段进行降序排列，未设置sort的排在后面
	items.sort((a, b) => {
		// 使用Number.MAX_VALUE作为未设置的sort值
		const sortA = a.sort ?? Number.MAX_VALUE;
		const sortB = b.sort ?? Number.MAX_VALUE;
		// 降序排列
		return sortB - sortA;
	});

	//获取index.md
	// doc = await indexMatch?.resolver?.();

	console.warn("index doc", indexMatch);
	return {
		// component: doc?.default,
		metadata: indexMatch,
		slug,
		items
	};
};

/**
 * 这里只需要分类的目录就可以了
 */
export const entries: EntryGenerator = () => {
	const modules = import.meta.glob("/src/content/discover/**/index.md");
	const entries = [];
	console.warn("in discover [slug] modules is:", modules);
	for (const path of Object.keys(modules)) {
		if (!path.startsWith("/src/content/discover/index.md")) {
			const slug = path.replace("/src/content/discover/", "").replace("/index.md", "");
			entries.push({ slug });
		}
		// const slug = path.replace("/src/content/discover/", "").replace(".md", "").replace("/index", "");
		// entries.push({ slug });
	}
	console.warn("in discover [slug] page.ts, entiries:", entries);
	return entries;
};

/**
 * /src/content/discover/11-21/about.md，返回about
 * @param path 文件名
 * @returns
 */
const getSlugFilePath = (slug: string, path: string) => {
	return slug + "/" + (path.split("/").pop() ?? "").replace(".md", "");
}