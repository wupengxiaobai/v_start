import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "./common/js/rem.js"

// request2 挂在请求
import Api from "./request2/api"
Vue.prototype.$api = Api

Vue.config.productionTip = false;


import {
  Button
} from 'vant';
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");