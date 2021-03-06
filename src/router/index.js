import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Placelist from '../views/Placelist.vue';
import Placelist_filter from '../views/Placelist_filter.vue';
import User_Regis from '../views/User_Regis.vue';
import User_Info from '../views/User_Info.vue';
import User_Login from '../views/User_Login.vue';
import Booking from '../views/Booking.vue';
import Admin from '../views/Admin.vue';
import Admin_News from '../views/Admin_News.vue';
import Admin_Addplace from '../views/Admin_Addplace.vue';
import Admin_EditPlace from '../views/Admin_EditPlace.vue';
import Admin_UserM from '../views/Admin_UserM.vue';
import User_Booking from '../views/User_Booking.vue';
import Building_Home from '../views/Building_Home.vue';
import User_Noti from '../views/User_Noti.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Placelist',
    name: 'Placelist',
    component: Placelist,
  },
  {
    path: '/User_Regis',
    name: 'User_Regis',
    component: User_Regis,
  },
  {
    path: '/User_Info',
    name: 'User_Info',
    component: User_Info,
  },
  {
    path: '/User_Login',
    name: 'User_Login',
    component: User_Login,
  },
  {
    path: '/Placelist_filter',
    name: 'Placelist_filter',
    component: Placelist_filter,
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: Booking,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/Admin_News',
    name: 'Admin_News',
    component: Admin_News,
  },
  {
    path: '/Admin_Addplace',
    name: 'Admin_Addplace',
    component: Admin_Addplace,
  },
  {
    path: '/Admin_EditPlace',
    name: 'Admin_EditPlace',
    component: Admin_EditPlace,
  },
  {
    path: '/Admin_UserM',
    name: 'Admin_UserM',
    component: Admin_UserM,
  },  {
    path: '/User_Booking',
    name: 'User_Booking',
    component: User_Booking,
  },
  {
    path: '/Building_Home',
    name: 'Building_Home',
    component: Building_Home,
  },
  {
    path: '/User_Noti',
    name: 'User_Noti',
    component: User_Noti,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
