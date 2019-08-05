/**
 * 用户相关路由
 */

const userRouter = [{
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/Mine.vue")
}]

export default userRouter