<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cartItems" :key="item.food.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.food.title }}</strong>
          <br />
          {{ item.quantity }} x ₦{{ item.food.price.toFixed(2) }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeFoodFromCart(item.food)"
            >Remove</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: ₦{{ cartTotalPrice.toFixed(2) }}</span>
      <a href="#" @click.prevent="clearCartItems()">Clear Tray</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeFoodFromCart(food) {
      this.$store.commit("removeFoodFromCart", food);
    },
    clearCartItems() {
      this.$store.commit("clearCartItems");
    },    
  },
};
</script>

<style>
</style>