import { Navbar } from '../types/base';
import { NavbarConfig } from '@vuepress/theme-default';
import { enhanceNavbar } from '../utils/enhance';
import { vueDesign } from './vueDesign';
import { leetcode } from './leetcode';

const hitThePit: NavbarConfig = [{ text: '2022.04.17', link: '2022-04-17.md' }];

export const navbar: Navbar = enhanceNavbar([
  {
    text: 'Vue.js 设计与实现',
    link: '/vue-design',
    children: vueDesign,
  },
  {
    text: 'leetcode 刷题记录',
    link: 'leetcode',
    children: leetcode,
  },
  {
    text: '踩坑记录',
    link: '/hit-the-pit',
    children: hitThePit,
  },
]);
