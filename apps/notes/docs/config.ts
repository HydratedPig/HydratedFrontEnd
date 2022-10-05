import type { DefaultThemeOptions } from 'vuepress';
import { defineUserConfig } from 'vuepress';
import { navbar } from './router';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '注水的笔记',
  description: '注水的猪的笔记',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/',
    navbar,
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/HydratedPig/HydratedFrontEnd/tree/master/apps/notes',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/:path',
  },
});
