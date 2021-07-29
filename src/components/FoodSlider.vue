<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>

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

</style>