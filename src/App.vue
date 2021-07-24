<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <Home /> -->
  <router-view/>  
    <!-- <div id="app">
    <router-view/> 
  </div> -->
  <!-- <div id="app">
    <FoodList />
    <router-view/> 
  </div> -->
</template>
<script>
// import FoodList  from '@/views/FoodList.vue'
// import Home from '@/pages/Home.vue'

export default {
  components: {
    // FoodList
    // Home
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<!--
<template>
  <div id="app">
    <div class="header">
      <h1>The Boot Store</h1>

      <shopping-cart :cart="shoppingCart" :total="totalAmount"></shopping-cart>
    </div>

    <section class="items-container">
      <item v-for="product in products"
        :key="product.key"
        :item="product">
      </item>
    </section>

    <section class="items-container">
      <food v-for="food in foods"
        :key="food.id"
        :food="food" >
      </food>
      <div>
        <shopping-tray :tray="shoppingTray" :totalPlates="totalPrice"></shopping-tray>
      </div>
    </section> 
  </div>
</template>

<script>
import Item from './components/Item.vue';
import ShoppingCart from './components/ShoppingCart.vue'
import Food from './components/Food.vue';
import ShoppingTray from './components/ShoppingTray.vue'
export default {
  name: 'app',
  components: {
      ShoppingCart,
      Item,
      Food,
      ShoppingTray
  },
  computed: {
      shoppingCart() {
          return this.$store.state.cart
      },
      products() {
          return this.$store.state.items
      },
      totalAmount() {
          return this.$store.getters.total
      },
      shoppingTray() {
        return this.$store.state.tray
      },
      foods() {
        return this.$store.state.foods
      },
      totalPrice() {
        return this.$store.getters.totalPlates
      }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, sans-serif;
}
h1 {
  font-size: 1.2em;
}
.header {
  background: #2d2d2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 15px;
  margin: 0;
}
.items-container {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
select {
  width: 140px;
  -webkit-appearance: none;
  padding: 7px;
  background: antiquewhite;
  font-size: 1em;
}
button {
  width: 140px;
  -webkit-appearance: none;
  background-color: #1d85ca;
  color: white;
  border-radius: 5px;
  font-size: 0.9em;
  height: 56px;
  cursor: pointer;
}
select {
  cursor: pointer;
}
</style>-->
