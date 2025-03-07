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
      { text: "面试", link: "/interview/job" },
      { text: "Web 开发", link: "/web/frontend/index" },
      { text: "移动端开发", link: "/app/index" },
      { text: "工具", link: "/tools/vitepress" },
    ],
    sidebar: {
      "/web": [
        {
          // text: "Web 开发",
          items: [
            { text: "前端开发", link: "/web/frontend/index" },
            { text: "后端开发", link: "/web/backend/index" },
          ],
        },
      ],
      "/app": [
        {
          text: "移动端开发",
          items: [{ text: "概述", link: "/app/index" }],
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
          // text: "应聘",
          items: [{ text: "应聘", link: "/interview/job" }],
        },
      ],
      "/tools": [{ text: "VitePress", link: "/tools/vitepress" }],
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
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};
