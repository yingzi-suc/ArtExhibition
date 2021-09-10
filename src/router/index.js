import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/index')
  },
  {
    path: '/register',
    component: () => import('../views/register/index')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index')
  },
  {
    path: '/home',
    component: () => import('../views/home/index')
  },
  {
    path: '/artheadines',
    name: 'Artheadines',
    component: () => import( '../views/artheadlines/index')
  },
  {
    path: '/findarts',
    name: 'FindArts',
    component: () => import( '../views/findarts/index')
  },
  {
    path: '/holdexhibitions',
    name: 'HoldExhibitions',
    component: () => import( '../views/holdexhibitions/index')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import( '../views/recommend/index')
  },
  {
    path: '/communication',
    name: 'Communication',
    component: () => import( '../views/communication/index')
  },

  {
    path: '/detail',
    name:'Detail',
    component: ()=> import('../views/detail/index')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
