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
  // 加上除了/login是为了解决没有登录过，登录到成功页再次重定向到登陆页面时报错
  if (to.meta.auth && from.fullPath !== '/login') { 
    if (store.state.user.user.username) {
      next();
    } else {
      next({
        path: "/login",
      })
    }
  }else {
    next()
  }
})

export default router
