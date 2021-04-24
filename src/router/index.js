import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes, asyncRouterMap } from "./routes"
import store from "@/store";
import getRoutes from "@/utils/permission";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes
})

const paths = ['/login', '/findBack', 'logon'];
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  // 判断是为了消除重新刷新页面空白的清空
  if (paths.indexOf(to.path) === -1) {
    // 需要鉴权
    if (store.state.user.user.username) {
      // 加上除了/login是为了解决没有登录过，登录到成功页再次重定向到登陆页面时报错
      if (!isAddRoutes) {
        const menuRoutes = getRoutes(store.state.user.user.role, asyncRouterMap);
        store.dispatch("menu/setMenuRoutes", routes.concat(menuRoutes)).then(() => {
          // dispatch时异步的，等到resolve后再跳转页面，储存菜单路由信息
          router.addRoutes(menuRoutes);
          return next();
        });
        isAddRoutes = true;
      }
      return next();
    }
    return from.fullPath !== '/login' ? next("/login") : next();
  }
  // 不需要鉴权
  return next()
})
export default router;
