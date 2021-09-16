import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Food from '@/pages/Food.vue'
import FoodStore from '@/pages/FoodStore.vue'

import Failure from "/src/components/PaymentFailure.vue";
import Success from "/src/components/PaymentSuccess.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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
  {
    path: '/foodCart',
    name: 'cartList',
    component: () => import('@/components/MiniCart.vue')
  },
  {
    path: '/wishlist',
    name: 'wishList',
    component: () => import('@/components/WishList.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/components/Checkout.vue')
  },
  {
    path: "/payment-failure",
    name: "Failure",
    component: Failure
  },
  {
    path: "/payment-success",
    name: "Success",
    component: Success
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
