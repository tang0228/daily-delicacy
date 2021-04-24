import Vue from 'vue'
import Vuex from 'vuex'
import collapsed from "./collapsed";
import user from "./user";
import menu from "./menu";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collapsed,
    user,
    menu
  }
})
