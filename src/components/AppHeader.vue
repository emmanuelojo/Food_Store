<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>
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
      </div>

      
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
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
  components: { MiniCart },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItems.length;
    },
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #000 !important;
}
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
.navbar-light .navbar-toggler {
  color: goldenrod;
  border-color: goldenrod;
}
.navbar-light .navbar-toggler-icon i {
  color: goldenrod;
  margin-top: 5px;
}
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
  color: goldenrod;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: goldenrod;
}
.navbar-light .navbar-nav .nav-link {
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
</style>