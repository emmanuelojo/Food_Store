<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- <a class="navbar-brand" href="#">KVNG</a> -->
    <div class="navbar-brand">
      <img src="@/assets/images/logo.png" alt="" srcset="" />
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

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <ul class="navbar-nav mr-auto"> -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/images/beans.jpeg"
          class="d-block w-100"
          alt="kvng1"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>DELICIOUS</h5>
          <p>Good food has no religion</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/moimoi.jpeg"
          class="d-block w-100"
          alt="kvng2"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>APPETIZING</h5>
          <p>Good food has no religion</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/swallow.jpeg"
          class="d-block w-100"
          alt="kvng3"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>AROMATIZING</h5>
          <p>Good food has no religion</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/jollof.jpeg"
          class="d-block w-100"
          alt="kvng3"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>TANTALIZING</h5>
          <p>Good food has no religion</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/images/suya.jpeg"
          class="d-block w-100"
          alt="kvng3"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>SUMPTUOUS</h5>
          <p>Good food has no religion</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- <Gallery /> -->
  <Cuisines />
  <Menu />

  <div class="footer">
    <div class="end-img">
      <img src="@/assets/images/logo.png" />
    </div>
    <div class="end">
      <div class="address">
        <p>
          Lekki Phase 1 <br />
          Lekki<br />
          Banana Island, <br />
          Lagos, Nigeria.
        </p>
      </div>
      <div class="end-contact">
        <p>
          <a href="#"><i class="fa fa-phone"></i>+234 123 456 7890</a>
        </p>
        <p>
          <a href="#"><i class="fa fa-phone"></i>+234 123 456 7890</a>
        </p>
        <p>
          <a href="#"><i class="fa fa-envelope"></i>info@gmail.com</a>
        </p>
      </div>

      <div class="icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-pinterest"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
// import Gallery from "@/views/Gallery.vue";
import Cuisines from "@/views/Cuisines.vue";
import Menu from "@/views/Menu.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    // Gallery,
    Cuisines,
    Menu,
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #000 !important;
}
.navbar-brand {
  color: goldenrod;
  width: 80px;
  height: 80px;
}
.navbar-brand img {
  width: 100%;
  height: 100%;
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
.carousel-item {
  height: 500px;
}
.carousel-item img {
  height: 500px;
  object-fit: cover;
}

#carouselExampleIndicators ol li {
  border-radius: 50%;
}

ol.carousel-indicators li,
ol.carousel-indicators li.active {
  width: 1rem;
  height: 1rem;
  margin: 0;
  border-radius: 50%;
  border: 0;
  background: transparent;
}
ol.carousel-indicators li {
  background: rgba(255, 255, 255, 0.39);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid goldenrod;
}

ol.carousel-indicators li.active {
  background: goldenrod;
  width: 15px;
  height: 15px;
  padding: 0;
  border: 1px solid goldenrod;
}

.carousel-caption {
  margin-bottom: 100px;
}
.carousel-caption h5 {
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 25px;
  font-family: poppins, sans-serif;
}
.carousel-caption p {
  width: 75%;
  margin: auto;
  padding-top: 20px;
  font-size: 25px;
  line-height: 1.9px;
  font-family: sans-serif;
}

.footer {
  margin-top: 10%;
  /* background: #091921; */
  background: black;
}

.end-title {
  display: flex;
  justify-content: center;
  place-content: center;
}
.end {
  /* color: #fff; */
  color: goldenrod;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.footer-count {
  display: flex;
  justify-content: center;
  place-content: center;
}
.end-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  margin-bottom: 20px;
}
.end-img img {
  width: 50px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50%;
}
.end-title h2 {
  font-size: 40px;
  padding-left: 10px;
  /* color: #fff; */
  color: goldenrod;
}
.end p .fa {
  padding: 0 10px;
}
.end-contact a {
  text-decoration: none;
  cursor: pointer;
  /* color: #fff; */
  color: goldenrod;
}
.end-contact a:hover {
  /* color: yellow; */
  color: #fff;
}
.icons {
  padding: 20px;
}
.icons a {
  /* color: #fff; */
  color: goldenrod;
  padding: 20px;
}
.icons a:hover {
  /* color: yellow; */
  color: #fff;
}
</style>
