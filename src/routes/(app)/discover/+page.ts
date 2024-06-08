import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types.js";
import type { DocFile } from "$lib/types/docs.js";
import indexNewData from '../../../content/discover/index-new.json';
import indexHotData from '../../../content/discover/index-hot.json';

export const load: PageLoad = async () => {
	// @ts-expect-error import doesn't recognize *.md modules _yet_
	const doc: DocFile = await import("../../../content/discover/index.md");

	if (!doc || !doc.metadata) {
		error(404);
	}
	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title,
		indexHotData: indexHotData,
		indexNewData: indexNewData
	};
};
