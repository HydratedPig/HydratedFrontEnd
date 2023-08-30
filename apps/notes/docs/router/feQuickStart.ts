import { NavbarConfig } from '@vuepress/theme-default';

export const feQuickStart: NavbarConfig = [
  {
    text: '前端基础',
    link: '/fe-quick-start',
    children: [
      {
        text: '总览',
        link: 'README.md',
      },
      {
        text: 'Javascript',
        link: 'javascript',
      },
      {
        text: 'Typescript',
        link: 'typescript',
      },
      {
        text: 'CSS',
        link: 'css',
      },
      {
        text: 'HTML',
        link: 'html',
      },
    ],
  },
];
