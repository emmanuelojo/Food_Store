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
import sautee from '@/assets/images/sautee.jpg'
import segg from '@/assets/images/segg.jpg'


function updateLocalStorage(cart) {
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
    },
    {
      id: 6,
      title: "Veggie Toast",
      description: "French Toast with veggies",
      image: veggieToast,
      price: 500
    },
    {
      id: 7,
      title: "Stir Fried Eggs",
      description: "Nicely stir-fried eggs",
      image: segg,
      price: 200
    },
    {
      id: 8,
      title: "Cake",
      description: "Freshly baked cakes according to your taste",
      image: cake,
      price: 12000
    },
    {
      id: 9,
      title: "Pasta",
      description: "Long, non-break pasta ",
      image: pasta,
      price: 600
    },
    {
      id: 10,
      title: "Pancake",
      description: "Buttermilk filled pancakes ",
      image: pancake2,
      price: 400
    },
    {
      id: 11,
      title: "Fried Eggs",
      description: "Fried eggs with an Italian touch ",
      image: friedEgg,
      price: 150
    },
    {
      id: 12,
      title: "Sautee",
      description: "Tasty, delicious sautee ",
      image: sautee,
      price: 250
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
  singleFood: null,
  cart: [],
  current: null,
  counter: 0
};

const mutations = {

  setSingleFood: (state, id) => {
    const singleFood = state.foods.find(food => food.id === +id);
    // console.log("all foods",state.foods)
    console.log({ singleFood, id: +id });
    if (!singleFood) {
      return state.singleFood = null;
    }
    state.singleFood = singleFood;
  },

  addFoodToCart: (state, { food, quantity }) => {
    let foodInCart = state.cart.find(item => {
      return item.food.id == food.id;
    });

    if (foodInCart) {
      foodInCart.quantity += quantity;
      return
    }
    state.cart.push({
      food, quantity
    });

    updateLocalStorage(state.cart)
  },

  // removeFoodFromCart: (state, food) => {
  //   state.cart = state.cart.filter(elem => {
  //     return elem.food.id !== food.id
  //   })
  // },

  removeFoodFromCart: (state, food) => {
    let item = state.cart.find(elem => elem.food.id === +food.id);
    console.log("about to be removed", item)

    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.cart = state.cart.filter(elem => elem.food.id !== food.id)
      }
    }
    // updateStorage(state.cart)
  },

  
  clearCartItems: state => {
    state.cart = [];
  }

};


const actions = {
  addToCart: ({ commit }, { food, quantity }) => {
    commit('addFoodToCart', { food, quantity });
  },

  addCart({ commit, getters }, payload) {
    let cart = getters.cart
    cart.push(payload)
    commit('setCart', cart)
  }
};


const getters = {
  allCounter: state => state.counter,
  allFoods: state => state.foods,
  allInternationalFoods: state => state.internationalFoods,
  allMenu: state => state.menuList,
  oneFoodItem: state => state.singleFoodItem,
  userCart: state => state.cart,

  singleFoodItem: (state) => {
    return state.singleFood
  },

  getFood: (state, getters) => (id) => {
    // state.food = state.foods.find(food => food.id === foodId);
    // commit('singleFood', state.food)
    console.log(state.food)
    return getters.allFoods.find(food => food.id === id)
  },

  foodQuantity: (state, getters) => food => {
    const item = getters.cartItems.find(elem => elem.id === food.id);

    if (item) {      
      console.log(item.quantity)
      return item.quantity
    }
    else return null
  },

  cartItems: state => {
    return state.cart
  },

  // cartItemCount: state => {
  //   return state.cart.length;
  // },

  cartItemCount: (state, getters) => {
    return getters.cartItems.length;
  },

  cartTotal: state => {
    return state.cart.reduce((a, b) => {
      a + (b.price * b.quantity)
    },0)
  },

  cartTotalPrice: state => {
    let total = 0;

    state.cart.forEach(item => {
      total += item.food.price * item.quantity;
    });

    return total;
  },

  foodCount: (state, getters) => {
    return getters.allFoods.length
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
