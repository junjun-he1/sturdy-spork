import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Python 训练项目中心',
  description: '系统化的 Python 学习项目与实战练习平台',
  lang: 'zh-CN',
  vite: {
    build: {
      outDir: 'dist'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/projects/': [
        {
          text: '项目分类',
          items: [
            { text: '基础语法', link: '/projects/basics/' },
            { text: '数据分析', link: '/projects/data-analysis/' },
            { text: 'Web 开发', link: '/projects/web/' },
            { text: '自动化脚本', link: '/projects/automation/' },
            { text: '机器学习', link: '/projects/ml/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/junjun-he1/sturdy-spork' }
    ],
    footer: {
      message: 'Python 训练项目中心',
      copyright: 'Copyright © 2026'
    }
  }
})
