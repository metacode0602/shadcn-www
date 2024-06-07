import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type ProductsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const productsConfig: ProductsConfig = {
	mainNav: [
		{
			title: "首页",
			href: "/tool",
		},
		{
			title: "组件",
			href: "/tool/components/accordion",
		},
		{
			title: "Themes",
			href: "/themes",
		},
		{
			title: "Examples",
			href: "/examples/dashboard",
		},
		{
			title: "Blocks",
			href: "/blocks",
		},
		{
			title: "GitHub",
			href: "https://github.com/huntabyte/shadcn-svelte",
			external: true,
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/tool",
					items: [],
				},
				{
					title: "Installation",
					href: "/tool/installation",
					items: [],
				},
				{
					title: "components.json",
					href: "/tool/components-json",
					items: [],
				},
				{
					title: "Theming",
					href: "/tool/theming",
					items: [],
				},
				{
					title: "Dark mode",
					href: "/tool/dark-mode",
					items: [],
				},
				{
					title: "CLI",
					href: "/tool/cli",
					items: [],
				},
				{
					title: "Typography",
					href: "/tool/typography",
					items: [],
				},
				{
					title: "Figma",
					href: "/tool/figma",
					items: [],
				},
				{
					title: "Changelog",
					href: "/tool/changelog",
					items: [],
				},
				{
					title: "About",
					href: "/tool/about",
					items: [],
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/tool/components/accordion",
					items: [],
				},
				{
					title: "Alert",
					href: "/tool/components/alert",
					items: [],
				},
				{
					title: "Alert Dialog",
					href: "/tool/components/alert-dialog",
					items: [],
				},
				{
					title: "Aspect Ratio",
					href: "/tool/components/aspect-ratio",
					items: [],
				},
				{
					title: "Avatar",
					href: "/tool/components/avatar",
					items: [],
				},
				{
					title: "Badge",
					href: "/tool/components/badge",
					items: [],
				},
				{
					title: "Breadcrumb",
					href: "/tool/components/breadcrumb",
					items: [],
				},
				{
					title: "Button",
					href: "/tool/components/button",
					items: [],
				},
				{
					title: "Calendar",
					href: "/tool/components/calendar",
					items: [],
				},
				{
					title: "Card",
					href: "/tool/components/card",
					items: [],
				},
				{
					title: "Carousel",
					href: "/tool/components/carousel",
					items: [],
				},
				{
					title: "Checkbox",
					href: "/tool/components/checkbox",
					items: [],
				},
				{
					title: "Collapsible",
					href: "/tool/components/collapsible",
					items: [],
				},
				{
					title: "Combobox",
					href: "/tool/components/combobox",
					items: [],
				},
				{
					title: "Command",
					href: "/tool/components/command",
					items: [],
				},
				{
					title: "Context Menu",
					href: "/tool/components/context-menu",
					items: [],
				},
				{
					title: "Data Table",
					href: "/tool/components/data-table",
					items: [],
				},
				{
					title: "Date Picker",
					href: "/tool/components/date-picker",
					items: [],
				},
				{
					title: "Dialog",
					href: "/tool/components/dialog",
					items: [],
				},
				{
					title: "Drawer",
					href: "/tool/components/drawer",
					items: [],
				},
				{
					title: "Dropdown Menu",
					href: "/tool/components/dropdown-menu",
					items: [],
				},
				{
					title: "Form",
					href: "/tool/components/form",
					items: [],
				},
				{
					title: "Hover Card",
					href: "/tool/components/hover-card",
					items: [],
				},
				{
					title: "Input",
					href: "/tool/components/input",
					items: [],
				},
				{
					title: "Label",
					href: "/tool/components/label",
					items: [],
				},
				{
					title: "Menubar",
					href: "/tool/components/menubar",
					items: [],
				},
				// {
				//   title: "Navigation Menu",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Pagination",
					href: "/tool/components/pagination",
					items: [],
				},
				{
					title: "Popover",
					href: "/tool/components/popover",
					items: [],
				},
				{
					title: "Progress",
					href: "/tool/components/progress",
					items: [],
				},
				{
					title: "Radio Group",
					href: "/tool/components/radio-group",
					items: [],
				},
				{
					title: "Range Calendar",
					href: "/tool/components/range-calendar",
					items: [],
				},
				{
					title: "Resizable",
					href: "/tool/components/resizable",
					items: [],
				},
				{
					title: "Scroll Area",
					href: "/tool/components/scroll-area",
					items: [],
				},
				{
					title: "Select",
					href: "/tool/components/select",
					items: [],
				},
				{
					title: "Separator",
					href: "/tool/components/separator",
					items: [],
				},
				{
					title: "Sheet",
					href: "/tool/components/sheet",
					items: [],
				},
				{
					title: "Skeleton",
					href: "/tool/components/skeleton",
					items: [],
				},
				{
					title: "Slider",
					href: "/tool/components/slider",
					items: [],
				},
				{
					title: "Sonner",
					href: "/tool/components/sonner",
					items: [],
				},
				{
					title: "Switch",
					href: "/tool/components/switch",
					items: [],
				},
				{
					title: "Table",
					href: "/tool/components/table",
					items: [],
				},
				{
					title: "Tabs",
					href: "/tool/components/tabs",
					items: [],
				},
				{
					title: "Textarea",
					href: "/tool/components/textarea",
					items: [],
				},
				// {
				//   title: "Toast",
				//   href: "#",
				//   label: "Soon",
				//   disabled: true,
				//   items: []
				// },
				{
					title: "Toggle",
					href: "/tool/components/toggle",
					items: [],
				},
				{
					title: "Toggle Group",
					href: "/tool/components/toggle-group",
					items: [],
				},
				{
					title: "Tooltip",
					href: "/tool/components/tooltip",
					items: [],
				},
			],
		},
	],
};

type Example = {
	name: string;
	href: string;
	label?: string;
	code: string;
};
export const examples: Example[] = [
	{
		name: "今日最新",
		href: "/examples/mail",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/mail",
	},
	{
		name: "图像处理",
		href: "/examples/dashboard",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/dashboard",
	},
	{
		name: "写作灵感",
		href: "/examples/cards",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/cards",
	},
	{
		name: "视频创作",
		href: "/examples/tasks",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/tasks",
	},
	{
		name: "效率助手",
		href: "/examples/playground",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/playground",
	},
	{
		name: "艺术灵感",
		href: "/examples/forms",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/forms",
	},
	{
		name: "开发编程",
		href: "/examples/music",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/music",
	},
	{
		name: "聊天机器人",
		href: "/examples/authentication",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/authentication",
	},
	// {
	// 	name: "医疗健康",
	// 	href: "/examples/authentication",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/authentication",
	// },
	// {
	// 	name: "教育学习",
	// 	href: "/examples/authentication",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/authentication",
	// },
	// {
	// 	name: "智能营销",
	// 	href: "/examples/authentication",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/authentication",
	// },
	// {
	// 	name: "趣味",
	// 	href: "/examples/authentication",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/authentication",
	// },
];
