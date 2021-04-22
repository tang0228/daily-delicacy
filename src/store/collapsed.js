
// 折叠栏的闭合
export default {
    namespaced: true,
    state: {
        collapsed: false,
    },
    mutations: {
        setCollapsed(state) {
            state.collapsed = !state.collapsed;
        }
    },
    actions: {
        changeCollapsed({commit}) {
            commit("setCollapsed")
        }
    }
}