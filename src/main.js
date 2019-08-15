import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store2_modules";
import "./plugin/vant";
import "./common/js/rem.js";

import Api from "./request/api";
Vue.prototype.$api = Api;

Vue.config.productionTip = false;



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");