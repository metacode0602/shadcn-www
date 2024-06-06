
export type Category = {
  id: string; //id
  name: string; //分类名称
  path?: string; //访问路径
  cover?: string; //分类封面图
  children?: Category[]; //子分类
  products?: Product[]; //分类下的产品列表
};

// 分类下的产品列表，即对应的AI产品
export type Product = {
  id: string; //id
  name: string; // 名称
  title: string; //标题
  tags: string[]; //标签
  cover: string; //封面图
  desc?: string; //长介绍，markdown
  website?: string; //官方网站
  pv?: string; //浏览量
  uv?: string; //用户数
  note?: string; //card中简介
};

export const listenNowAlbums: Product[] = [
	{
    id: "1101",
		name: "React Rendezvous",
		title: "Ethan Byte",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
	},
	{
    id: "1102",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
	{
    id: "1103",
		name: "The Art of Reusability",
		title: "Lena Logic",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
	},
	{
    id: "1104",
		name: "Stateful Symphony",
		title: "Beth Binary",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
	},
	{
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
];

// 首页分类推荐
export const homeCategories: Category[] = [
  {
    id: "1",
    name: "图像处理",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
    children: [
      {
        id:"11",
        name: "图像生成",
        products: [
          {
            id: "111-1",
            name: "Era3D",
            title: "高分辨率多视角扩散模型，使用高效",
            note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
            tags: ["图像生成", "多视角"],
            cover:
              "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
          },
          {
            id: "111-2",
            name: "Era3D",
            title: "高分辨率多视角扩散模型，使用高效",
            note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
            tags: ["图像生成", "多视角"],
            cover:
              "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
          },
          {
            id: "1104",
            name: "Stateful Symphony",
            title: "Beth Binary",
            tags: ["AI作画", "编程"],
            cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
          },          
        ],
      },
      {
        id: "12",
        name: "Ai图像转视频",
        cover: "",
        products: [
          {
            id: "121-1",
            name: "Era3D",
            title: "高分辨率多视角扩散模型，使用高效",
            note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
            tags: ["图像生成", "多视角"],
            cover:
              "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
          },
          {
            id: "121-2",
            name: "Era3D",
            title: "高分辨率多视角扩散模型，使用高效",
            note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
            tags: ["图像生成", "多视角"],
            cover:
              "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "写作灵感",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
      children: [
        {
          id:"11",
          name: "图像生成",
          products: [
            {
              id: "111-1",
              name: "Era3D",
              title: "高分辨率多视角扩散模型，使用高效",
              note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
              tags: ["图像生成", "多视角"],
              cover:
                "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
            },
            {
              id: "111-2",
              name: "Era3D",
              title: "高分辨率多视角扩散模型，使用高效",
              note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
              tags: ["图像生成", "多视角"],
              cover:
                "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
            },
            {
              id: "1104",
              name: "Stateful Symphony",
              title: "Beth Binary",
              tags: ["AI作画", "编程"],
              cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
            },          
          ],
        },
        {
          id: "12",
          name: "Ai图像转视频",
          cover: "",
          products: [
            {
              id: "121-1",
              name: "Era3D",
              title: "高分辨率多视角扩散模型，使用高效",
              note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
              tags: ["图像生成", "多视角"],
              cover:
                "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
            },
            {
              id: "121-2",
              name: "Era3D",
              title: "高分辨率多视角扩散模型，使用高效",
              note: "Era3D是一个开源的高分辨率多视角扩散模型，它通过高效的行注意力机制来生成高质量的图像。该模型能够生成多视角的颜色和法线图像，支持自定义参数以获得最佳结果。Era3D在图像生成领域具有重要性，因为它提供了一种新的方法来生成逼真的三维图像。图像生成多视角",
              tags: ["图像生成", "多视角"],
              cover:
                "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
            },
          ],
        },
      ],
  },
  {
    id: "5",
    name: "视频创作",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    id: "6",
    name: "效率助手",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
];


export const madeForYouAlbums: Product[] = [
	{
    id: "1101",
		name: "React Rendezvous",
		title: "Ethan Byte",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
	},
	{
    id: "1102",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
	{
    id: "1103",
		name: "The Art of Reusability",
		title: "Lena Logic",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
	},
	{
    id: "1104",
		name: "Stateful Symphony",
		title: "Beth Binary",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
	},
	{
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
  {
    id: "1104",
		name: "Stateful Symphony",
		title: "Beth Binary",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
	},
	{
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
  {
    id: "1104",
		name: "Stateful Symphony",
		title: "Beth Binary",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
	},
	{
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
  {
    id: "1104",
		name: "Stateful Symphony",
		title: "Beth Binary",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
	},
	{
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
  {
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
  {
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
  {
    id: "1105",
		name: "Async Awakenings",
		title: "Nina Netcode",
    tags: ["AI作画", "编程"],
		cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
	},
];