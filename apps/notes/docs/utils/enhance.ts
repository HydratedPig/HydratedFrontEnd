import { Navbar } from '../types/base';
import { NavbarConfig, NavbarGroup, NavLink } from '@vuepress/theme-default';

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path: string) =>
  path.replace(TRAILING_SLASH_RE, '');

const LEADING_SLASH_RE = /^\//;
const removeLeadingSlash = (path: string) => path.replace(LEADING_SLASH_RE, '');

const joinLeadAndTrail = (leading: string, trailing: string) =>
  [removeTrailingSlash(leading), removeLeadingSlash(trailing)].join('/');

function handleNavLink(nav: NavLink, parent = '/') {
  if (nav.link) {
    nav.link = joinLeadAndTrail(parent, nav.link);
  }
}

function handleNavbarGroup(nav: NavbarGroup, parent = '/') {
  if (nav.children) {
    nav.children = recursiveNavbarGroup(nav.children, parent);
  }
}

function recursiveNavbarGroup(
  navbar: NavbarConfig,
  parent = '/'
): NavbarConfig {
  return navbar.map((nav) => {
    if (typeof nav === 'string') {
      return joinLeadAndTrail(parent, nav);
    }
    handleNavLink(nav as NavLink, parent);
    handleNavbarGroup(nav as NavbarGroup, (nav as NavLink).link || parent);
    return nav;
  });
}

export function enhanceNavbar(navbar: Navbar): Navbar {
  if (typeof navbar === 'boolean' || !navbar) return navbar;
  return recursiveNavbarGroup(navbar);
}
