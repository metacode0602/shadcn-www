import type { ComponentType, SvelteComponent } from "svelte";

import Triangle from "lucide-svelte/icons/triangle";
import Bot from "lucide-svelte/icons/bot";
import SquareTerminal from "lucide-svelte/icons/square-terminal";
import CodeXML from "lucide-svelte/icons/code-xml";
import Settings2 from "lucide-svelte/icons/settings-2";
import { number, string } from "zod";

export type Category = {
  name: string; //分类名称
  icon?: ComponentType<SvelteComponent>; //显示的图标
  href?: string; //访问路径
  cover?: string; //分类封面图
  children?: Category[]; //子分类
  products?: Product[]; //分类下的产品列表
};

// 分类下的产品列表，即对应的AI产品
export type Product = {
  name: string; // 名称
  title: string; //标题
  tags: string[]; //标签
  cover: string; //封面图
  description?: string; //长介绍，markdown
  href?: string; //本地链接
  bits?: string; //官方网站
  note?: string; //card中简介
  logo?: string; //"https://pic.chinaz.com/ai/logo/2024/0605/30913.jpg",  //icon图标
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
};

// 分类下的产品列表，即对应的AI产品
export type LavelValue = {
  id: string; //id
  name: string; // 名称
  icon?: ComponentType<SvelteComponent>;
  title?: string; //标题
  cover?: string; //封面图
  note?: string; //card中简介
  url?: string;  //"https://www.exante.app/",  //跳转链接
};

//生成比例的数据
export const ratioRadioGroup: LavelValue[] = [
  {
    id: "1",
    name: "1：1",
    title: "正方形"
  },
  {
    id: "2",
    name: "4：3",
    title: "横向矩形"

  },
  {
    id: "3",
    name: "3：4",
    title: "纵向矩形"
  },
  {
    id: "4",
    name: "16：9",
    title: "横向矩形"

  },
  {
    id: "5",
    name: "9：16",
    title: "纵向矩形"
  },

];

export const festivalsSelects: LavelValue[] = [
  {
    id: "1101",
    name: "React Rendezvous",
    title: "Ethan Byte",
    icon: Triangle,
    cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    id: "1102",
    name: "Async Awakenings",
    title: "Nina Netcode",
    icon: Bot,
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    id: "1103",
    name: "The Art of Reusability",
    title: "Lena Logic",
    icon: SquareTerminal,
    cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    id: "1104",
    name: "Stateful Symphony",
    title: "Beth Binary",
    icon: CodeXML,
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    id: "1105",
    name: "Async Awakenings",
    title: "Nina Netcode",
    icon: Settings2,
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
];

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
        id: "11",
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
        id: "11",
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