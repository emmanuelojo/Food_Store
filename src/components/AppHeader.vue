<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
    <nav class="navbar navbar-expand-lg">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"> <i class="fa fa-bars"></i> </span>
      </button>
      <div class="navbar-brand">
        <img src="@/assets/images/logo.png" alt="" srcset="" />
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- <ul class="navbar-nav mr-auto"> -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/food">Food Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <!-- <div>
        <div class="dropdown open">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ cartItemCount }} Tray
          </button>
          <div @click="$event.stopPropagation()">
            <mini-cart />
          </div>
        </div>
      </div>  -->
      <!-- <input
      type="text"
      class="search-bar"
      v-model="search"
      :search="search"
      placeholder="Search food items"
    /> -->
      <div class="btns">
        <div class="cartBtn">
          <div class="cartIcon">
            <p>{{ cartItemCount }}</p>
            <router-link :to="{ name: 'cartList' }" class="router"
              ><i class="fa fa-shopping-cart"></i
            ></router-link>
          </div>
        </div>
        <div class="cartBtn">
          <div class="cartIcon">
            <p>{{ wishListCount }}</p>
            <router-link :to="{ name: 'wishList' }" class="router"
              ><i class="fa fa-heart"></i
            ></router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import MiniCart from "./MiniCart";
export default {
  // components: { MiniCart },
  data() {
    return {
      search: " ",
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItems.length;
    },
    wishListCount() {
      return this.$store.getters.wishListCount;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: rgb(30, 30, 53);
}
/* .bg-light {
  background: rgb(49, 49, 78);
} */
.navbar-brand {
  color: goldenrod;
  width: 50px;
  height: 50px;
}
.navbar-brand img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
/* .navbar-nav {
    float: right;
} */
.nav-item {
  margin: 0 20px;
}
.navbar .navbar-toggler {
  color: goldenrod;
  border-color: goldenrod;
}
.navbar .navbar-toggler-icon i {
  color: goldenrod;
  margin-top: 5px;
}
.navbar .navbar-nav .active > .nav-link,
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link.show,
.navbar .navbar-nav .show > .nav-link {
  color: goldenrod;
}
.navbar .navbar-nav .nav-link:hover {
  color: goldenrod;
}
.navbar .navbar-nav .nav-link {
  color: goldenrod;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: goldenrod;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0px;
}
.btns {
  display: flex;
}
.cartBtn {
  margin-left: 10px;
}
.cartBtn .cartIcon {
  display: flex;
}
.cartBtn .cartIcon p {
  color: #ffff;
}
.cartBtn .cartIcon .router i {
  font-size: 25px;
  margin: auto;
  padding-top: 5px;
  color: goldenrod;
}
</style>