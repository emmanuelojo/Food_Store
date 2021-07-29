<template>
  <div class="d-flex jc-c mt-5" id="foodHolder" v-if="food">
    <!-- class="row mt-5" -->
    <div class="col-4">
      <img :src="food.image" class="w-100" id="foodImg" />
    </div>
    <div class="col-8">
      <h1>{{ food.title }}</h1>
      <h3>₦{{ food.price.toFixed(2) }}</h3>

      <!-- <input
        type="number"
        v-model.number="quantity"
        class="text-center col-1 mr-2 p-1"
      /> -->
      <button class="btn btn-secondary" @click="addToCart()">
        Add to Tray
      </button>

      <p class="mt-4">{{ food.description }}</p>
    </div>
  </div>
  <div class="noItem" v-else>
    <div class="col-8">
      <h3>No food with that id</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["product"]),
    ...mapGetters({ food: "singleFoodItem" }),
  },
  mounted() {
    console.log(this.id);
    this.$store.commit("setSingleFood", this.id);
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addProductToCart"]),
    addToCart() {
      this.$store.commit("addFoodToCart", {
        food: this.food,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
#foodHolder {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.noItem{
  display: flex;
  justify-content: center;
  margin: 150px auto;
}
</style>