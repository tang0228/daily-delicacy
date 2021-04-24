export default {
    namespaced: true,
    state: {
        menuRoutes: []
    },
    mutations: {
        setMenuRoutes(state, payload) {
            state.menuRoutes = payload;
        }
    },
    actions: {
        setMenuRoutes({commit}, payload) {
            commit("setMenuRoutes", payload);
        }
    }
}