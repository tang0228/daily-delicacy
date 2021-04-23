import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import FindBack from "@/views/FindBack.vue";


export default [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            auth: true  // 添加该字段，表示只有用户登录才可以进入
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/logon",
        name: "logon",
        component: Register
    },
    {
        path: "/findBack",
        name: "findBack",
        component: FindBack
    },

];