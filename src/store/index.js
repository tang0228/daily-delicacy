import Vue from 'vue'
import Vuex from 'vuex'
import collapsed from "./collapsed";
import user from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collapsed,
    user
  }
})
