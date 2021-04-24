import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'
import router from './router'
import store from './store'
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import "@/assets/css/reset.less";

Vue.use(Antd);
Vue.use(VCharts);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
