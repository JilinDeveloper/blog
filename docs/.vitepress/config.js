import { markdown } from "./config/markdown";
import { localSearchOptions } from "./config/search/local-search";

export default {
  title: "技术博客",
  description: "知识共享",
  appearance: "dark",
  markdown,
  base: "/blog/",
  head: [["link", { rel: "icon", href: "/blog/favicon.ico" }]],
  themeConfig: {
    // logo: "/images/logo.png",
    nav: [
      { text: "前端开发", link: "/frontend/index" },
      { text: "后端开发", link: "/backend/index" },
      { text: "面试", link: "/interview/index" },
      { text: "AI", link: "/ai/index" },
    ],
    sidebar: {
      "/frontend": [
        {
          text: "前端开发",
          items: [{ text: "概述", link: "/frontend/index" }],
        },
      ],
      "/backend": [
        {
          text: "后端开发",
          items: [{ text: "概述", link: "/backend/index" }],
        },
      ],
      "/ai": [
        {
          text: "AI",
          items: [{ text: "概述", link: "/ai/index" }],
        },
      ],
      "/interview": [
        {
          text: "面试",
          items: [{ text: "概述", link: "/interview/index" }],
        },
      ],
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outlineTitle: "目录",
    search: {
      provider: "local",
      options: localSearchOptions,
    },
  },
};
