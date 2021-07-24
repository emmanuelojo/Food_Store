import Beans from '@/assets/images/beans.jpeg'
import Jollof from '@/assets/images/jollof.jpeg'
import Moimoi from '@/assets/images/moimoi.jpeg'
import Swallow from '@/assets/images/swallow.jpeg'
import Ofada from '@/assets/images/ofada.jpeg'

import cake from '@/assets/images/cake.jpg'
import veggieToast from '@/assets/images/veggieToast.jpg'
import pancake2 from '@/assets/images/pancake2.jpg'
import pancake from '@/assets/images/pancake.jpg'
import friedEgg from '@/assets/images/friedEgg.jpg'
import pasta from '@/assets/images/pasta.jpg'
// import sandwich from '@/assets/images/sandwich.jpg'
import sautee from '@/assets/images/sautee.jpg'
import segg from '@/assets/images/segg.jpg'


function updateStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const state = {
  foods: [
    {
      id: 1,
      title: "Ofada rice",
      description: "Tasty Nigerian local rice",
      image: Ofada,
      price: 500
    },
    {
      id: 2,
      title: "Ewa Agoyin",
      description: "Tasty Nigerian local beans",
      image: Beans,
      price: 200
    },
    {
      id: 3,
      title: "Jollof rice",
      description: "Tasty Nigerian jollof rice",
      image: Jollof,
      price: 700
    },
    {
      id: 4,
      title: "Moimoi",
      description: "Tasty moimoi",
      image: Moimoi,
      price: 500
    },
    {
      id: 5,
      title: "Semo",
      description: "Tasty semo",
      image: Swallow,
      price: 500
    }
  ],
  internationalFoods: [
    {
      id: 1,
      title: "Veggie Toast",
      description: "French Toast with veggies",
      image: veggieToast,
      price: 500
    },
    {
      id: 2,
      title: "Stir Fried Eggs",
      description: "Nicely stir-fried eggs",
      image: segg,
      price: 200
    },
    // {
    //   id: 3,
    //   title: "Sandwich",
    //   description: "Every tasty sandwich",
    //   image: sandwich,
    //   price: 350
    // },
    {
      id: 4,
      title: "Cake",
      description: "Freshly baked cakes according to your taste",
      image: cake,
      price: 12000
    },
    {
      id: 5,
      title: "Pasta",
      description: "Long, non-break pasta ",
      image: pasta,
      price: 600
    },
    {
      id: 6,
      title: "Pancake",
      description: "Buttermilk filled pancakes ",
      image: pancake2,
      price: 400
    },
    {
      id: 7,
      title: "Fried Eggs",
      description: "Fried eggs with an Italian touch ",
      image: friedEgg,
      price: 150
    },
    {
      id: 8,
      title: "Sautee",
      description: "Tasty, delicious sautee ",
      image: sautee,
      price: 250
    }
  ],
  menuList: [
    {
      id: 1,
      title: "Breakfast Menu",
      description: "Tasty sumptuous meals, just as hot as you like it",
      image: pancake,
    },
    {
      id: 2,
      title: "Lunch Menu",
      description: "Tasty sumptuous meals, just as hot as you like it",
      image: sautee,
    },
    {
      id: 3,
      title: "Dinner Menu",
      description: "Tasty sumptuous meals, just as hot as you like it",
      image: segg,
    }
  ],
  // singleFoodItem: [],
  singleFoodItem: {},
  cart: [],
  current: null
};
const getters = {
  allFoods: state => state.foods,
  allInternationalFoods: state => state.internationalFoods,
  allMenu: state => state.menuList,
  oneFoodItem: state => state.singleFoodItem,
  userCart: state => state.cart,

  foodQuantity: state => food => {
    const item = state.cart.find(elem => elem.id === food.id);

    if (item) return item.quantity
    else return null
  },

  cartItems: state => {
    return state.cart
  },
  cartTotal: state => {
    return state.cart.reduce((a, b) => {
      a + (b.price * b.quantity)
    }, 0)
  },

  foodCount: (state, getters) => {
    return getters.allFoods.length
  }

};

const mutations = {
  addToCart: (state, food) => {
    let item = state.cart.find(elem => elem.id === food.id);

    if (item) {
      item.quantity++
    } else {
      state.cart.push({ ...food, quantity: 1 })
    }
    updateStorage(state.cart)
  },

  removeFromCart: (state, food) => {
    let item = state.cart.find(elem => elem.id === food.id);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.cart = state.cart.filter(elem => elem.id !== food.id)
      }
    }
    updateStorage(state.cart)
  },

  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem('cart');
    if (cart) {
      state.cart = JSON.parse(cart)
    }
  },

  // singleFood: (state, id) => state.foods = state.foods.find(food => food.id === id),
  singleFood: (state, foodItem) => state.singleFoodItem = foodItem,
  // [currentFoodById] (state, id) {
  //   state.current = state.foods.find((elem) => elem.id == id)
  // }


  // setFoods: (state, val) => state.foods = val,
  // setFood: (state, val) => state.singleFoodItem = val,
  // // setLoad: (state, val) => state.uploadingData = val,
  setCart: (state, val) => state.cart = val,
};


const actions = {
  // getFood( {commit }, id) {
  //   state.foods.findIndex(state.foods.id);
  //   commit('singleFood', state.foods)
  // } 
  getFood({ commit }, id) {
    state.foods = state.foods.find(food => food.id === id);
    commit('singleFood', state.foods)

    // console.log(state.foods)
  },
  addCart({ commit, getters }, payload) {
    let cart = getters.cart
    cart.push(payload)
    commit('setCart', cart)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

// import { createStore } from 'vuex'

// import KnittedSockBoot from './assets/images/beans.jpeg'
// import SquareToeAnkleBoots from './assets/images/jollof.jpeg'
// import ChelseaBoots from './assets/images/moimoi.jpeg'
// import ChunkyChelseaBoots from './assets/images/swallow.jpeg'
// import PatentAnkleBoots from './assets/images/ofada.jpeg'


// export default createStore({
//   // state is the same as what would typically go inside of the data object when using Vue without Vuex.
//   state: {
//     items: [
//         {
//             id: 1,
//             name: 'Chelsea boots',
//             sizes: [3, 4, 5, 6, 7, 8],
//             price: 45,
//             image: ChelseaBoots
//         },
//         {
//             id: 2,
//             name: 'Knitted sock boots',
//             sizes: [3, 4, 5, 6, 7, 8],
//             price: 80,
//             image: KnittedSockBoot
//         },
//         {
//             id: 3,
//             name: 'Square toe ankle boots',
//             sizes: [4, 5, 7, 8],
//             price: 40,
//             image: SquareToeAnkleBoots
//         },
//         {
//             id: 4,
//             name: 'Chunky Chelsea boots',
//             sizes: [3, 4, 5, 6, 7],
//             price: 60,
//             image: ChunkyChelseaBoots
//         },
//         {
//             id: 5,
//             name: 'Patent ankle boots',
//             sizes: [3, 4, 5, 8],
//             price: 70,
//             image: PatentAnkleBoots
//         }
//     ],
//     cart: []
//   },
//   // getters are Vuex's equivalent to computed properties in Vue.
//   // functions here will always contain state as a parameter
//   getters: {
//       total: state => {
//             if(state.cart.length > 0) {
//                 return state.cart.map(item => item.price).reduce((total, amount) => total + amount);
//             } else {
//                 return 0;
//             }
//       }
//   },
//   // mutations are essentially functions that update state in some way.
//   // You can think of these as kind of being Vuex's equivalent to Vue's methods.
//     mutations: {
//         addToCart(state, payload) {
//             return state.cart.push(payload);
//         }
//     },
//   // actions are effectively the functions that get called by your components in order to trigger a mutation.
//   actions: {
//       // add(context) {
//       //     context.commit('add')
//       // }
//   }
// })