/**
 * 用户相关路由
 */

const testRouter = [{
    path: "/test",
    name: "test",
    component: () => import("@/views/Test.vue")
}]

export default testRouter