import type { PageLoad } from "./$types.js";
// import faveritesData from '../../../../content/discover/faverites.json';
import faveritesData from '$lib/server/discover/faverites.json';

export const load: PageLoad = async () => {

	return {
		faveritesData: faveritesData,
	};
};
