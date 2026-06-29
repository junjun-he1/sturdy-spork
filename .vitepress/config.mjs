import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的博客',
  description: '一个基于 VitePress 的静态博客与文档站点',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: 'Hello World', link: '/posts/hello' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/junjun-he1/sturdy-spork' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026'
    }
  }
})
