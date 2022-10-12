import { NavbarConfig } from '@vuepress/theme-default';

export const readingBook: NavbarConfig = [
  {
    text: '读书笔记',
    link: '/reading-book',
    children: [{ text: 'Vue.js 设计与实现', link: 'vue-design' }],
  },
];
