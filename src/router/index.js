import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue';
import Hero from '../components/Hero.vue';
import Contacts from '../components/Contacts.vue';
import Portfolio from '../components/Portfolio.vue';
import Snake from '../components/Snake.vue';





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/snake',
    name: 'Snake',
    component: Snake
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
