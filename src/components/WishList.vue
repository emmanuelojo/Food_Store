<template>
  <div class="cart">
    <h2>Your wishlist</h2>
    <div class="noItem" v-if="!wishList.length">
      <div class="col-8">
        <h5>Empty wishlist</h5>
      </div>
    </div>
    <div v-else>
      <div v-for="item in wishList" :key="item.food.id">
        <div class="wishlist">
          <div>
            <img :src="item.food.image" alt="image" srcset="" />
            <h5>
              <strong>{{ item.food.title }}</strong>
            </h5>

            <p>₦{{ item.food.price.toFixed(2) }}</p>
            <button @click.prevent="removeFoodFromWishList(item.food)">
              Remove
            </button>
          </div>
        </div>
      </div>
      <!-- <div v-for="item in wishList" :key="item.food.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.food.title }}</strong>
          <br />
          ₦{{ item.food.price.toFixed(2) }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeFoodFromWishList(item.food)"
            >Remove</a
          >
        </div>
      </div>
      <hr />
    </div> -->

      <div class="d-flex justify-content-between" id="clearWishList">
        <button @click.prevent="clearWishListItems()">Clear Wishlist</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    wishList() {
      return this.$store.getters.wishListItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeFoodFromWishList(food) {
      this.$store.commit("removeFoodFromWishList", food);
    },
    clearWishListItems() {
      this.$store.commit("clearWishListItems");
    },
  },
};
</script>

<style scoped>
.cart {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100vh;
  padding-top: 50px;
  color: #fff;
}
.noItem h5{
  margin-top: 50px;
}
.wishlist div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* width: 95%; */
  margin: 20px auto;
}
.wishlist div img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.wishlist div h5 {
  margin: auto;
}
.wishlist div p {
  margin: auto;
}
.wishlist div button {
  height: 30px;
  margin: auto;
  padding-left: auto;
  padding-right: auto;
  color: white;
  background: red;
  border-radius: 5px;
  border: none;
  outline: none;
}
.wishlist div button:hover {
  cursor: pointer;
}
#clearWishList {
  margin-bottom: 50vh;
}
#clearWishList button {
  color: white;
  background: #1e1e35;
  margin-top: 30px;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
#clearWishList button:hover {
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .wishlist div {
    display: grid;
  }
  .wishlist div img {
    margin-top: 30px;
    width: 150px;
    height: 150px;
    border-radius: 5px;
  }
  .wishlist div h5 {
    font-size: 23px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .wishlist div p {
    font-size: 18px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .wishlist div button {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (width: 768px) {
  #clearWishList {
    margin-bottom: 65vh;
  }
}
</style>