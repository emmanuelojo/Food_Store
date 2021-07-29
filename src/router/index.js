import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Food from '@/pages/Food.vue'
import FoodStore from '@/pages/FoodStore.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food',
    name: 'food-list',
    component: FoodStore,
    // props: true
  },
  {
    path: '/food/:id',
    name: 'food',
    component: Food,
    // props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
