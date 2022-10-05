import { NavbarConfig } from '@vuepress/theme-default';
import { Navbar } from '../types/base';
import { enhanceNavbar } from '../utils/enhance';
import { feQuickStart } from './feQuickStart';
import { leetcode } from './leetcode';
import { vueDesign } from './vueDesign';

const hitThePit: NavbarConfig = [{ text: '2022.04.17', link: '2022-04-17.md' }];

export const navbar: Navbar = enhanceNavbar([
  ...feQuickStart,
  ...vueDesign,
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
