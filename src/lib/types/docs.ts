export type Metadata = {
	title: string;
	description: string;
	openGraph: {
		title: string;
		description: string;
		type: "article";
		url: string;
		images: [
			{
				url: string;
				width: number;
				height: number;
				alt: string;
			},
		];
	};
	twitter: {
		card: "summary_large_image";
		title: string;
		description: string;
		images: string[];
		creator: string;
	};
};

export type FrontMatter = {
	title: string;
	description: string;
	component: boolean;
	source: string;
	sort?: number,
	external?: {
		project: string;
		url: string;
	};
	tags?: string[]; //tag标签
	label?: string;//note，即显示在card中的简要介绍。
	bits?: string;  //原来设计为bits地址，现在设计为官网的url地址
	cover?: string; //https://pic.chinaz.com/ai/logo/2024/0605/30913.jpg
	logo?: string; //远程img的url地址https://pic.chinaz.com/ai/logo/2024/0605/30913.jpg
	icon?: string; //Icons的图标枚举，icon图标
	procform?: number;// 1,                      //1 - 网站 2 - 小程序 3 - 插件 4 - 桌面客户端 5 - 模型 6 - 其他 7 - app
	procformname?: string;  //": "网站",              //产品形式 网站 / 桌面 / 小程序 / App / 插件
	procattr?: number; // 10,
	procattrname?: string;// "商业",              //二级分类
	proctype?: number; //": 4,
	proctypename?: string;  //"国外精选",           //产品类型 普通商品 / 国外精选 / 国内精选
	lang?: string; //"en",
	isicp?: number;  //2,  //是否已经ICP备案
	isqian?: number;  //2, //是否已经公安备案
	iswx?: number; //2,   //是否有微信
	isqq?: number; //2,   //是否有qq
	iscom?: number; //2,  //是否有联系方式
	updateTime?: string; //": "2024-06-05 17:05:10", //更新时间
	createTime?: string;// "2024-06-05 17:05:10", //创建时间
	auditTime?: string; //"2024-06-05 17:05:10",  ##审核时间
	price?: string; // "付费",
	relates?: string[]; //相关推荐，以discover为跟目录，包含分类和md文件，即/11-21/about.md
};

export type DocFile = {
	default: import("svelte").ComponentType;
	metadata: FrontMatter;
};

/**
 * 文件路径 + FrontMatter
 */
export type FrontMatterWithPath = FrontMatter & {
	path: string
};

export type DocResolver = () => Promise<DocFile>;

export type TableOfContentsItem = {
	title: string;
	url: string;
	items?: TableOfContentsItem[];
};

export type TableOfContents = {
	items: TableOfContentsItem[];
};
