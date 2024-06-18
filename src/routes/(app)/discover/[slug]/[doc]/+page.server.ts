import type { EntryGenerator, PageLoad } from "./$types.js";
import { getDocInDiscover } from "$lib/utils.js";
import { readdirSync, readFileSync } from 'fs';
import { compile as svleteCompile, preprocess } from 'svelte/compiler';
import fs from 'fs';
import path from 'path';
// import { SvelteComponent } from "svelte";
import { fileURLToPath } from 'node:url';

export const prerender = false;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// import { compile, mdsvex } from "mdsvex";
// import rehypeSlug from 'rehype-slug'
// import { mdsx, compile } from "mdsx";
export const load: PageLoad = async (event) => {
	const slug = event.params.slug;
	console.warn("in [doc] PageLoad--:", slug, event.params.doc)
	let filename = path.join(__dirname, "(component)", slug, event.params.doc + ".md");;
	let input;
	if (!fs.existsSync(filename)) {//文件存在
		const parent = path.join(__dirname, "(component)", slug);
		if (!fs.existsSync(parent)) { //上级目录也不存在
			fs.mkdirSync(parent, { recursive: true });
		}
		input = readFileSync(path.join(__dirname, "../../../../../../data/discover", slug, event.params.doc + ".md"), { encoding: 'utf8' });
		fs.writeFileSync(filename, input);
	}
	console.info("filename", filename);
	const file = (await import(filename));
	const { html, css } = file.default.render();
	const metadata = file.metadata;
	console.warn("html", html, css);
	// let content = await mdsvex({
	// 	rehypePlugins: [
	// 		rehypeSlug,
	// 	]
	// }).markup({ content: input, filename: "test.svx" });
	// let content = await compile(input, { filename: '3d-one-ai.md', config: mdsxConfig, preprocessors: [] });
	// console.warn("content:", content);
	// let filename = "3d-one-ai.md";
	// This will give you a valid svelte component
	// const preprocessed = await preprocess(
	// 	input,
	// 	mdsx(mdsxConfig)
	// );
	// console.warn("preprocessed", JSON.stringify(preprocessed))
	// let result;
	// if (preprocessed) {
	// 	// Now you can compile it if you wish
	// 	result = svleteCompile(
	// 		preprocessed.code.toString(), { generate: 'ssr' }
	// 	);
	// 	// console.warn("reuslt:", result);
	// }


	// const result = svleteCompile(content.code, { generate: 'ssr' });
	// console.warn(eval(result.js.code.toString()));
	// let procesed = svleteCompile(content.code);
	// console.warn("procesed:", procesed);
	// 这是用户要访问的md文件，如果找不到，则404跳转
	// const { component, title, metadata } = await getDocInDiscover(slug + "/" + event.params.doc, false);
	// console.warn("component:", JSON.stringify(component));
	// // // 取分类的metacode
	// const { metadata: indexMetadata } = await getDocInDiscover(slug + "/index", false);
	// let relates: FrontMatterWithPath[] = [];
	// //检查是否有推荐商品
	// if (metadata && metadata.relates && metadata.relates.length > 0) {
	// 	for (let path of metadata.relates) {
	// 		//去掉第一个 /
	// 		if (path.startsWith("/")) {
	// 			path = path.substring(1);
	// 		}
	// 		path = path.replace(".md", "");
	// 		// 这是用户推荐的md文件，如果找不到，则不需要显示就可以了。
	// 		const { metadata } = await getDocInDiscover(path, false);
	// 		if (metadata) {
	// 			relates.push({ path, ...metadata });
	// 		}
	// 	}
	// }
	return {
		// component,
		metadata,
		relates: [],
		slug,
		indexMetadata: {},
		content: { html, css }
	};
};

// export const entries: EntryGenerator = () => {
// 	console.info("Prerendering /docs");
// 	const modules = import.meta.glob("/src/content/discover/**/*.md");
// 	const entries = [];

// 	for (const path of Object.keys(modules)) {
// 		if (!path.endsWith("index.md")) {//非index.md
// 			const slug = path.replace("/src/content/discover/", "").replace(".md", "").split("/");
// 			console.warn("in slug/doc page.ts split:", slug);
// 			entries.push({ slug: slug[0], doc: slug[1] });
// 		}
// 	}

// 	return entries;
// };
