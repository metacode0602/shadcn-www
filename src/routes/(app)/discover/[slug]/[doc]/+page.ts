import type { EntryGenerator, PageLoad } from "./$types.js";
import { getDocInDiscover } from "$lib/utils.js";
import type { FrontMatter, FrontMatterWithPath } from "$lib/types/docs.js";

export const load: PageLoad = async (event) => {
	const slug = event.params.slug;
	console.warn("in [doc] PageLoad--:", slug, event.params.doc)

	// 这是用户要访问的md文件，如果找不到，则404跳转
	const { component, title, metadata } = await getDocInDiscover(slug + "/" + event.params.doc, true);
	// 取分类的metacode
	const { metadata: indexMetadata } = await getDocInDiscover(slug + "/index", false);

	let relates: FrontMatterWithPath[] = [];
	//检查是否有推荐商品
	if (metadata && metadata.relates && metadata.relates.length > 0) {
		for (let path of metadata.relates) {
			//去掉第一个 /
			if (path.startsWith("/")) {
				path = path.substring(1);
			}
			path = path.replace(".md", "");
			// 这是用户推荐的md文件，如果找不到，则不需要显示就可以了。
			const { metadata } = await getDocInDiscover(path, false);
			if (metadata) {
				relates.push({ path, ...metadata });
			}
		}
	}
	return {
		component,
		metadata,
		title,
		relates,
		slug,
		indexMetadata
	};
};

export const entries: EntryGenerator = () => {
	console.info("Prerendering /docs");
	const modules = import.meta.glob("/src/content/discover/**/*.md");
	const entries = [];

	for (const path of Object.keys(modules)) {
		if (!path.endsWith("index.md")) {//非index.md
			const slug = path.replace("/src/content/discover/", "").replace(".md", "").split("/");
			console.warn("in slug/doc page.ts split:", slug);
			entries.push({ slug: slug[0], doc: slug[1] });
		}
		// const slug = path.replace("/src/content/discover/", "").replace(".md", "").replace("/index", "");
		// console.warn("EntryGenerator:", JSON.stringify(slug))
		// entries.push({ slug });
	}

	return entries;
};
