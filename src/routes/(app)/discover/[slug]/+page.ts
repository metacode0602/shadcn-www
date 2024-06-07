import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types.js";
import { getDoc } from "$lib/utils.js";

export const load: PageLoad = async (event) => {
	console.warn("in slug dic page.ts beore get doc:", event.params.slug);
	const { component, title, metadata } = await getDoc(event.params.slug);
	console.warn("in slug dic page.ts:", event.params.slug, JSON.stringify(metadata), title);

	return {
		component,
		metadata,
		title,
	};
};

export const entries: EntryGenerator = () => {
	console.info("Prerendering /docs");
	const modules = import.meta.glob("/src/content/discover/**/*.md");
	const entries = [];

	console.warn("EntryGenerator modules", modules)
	for (const path of Object.keys(modules)) {
		const slug = path.replace("/src/content/discover/", "").replace(".md", "").replace("/index", "");
		entries.push({ slug });
	}

	return entries;
};
