import { defaultTheme, defineUserConfig } from 'vuepress';
import { environmentPlugin } from './plugin/environment';
import { navbar } from './router';

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: '注水的笔记',
  description: '注水的猪的笔记',

  // 主题和它的配置
  theme: defaultTheme({
    home: '/',
    navbar,
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/HydratedPig/HydratedFrontEnd/tree/master/apps/notes',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/:path',
  }),
  plugins: [environmentPlugin],
});
