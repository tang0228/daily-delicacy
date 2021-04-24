import Home from "@/views/home/Home.vue";
import Login from "@/views/entry/Login.vue";
import Logon from "@/views/entry/Logon.vue";
import FindBack from "@/views/entry/FindBack.vue";
import Statistics from "@/components/statistics/Statistics.vue";
export const asyncRouterMap = [
    {
        path: '/product',
        name: "product",
        component: Home,
        meta: {
            title: "商品",
            auth: true,
            hidden: false,
            icon: "sketch"
        },
        children: [
            {
                path: "list",
                name: "productList",
                component: () => import("@/views/product/ProductList.vue"),
                meta: {
                    title: "商品列表",
                    hidden: false,
                    icon: "unordered-list",
                    auth: true
                }
            },
            {
                path: "add",
                name: "productAdd",
                component: () => import("@/views/product/ProductAdd.vue"),
                meta: {
                    title: "商品新增",
                    hidden: false,
                    icon: "plus",
                    auth: true
                }
            },
            {
                path: "category",
                name: "category",
                component: () => import("@/views/product/Category.vue"),
                meta: {
                    title: "商品类目管理",
                    hidden: false,
                    icon: "control",
                    auth: true
                }
            }
        ]
    }
];

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: "首页",
            auth: true,  // 添加该字段，表示只有用户登录才可以进入
            hidden: false,
            icon: "home"
        },
        redirect: "/home",
        children: [
            // 只有/匹配，才会进入home的router-view
            {
                path: "/home",
                name: "index",
                component: Statistics,
                meta: {
                    title: "统计",
                    hidden: false,
                    icon: "number",
                    auth: true
                }
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            title: "登录",
            hidden: true
        }
    },
    {
        path: "/logon",
        name: "logon",
        component: Logon,
        meta: {
            title: "注册",
            hidden: true
        }
    },
    {
        path: "/findBack",
        name: "findBack",
        component: FindBack,
        meta: {
            title: "找回密码",
            hidden: true
        }
    },
];

