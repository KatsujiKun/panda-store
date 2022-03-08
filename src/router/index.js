import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

// 注册路由地址
export default new Router({
    routes: [
        // 路由重定向
        { path: '/', redirect: '/login' },
        // 登录页面
        { path: '/login', component: () => import('../pages/login'), name: 'Login' },
        // 注册页面
        { path: '/register', component: () => import('../pages/login/register'), name: 'Register'},
        // 首页页面
        { path: '/index', component: () => import('../pages/home'), name: 'index' },
        // 个人中心页面
        { path: '/my', component: () => import('../pages/mine'), name: 'my'},
        // 购物车页面
        { path: '/cart', component: () => import('../pages/cart'), name: 'cart'}
    ]
})
