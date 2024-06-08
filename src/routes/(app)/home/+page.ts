import type { PageLoad } from "./$types.js";
import homeNewData from '../../../content/discover/home-new.json';
import homeCategories from '../../../content/discover/home-categories.json';

export const load: PageLoad = async () => {

	return {
		homeCategories: homeCategories,
		homeNewData: homeNewData
	};
};
