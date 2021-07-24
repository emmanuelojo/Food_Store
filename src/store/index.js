import { createStore } from 'vuex'
import foods from './modules/foods';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    foods
  }
})


// import { createStore } from 'vuex'

// import Beans from '@/assets/images/beans.jpeg'
// import Jollof from '@/assets/images/jollof.jpeg'
// import Moimoi from '@/assets/images/moimoi.jpeg'
// import Swallow from '@/assets/images/swallow.jpeg'
// import Ofada from '@/assets/images/ofada.jpeg'


// export default createStore({
//   // state is the same as what would typically go inside of the data object when using Vue without Vuex.
//   state: {
//     items: [
//         {
//             id: 1,
//             name: 'Chelsea boots',
//             sizes: [3, 4, 5, 6, 7, 8],
//             price: 45,
//             image: Moimoi
//         },
//         {
//             id: 2,
//             name: 'Knitted sock boots',
//             sizes: [3, 4, 5, 6, 7, 8],
//             price: 80,
//             image: Beans
//         },
//         {
//             id: 3,
//             name: 'Square toe ankle boots',
//             sizes: [4, 5, 7, 8],
//             price: 40,
//             image: Jollof
//         },
//         {
//             id: 4,
//             name: 'Chunky Chelsea boots',
//             sizes: [3, 4, 5, 6, 7],
//             price: 60,
//             image: Swallow
//         },
//         {
//             id: 5,
//             name: 'Patent ankle boots',
//             sizes: [3, 4, 5, 8],
//             price: 70,
//             image: Ofada
//         }
//     ],
//     foods: [
//       {
//         id: 1,
//         title: "Ofada rice",
//         description: "Tasty Nigerian local rice",
//         image: Ofada,
//         price: 500 
//       },
//       {
//         id: 2,
//         title: "Ewa Agoyin",
//         description: "Tasty Nigerian local beans",
//         image: Beans,
//         price: 200 
//       },
//       {
//         id: 3,
//         title: "Jollof rice",
//         description: "Tasty Nigerian jollof rice",
//         image: Jollof,
//         price: 700 
//       },
//       {
//         id: 4,
//         title: "Moimoi",
//         description: "Tasty moimoi",
//         image: Moimoi,
//         price: 500 
//       },
//       {
//         id: 5,
//         title: "Semo",
//         description: "Tasty semo",
//         image: Swallow,
//         price: 500 
//       }
//     ],
//     cart: [],
//     tray: []
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
//       },
//       totalPlates: state => {
//         if(state.tray.lenght > 0) {
//           return state.tray.map( elem => elem.price).reduce((sum, amt) => sum + amt);
//         } else{
//           return 0;
//         }
//       }
//   },
//   // mutations are essentially functions that update state in some way.
//   // You can think of these as kind of being Vuex's equivalent to Vue's methods.
//     mutations: {
//         addToCart(state, payload) {
//             return state.cart.push(payload);
//         },
//       addToTray(state, payload) {
//         return state.tray.push(payload);
//       }  
//     },
//   // actions are effectively the functions that get called by your components in order to trigger a mutation.
//   actions: {
//       // add(context) {
//       //     context.commit('add')
//       // }
//   }
// })
