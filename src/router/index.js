import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Rules from '../views/Rules'
import Scoreboard from "@/views/Scoreboard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: Scoreboard
  },
]

const router = new VueRouter({
  routes
})

export default router
