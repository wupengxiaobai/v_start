import Vue from "vue";
import Router from "vue-router";
import Test from "@/views/Test.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
      path: "/",
      name: "test",
      component: Test
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    }
  ]
});