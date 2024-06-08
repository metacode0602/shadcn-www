
import type { LayoutServerLoad } from "./$types.js";
import sidebarNav from '../../../content/discover/index-menu.json';

/**
 *
 * @returns 从服务端加载左侧导航列表的数据。
 */
export const load: LayoutServerLoad = async () => {
	return {
		sidebarNav: sidebarNav
	};
};

export const prerender = true;
