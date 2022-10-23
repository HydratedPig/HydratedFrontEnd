import { createRouter, createWebHistory } from 'vue-router';
import routes, { dynamicRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 权限校验，虽然这个项目好像没有权限.jpg
router.beforeEach((to, from, next) => {
  next();
});

function addDynamicRoutes() {
  dynamicRoutes.forEach((route) => {
    router.addRoute(route);
  });
}

addDynamicRoutes();

export default router;
