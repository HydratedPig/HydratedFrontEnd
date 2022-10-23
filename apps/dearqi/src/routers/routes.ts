// import x from '@/';
// console.log(x);

import { RouteRecordRaw } from 'vue-router';
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@hydrated-apps/dearqi/views/home/Home.vue'),
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import('@hydrated-apps/dearqi/views/three/Three.vue'),
  },
];

export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import('@hydrated-apps/dearqi/views/exception/NotFound.vue'),
  },
];
