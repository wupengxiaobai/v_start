import Vue from "vue";
import Router from "vue-router";

// 测试
import testRouter from "./test.js"
// 用户
import userRouter from './user.js'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
            path: "/",
            redirect: '/test'
        },
        ...testRouter,
        ...userRouter
    ]
});
