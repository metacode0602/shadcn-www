import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types.js";
import type { DocFile } from "$lib/types/docs.js";
import path from "node:path";
import { fileURLToPath } from 'url';
import type { DocResolver } from "$lib/types/docs.js";

import indexNewData from '$lib/server/discover/discover-new.json';
import indexHotData from '$lib/server/discover/discover-hot.json';
// import indexNewData from '../../../content/discover/discover-new.json';
// import indexHotData from '../../../content/discover/discover-hot.json';

export const load: PageLoad = async () => {
	//### @ts-expect-error import doesn't recognize *.md modules _yet_
	// const doc: DocFile = null;///await import("../../../../other/content/discover/index.md");
	// const __dirname = path.dirname(fileURLToPath(import.meta.url));
	// const discover = path.join(__dirname, "../../../../", "other/discover/jinrong/beebee-ai.md")
	// console.warn("basepath:", __dirname, discover);
	// /* @vite-ignore */
	// const dis = import.meta.glob("../../../../other/discover/jinrong/beebee-ai.md");
	// console.warn("dicover:", dis);
	// const doc1 = await dis.resolver?.();

	// if (!doc || !doc.metadata) {
	// 	error(404);
	// }
	return {
		// component: doc.default,
		// metadata: doc.metadata,
		// title: doc.metadata.title,
		indexHotData: indexHotData,
		indexNewData: indexNewData
	};
};

type Modules = Record<string, () => Promise<unknown>>;

function getIndexDocIfExists(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/${slug}/index.md`)) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}

	return match;
}
