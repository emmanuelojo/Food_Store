<template>
  <div class="foods">
    <div class="food" v-for="food in allFoods" :key="food" :foodItem="food">
      <div class="card">
        <img :src="food.image" style="object-fit: cover; width: 100%; height: 200px; border-radius: 10px 10px 0 0" alt="foodName" srcset="">
        <h3> {{ food.title }} </h3>
        <h5> N {{ food.price.toFixed(2) }} </h5>
        <p> {{ food.description }} </p>

        <div class="cart-total" v-if="product_total">
          <h3> In Cart</h3>
          <h4> {{ product_total }} </h4>
        </div>

        <div class="order">
          <a @click="removeFromCart">Remove </a>
          <a @click="addToCart()">Place Order</a>
          <!-- <router-link :foodItem="food" :to="{ name: 'food', params: {id: food.id} }"> Read More </router-link> -->
          <!-- <router-link @click="$emit('view-food', food)" :to="{ name: 'food', params: {id: food.id} }"> Read More </router-link> -->
          <!-- <button class="view-food-button" @click="$emit('view-food', food)">Read More</button> -->
  
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FoodList',
  // computed: mapGetters(['allFoods']),
  computed: {
    ...mapGetters(['allFoods']),
    product_total() {
      return this.$store.getters.foodQuantity(this.food)
    }
  },
  mounted(){
    // this.$store.dispatch('getFood')
  },
  data() {
    return {
      // food: null,
      active: {
        food_drawer: false
      } 
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart');
      // console.log(food, "it must show");
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.allFoods)
    }
  } 
}
</script>

<style scoped>
.foods{
  /* margin-top: 50px; */
  /* margin-top: 200px; */
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 400px;
  margin: 20px;
  display: grid;
  border-radius: 10px 10px 0 0;
}
.card h3{
  margin-top: 30px;
}
.order{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.order a{
  background: #333;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.order a:hover{
  text-decoration: none;
  color: #fff;
  background: #333;
}

@media screen and (max-width: 767px){
  .card{
    width: 340px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>