import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes, asyncRouterMap} from "./routes"
import store from "@/store";
import getRoutes from "@/utils/permission";

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: "hash",
  routes
})
const router = new createRouter();

let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要鉴权
    if (store.state.user.user.username) {
      // 加上除了/login是为了解决没有登录过，登录到成功页再次重定向到登陆页面时报错
      if(!isAddRoutes) {
        const menuRoutes = getRoutes(store.state.user.user.role, asyncRouterMap);
        store.dispatch("menu/setMenuRoutes", routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();

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
