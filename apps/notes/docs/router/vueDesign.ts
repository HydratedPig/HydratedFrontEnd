import { NavbarConfig } from '@vuepress/theme-default';

export const vueDesign: NavbarConfig = [
  { text: '框架设计概览', link: 'overview.md', activeMatch: 'overview' },
  { text: '响应式系统', link: 'reactivity.md' },
  { text: '渲染器', link: 'renderer.md' },
  { text: '组件化', link: 'modularization.md' },
  { text: '编译器', link: 'compiler.md' },
  { text: '服务端渲染', link: 'ssr.md' },
];
