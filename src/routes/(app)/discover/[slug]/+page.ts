import type { EntryGenerator, PageLoad } from "./$types.js";
import { error } from "@sveltejs/kit";
import type { DocResolver, FrontMatterWithPath } from "$lib/types/docs.js";
// 使用Record类型定义map

export const load: PageLoad = async (event) => {
	const slug = event.params.slug.replace(".md", "");//删除所有的.md后缀
	const modules = import.meta.glob(`/src/content/discover/**/*.md`);
	let match: { path?: string; resolver?: DocResolver } = {};
	let indexMatch: { path?: string; resolver?: DocResolver } = {};
	const items: FrontMatterWithPath[] = [];
	let doc;
	//获取目录下所有的文件
	for (const [path, resolver] of Object.entries(modules)) {
		console.warn("=in discover slug page:", path, path.startsWith("/src/content/discover/" + slug + "/"))
		if (path.startsWith("/src/content/discover/" + slug + "/")) {
			if (path.includes("index.md")) { //当前页面的index.md
				indexMatch = { path, resolver: resolver as unknown as DocResolver };
			} else {//非index.md
				match = { path, resolver: resolver as unknown as DocResolver };
				doc = await match?.resolver?.();
				if (doc && doc.metadata) {
					items.push({ path: getSlugFilePath(slug, path), ...doc?.metadata });
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
	doc = await indexMatch?.resolver?.();
	return {
		component: doc?.default,
		metadata: doc?.metadata,
		title: doc?.metadata.title,
		slug,
		items,
	};
};

export const entries: EntryGenerator = () => {
	const modules = import.meta.glob("/src/content/discover/**/*.md");
	const entries = [];

	for (const path of Object.keys(modules)) {
		const slug = path.replace("/src/content/discover/", "").replace(".md", "").replace("/index", "");
		entries.push({ slug });
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

// 函数：对items数组进行排序并返回FrontMatterMap类型的对象实例
// function sortItemsAndMapToRecord(items: FileWithFrontMatter[]): FrontMatterMap {
// 	// 根据sort字段降序排列，未设置sort的排在后面
// 	const sortedItems = items.sort((a, b) => {
// 		const sortA = a.frontMatter.sort ?? Infinity; // 使用Infinity代替未设置的sort值
// 		const sortB = b.frontMatter.sort ?? Infinity;
// 		return sortB - sortA;
// 	});

// 	// 将排序后的数组转换为FrontMatterMap类型的对象实例
// 	// 直接使用items数组的path作为键，frontMatter作为值，创建新的Record对象
// 	const frontMatterMap: FrontMatterMap = items.reduce((record, { path, frontMatter }) => {
// 		record[path] = frontMatter;
// 		return record;
// 	}, {} as FrontMatterMap);

// 	return frontMatterMap;
// }