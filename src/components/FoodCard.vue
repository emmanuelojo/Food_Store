<template>
  <div style="flex-wrap: wrap; margin:auto" class="d-flex jc-center mt-3">
    <div class="card h-100 text-left">
      <img class="w-100" :src="food.image" alt />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{name: 'food', params: {id: food.id}}">{{ food.title }}</router-link>
        </h4>
        <strong>₦{{ food.price.toFixed(2) }}</strong>
        <p class="card-text">{{ food.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">Add to Tray</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["food"],
  methods: {
    ...mapActions("cart", ["addToCart"]),
    addToCart() {
      this.$store.commit('addFoodToCart', {
        food: this.food,
        quantity: 1
      })
    }
  }
};
</script>

<style scoped>
.card{
    width: 350px;
    height: 350px;
    margin-bottom: 20px;
}
.card  img{
  height: 200px;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 450px){
    .card{
        width: 320px;
    }
}
</style>