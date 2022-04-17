import { Navbar } from './types/base';
import { NavbarConfig } from '@vuepress/theme-default';
import { enhanceNavbar } from './utils/enhance';

const vueDesign: NavbarConfig = [
  { text: '框架设计概览', link: 'overview.md' },
  { text: '响应式系统', link: 'reactivity.md' },
  { text: '渲染器', link: 'renderer.md' },
  { text: '组件化', link: 'modularization.md' },
  { text: '编译器', link: 'compiler.md' },
  { text: '服务端渲染', link: 'ssr.md' },
];

const hitThePit: NavbarConfig = [{ text: '2022.04.17', link: '2022-04-17.md' }];

export const navbar: Navbar = enhanceNavbar([
  {
    text: 'Vue.js 设计与实现',
    link: '/vue-design',
    children: vueDesign,
  },
  {
    text: '踩坑记录',
    link: '/hit-the-pit',
    children: hitThePit,
  },
]);
