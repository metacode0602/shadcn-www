import type { EntryGenerator, PageLoad } from "./$types.js";
import { getDoc } from "$lib/utils.js";

export const load: PageLoad = async (event) => {
	const { component, title, metadata } = await getDoc(event.params.slug);
	console.warn("doc PageLoad--:", event.params.slug, JSON.stringify(component))
	return {
		component,
		metadata,
		title,
	};
};

// export const entries: EntryGenerator = () => {
// 	console.info("Prerendering /docs");
// 	const modules = import.meta.glob("/src/content/discover/**/*.md");
// 	const entries = [];

// 	for (const path of Object.keys(modules)) {
// 		const slug = path.replace("/src/content/", "").replace(".md", "").replace("/index", "");
// 		console.warn("EntryGenerator:", JSON.stringify(slug))
// 		entries.push({ slug });
// 	}

// 	return entries;
// };
