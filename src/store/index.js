import Vue from 'vue'
import Vuex from 'vuex'
import collapsed from "./collapsed";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collapsed
  }
})
