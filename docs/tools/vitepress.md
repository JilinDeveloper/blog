# VitePress

[文档](https://vitepress.vuejs.org/)

::: tip 说明
当前版本 1.6.3
:::

::: warning 提示
要求：Node.js 18 及以上版本。
或者安装 NVM （Windows 系统安装 [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)）  
安装 NVM 时，需要卸载已安装的 Nodejs 和 NPM，以避免冲突
:::

## 插件

图片点击缩放效果

[临时解决方案](https://github.com/vuejs/vitepress/issues/854#issuecomment-1232938474)

```
npm install medium-zoom
```

## 增加文章元数据

1. 元数据包括写作者、发布时间、浏览量
2. `$frontmatter` 用于页面级的配置，文章中的元数据可以由此传参，例如

```yaml
---
title: VitePress 进阶应用  // 标题
author: Robin            // 作者
date: 2024/07/22 16:30   // 发布时间
showViewCount: true      // 是否显示浏览量
showComments: true       // 是否显示评论
---
```

3. 开发自定义组件 `<ArticleMetadata/>`，获取静态渲染数据及接口异步加载的数据
4. 进一步，通过 markdown 解析规则在主标题`h1`标签下插入组件，作为全局配置
5. 浏览量的计数问题

- [x] 使用文章标题 + 发布时间生成 MD5 值，作为文章的唯一标识
- [x] 使用文章唯一标识而不是网页 URL 计数，这样当网页 URL 不变，标题或时间改变时，重新计数
- [ ] 进一步的，获取访客的 IP 地址、IP 归属地、浏览器信息、Referer

## 增加评论

现有插件如下，访问时可能需要科学上网，否则会出现异常

| 插件服务   | 服务器             | 说明                      | 最后一次更新 |
| ---------- | ------------------ | ------------------------- | ------------ |
| Disqus     | Disqus Server      | 链接 国外服务器，需要域名 | 第三方       |
| Gitalk     | GitHub Issues      | 链接 GitHub 议题          | 2 年前       |
| Utterances | GitHub Issues      | 链接 GitHub 议题          | 2 年前       |
| Giscus     | GitHub Discussions | 链接 GitHub 论坛          | 上月         |

该网站选择 Giscus 作为评论插件，它使用 GitHub 项目中的 Discussions 功能作为数据存储，实现步骤如下：

1. 创建 GitHub 公开项目，开启 Discussions 功能，安装 [GitHub Giscus App](https://github.com/apps/giscus)
2. 在 [Giscus](https://giscus.app/zh-CN) 配置页面中输入项目的仓库名称，自动生成脚本配置项
3. 实现 `<Comments />`自定义组件，填写脚本配置项
4. 实现自定义布局模版 `<MyLayout/>` 在插槽处插入 `<Comments />`组件
5. 使用 `frontmatter` 自定义属性控制是否在页面中显示评论组件

## 增加搜索

1. Algolia

<img src="/images/tools/algolia.png" alt="Algolia" width=400/>

Algolia 是实现网站搜索功能的第三方服务，接入服务需要满足网站是开源项目或技术博客，通过[DocSearch 官网](https://docsearch.algolia.com/apply/)申请 appId、apiKey

```js
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "...",
        apiKey: "...",
        indexName: "...",
      },
    },
  },
});
```

2. 本地搜索

```js
export default defineConfig({
  themeConfig: {
    search: {
      provider: "local",
      locales: {
        root: {
          // 如果只配置中文，zh 改为 root
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    },
  },
});
```

:::warning 问题
对中文的支持比较一般，例如“应用”、“学习”、“运维”等无法搜索到
:::

## 参考资料

- [源码参考](https://github.com/Charles7c/charles7c.github.io)
- [How to Integrate Giscus Comments into VitePress](https://aiktb.dev/blog/giscus-with-vitepress)
- [基于 giscus 为网站添加评论系统](https://fengchao.pro/blog/comment-system-with-giscus/)
- [搜索-VitePress](https://vitepress.dev/zh/reference/default-theme-search)
- [VitePress 如何开启 algolia 搜索功能](https://www.skillgroup.cn/framework/vitepress/algolia.html)
