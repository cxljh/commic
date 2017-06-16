import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Info from '@/components/info'
import Login from '@/components/login'
import Register from '@/components/register'
import Search from '@/components/search'
import Xtx from '@/components/xtx'
import Classify from '@/components/classify'
import Comic from '../comic'
import ComicInfo from '@/components/comicInfo'
import Watch from '@/components/watch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comic',
      component: Comic,
      children:[
        {path:"home",
         name:"home",
        component:Home},
        {path:"comicInfo/:id",
         name:"comicInfo",
        component:ComicInfo},
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'info',
          name: 'info',
          component: Info
        },
        {
          path: 'classify',
          name: 'classify',
          component: Classify
        },
      ],
      redirect: { name: 'home' }
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/xtx/:id',
      name: 'xtx',
      component: Xtx
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    },
    {
      path: '/login/:id',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {path:"/comicInfo",
       name:"comicInfo",
      component:ComicInfo
    },
   
  ]
})
