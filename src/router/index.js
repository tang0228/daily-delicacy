import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
import store from "@/store";

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.state.user.user.username && from.fullPath !== '/login') {
      // 加上除了/login是为了解决没有登录过，登录到成功页再次重定向到登陆页面时报错
      next();
    } else {
      next({
        path: "/login",
      })
    }
  } else {
    next()
  }
})

export default router
