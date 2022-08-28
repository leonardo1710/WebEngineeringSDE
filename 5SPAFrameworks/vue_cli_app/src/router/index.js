import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home"),  // only load when route is visited - bundled in separate file
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // otherwise redirect to home
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  //public pages -> allowed to see if not logged in
  const publicPages = ['/login', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');
  
  // redirect to login page if not logged in and trying to access a restricted page
  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
})

export default router
