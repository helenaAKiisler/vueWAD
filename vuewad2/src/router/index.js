import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SignUpPage from '../views/SignUpPage.vue'

const routes = [{
        path: '/',
        name: 'main',
        component: MainPage
},
{
        path: '/signup',
        name: 'signuppage',
        component: SignUpPage
},
{
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router