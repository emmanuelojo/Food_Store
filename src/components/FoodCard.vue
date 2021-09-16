<template>
    <div style="flex-wrap: wrap; margin: auto" class="d-flex jc-center mt-3">
      <div class="card h-100 text-left">
        <img class="w-100" :src="food.image" alt />
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{ name: 'food', params: { id: food.id } }">{{
              food.title
            }}</router-link>
          </h4>
          <strong>₦{{ food.price.toFixed(2) }}</strong>
          <p class="card-text">{{ food.description }}</p>
        </div>
        <div class="px-4 pb-3" id="btns">
          <button class="add-btn" @click="addToCart()">Add to Tray</button>
          <i @click="addToWishList(food)" class="fa fa-heart"></i>
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
      this.$store.commit("addFoodToCart", {
        food: this.food,
        quantity: 1,
      });
    },
    addToWishList(food) {
      this.$store.commit("addToWishList", {
        food: food,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 350px;
  height: 350px;
  margin-bottom: 20px;
}
.card img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

#btns .add-btn {
  background: #1e1e35;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 7px 15px;
}
#btns .add-btn:hover{
  cursor: pointer;
}
#btns i {
  padding-top: 10px;
  margin-left: 20px;
  font-size: 23px;
  color: orange;
  /* padding: 5px;
  background: rgb(209, 208, 208);
  border-radius: 50%; */
}
#btns i:hover {
  cursor: pointer;
}
@media screen and (max-width: 450px) {
  .card {
    width: 320px;
  }
}
</style>