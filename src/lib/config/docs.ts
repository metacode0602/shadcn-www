import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "首页",
			href: "/",
		},
		{
			title: "产品库",
			href: "/home",
		},
		{
			title: "开源项目",
			href: "/projects",
		},
		{
			title: "创意海报",
			href: "/posters",
		},
		{
			title: "知识库",
			href: "/knowleges",
		}
	],
	sidebarNav: [
		{
			"title": "文本",
			"name": "wenben",
			"href": "wenben",
			"total": 8462,
			"items": [
				{
					"title": "文案写作",
					"name": "wenanxiezuo",
					"href": "/discover/wenanxiezuo",
					"total": 2486
				},
				{
					"title": "邮件助手",
					"name": "dianziyoujianzhushou",
					"href": "/discover/dianziyoujianzhushou",
					"total": 408
				},
				{
					"title": "聊天机器人",
					"name": "liaotianjiqiren",
					"href": "/discover/zhinengliaotianjiqiren",
					"total": 2588
				},
				{
					"title": "社交媒体",
					"name": "shejiaomeiti",
					"href": "/discover/shejiaomeiti",
					"total": 1852
				},
				{
					"title": "搜索引擎优化",
					"name": "sousuoyinqingyouhua",
					"href": "/discover/sousuoyinqingyouhua",
					"total": 584
				},
				{
					"title": "智能翻译",
					"name": "zhinengfanyi",
					"href": "/discover/zhinengfanyi",
					"total": 544
				}
			]
		},
		{
			"title": "图片",
			"name": "tupian",
			"href": "tupian",
			"total": 4262,
			"items": [
				{
					"title": "艺术创作",
					"name": "yishuchuangzuo",
					"href": "/discover/yishuchuangzuo",
					"total": 703
				},
				{
					"title": "头像生成",
					"name": "touxiangshengcheng",
					"href": "/discover/touxiangshengcheng",
					"total": 160
				},
				{
					"title": "图标生成",
					"name": "tubiaoshengcheng",
					"href": "/discover/tubiaoshengcheng",
					"total": 69
				},
				{
					"title": "图像生成",
					"name": "tuxiangshengcheng",
					"href": "/discover/tuxiangshengcheng",
					"total": 1948
				},
				{
					"title": "设计助手",
					"name": "shejizhushou",
					"href": "/discover/shejizhushou",
					"total": 1355
				}
			]
		},
		{
			"title": "代码",
			"name": "daima",
			"href": "daima",
			"total": 2286,
			"items": [
				{
					"title": "代码辅助",
					"name": "daimafuzhu",
					"href": "/discover/daimafuzhu",
					"total": 1210
				},
				{
					"title": "低代码/无代码",
					"name": "didaimawudaima",
					"href": "/discover/didaimawudaima",
					"total": 207
				},
				{
					"title": "开发者工具",
					"name": "kaifazhegongju",
					"href": "/discover/kaifazhegongju",
					"total": 869
				}
			]
		},
		{
			"title": "音频",
			"name": "yinpin",
			"href": "/yinpin",
			"total": 1211,
			"items": [
				{
					"title": "音乐创作",
					"name": "yinlechuangzuo",
					"href": "/discover/yinlechuangzuo",
					"total": 391
				},
				{
					"title": "音频处理",
					"name": "yinpinchuli",
					"href": "/discover/yinpinchuli",
					"total": 232
				},
				{
					"title": "语音处理",
					"name": "yuyinchuli",
					"href": "/discover/yuyinchuli",
					"total": 588
				}
			]
		},
		{
			"title": "视频",
			"name": "shipin",
			"href": "shipin",
			"total": 1193,
			"items": [
				{
					"title": "视频创作",
					"name": "shipinchuangzuo",
					"href": "/discover/shipinchuangzuo",
					"total": 1070
				},
				{
					"title": "视频生成",
					"name": "shipinshengcheng",
					"href": "/discover/shipinshengcheng",
					"total": 123
				}
			]
		},
		{
			"title": "商业",
			"name": "shangye",
			"href": "shangye",
			"total": 5754,
			"items": [
				{
					"title": "金融",
					"name": "jinrong",
					"href": "/discover/jinrong",
					"total": 125
				},
				{
					"title": "客户服务",
					"name": "kehufuwu",
					"href": "/discover/kehufuwu",
					"total": 439
				},
				{
					"title": "电子商务",
					"name": "dianzishangwu",
					"href": "/discover/dianzishangwu",
					"total": 172
				},
				{
					"title": "人力资源",
					"name": "renliziyuan",
					"href": "/discover/renliziyuan",
					"total": 557
				},
				{
					"title": "团队协作",
					"name": "tuanduixiezuo",
					"href": "/discover/tuanduixiezuo",
					"total": 586
				},
				{
					"title": "销售管理",
					"name": "xiaoshouguanli",
					"href": "/discover/xiaoshouguanli",
					"total": 548
				},
				{
					"title": "交易助手",
					"name": "jiaoyizhushou",
					"href": "/discover/jiaoyizhushou",
					"total": 92
				},
				{
					"title": "法律助手",
					"name": "falvzhushou",
					"href": "/discover/falvzhushou",
					"total": 143
				},
				{
					"title": "数据分析",
					"name": "shujufenxi",
					"href": "/discover/shujufenxi",
					"total": 1312
				},
				{
					"title": "办公助手",
					"name": "bangongzhushou",
					"href": "/discover/bangongzhushou",
					"total": 438
				}
			]
		},
		{
			"title": "其他",
			"name": "qita",
			"href": "qita",
			"total": 3137,
			"items": [
				{
					"title": "学习教育",
					"name": "xuexijiaoyu",
					"href": "/discover/xuexijiaoyu",
					"total": 1443
				},
				{
					"title": "趣味游戏",
					"name": "quweiyouxi",
					"href": "/discover/quweiyouxi",
					"total": 925
				},
				{
					"title": "医疗健康",
					"name": "yiliaojiankang",
					"href": "/discover/yiliaojiankang",
					"total": 559
				},
				{
					"title": "户外旅行",
					"name": "huwailvhang",
					"href": "/discover/huwailvhang",
					"total": 210
				}
			]
		}
	]
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
