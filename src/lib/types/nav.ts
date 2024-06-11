import type { Icons } from "$lib/components/docs/icons/index.js";

export type NavItem = {
	title: string;
	href?: string;
	name?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: keyof typeof Icons;
	total?: number,
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items?: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};
