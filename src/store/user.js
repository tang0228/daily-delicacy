import {setCookie, getUserCookie, removeCookie} from "@/utils/setUserCookie";
// 用户信息的存储
export default {
    namespaced: true,
    state: {
        user:getUserCookie()
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            setCookie(payload);
        },
        setLogout(state) {
            state.user = {
                username: "",
                appkey: "",
                role: "",
                email: ""
            }
        }
    },
    actions: {
        setUser({commit}, payload) {
            commit("setUser", payload);
        },
        setLogout({commit}) {
            commit("setLogout");
            removeCookie();
        }
    }

}