import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Placelist from '../views/Placelist.vue'
import Placelist_filter from '../views/Placelist_filter.vue'
import User_Regis from '../views/User_Regis.vue'
import User_Info from '../views/User_Info.vue'
import User_Login from '../views/User_Login.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Placelist',
    name: 'Placelist',
    component: Placelist
  },
  {
  path: '/User_Regis',
  name: 'User_Regis',
  component: User_Regis
},
{
  path: '/User_Info',
  name: 'User_Info',
  component: User_Info
},
{
  path: '/User_Login',
  name: 'User_Login',
  component: User_Login
},
{
  path: '/Placelist_filter',
  name: 'Placelist_filter',
  component: Placelist_filter
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
