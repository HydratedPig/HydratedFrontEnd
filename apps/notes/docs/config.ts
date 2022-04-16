import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '注水的笔记',
  description: '注水的猪的笔记',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/',
    navbar: [
      { text: 'Vue.js 设计与实现', link: 'vue-design' },
      {
        text: 'xxxx',
        link: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      },
    ],
    logo: 'https://vuejs.org/images/logo.png',
  },
});
