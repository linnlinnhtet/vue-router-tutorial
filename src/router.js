import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import About from "@/views/About"
import Login from "@/views/Login"
import ProductHome from "@/views/ProductHome"
import ProductDetail from "@/views/ProductDetail"
import Profile from "@/views/Profile"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/products', component: ProductHome },
    { path: '/products/:id', component: ProductDetail },
    {
        path: '/profile', component: Profile
    },
];
const router = new VueRouter({
    mode: 'history',
    routes
});
router.beforeEach((to, from, next) => {
    if (to.path === '/profile' || to.path === '/products') {
        let auth = localStorage.getItem('auth');
        if (auth) {
            next();
        } else {
            next('/login');
        }
    } else {
        next()
    }
})
export default router;