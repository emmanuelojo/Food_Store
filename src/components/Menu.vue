<template>
  <div>
    <h5>Discover our Menu and taste the difference</h5>
    <div class="header">
      <h1>Our Menu</h1>
      <hr />
    </div>

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="pills-burgers-tab"
          data-toggle="pill"
          href="#pills-burgers"
          role="tab"
          aria-controls="pills-burgers"
          aria-selected="true"
          >Burgers</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-desserts-tab"
          data-toggle="pill"
          href="#pills-desserts"
          role="tab"
          aria-controls="pills-desserts"
          aria-selected="false"
          >Desserts</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-drinks-tab"
          data-toggle="pill"
          href="#pills-drinks"
          role="tab"
          aria-controls="pills-drinks"
          aria-selected="false"
          >Drinks</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-pasta-tab"
          data-toggle="pill"
          href="#pills-pasta"
          role="tab"
          aria-controls="pills-pasta"
          aria-selected="false"
          >Pasta</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-pizzas-tab"
          data-toggle="pill"
          href="#pills-pizzas"
          role="tab"
          aria-controls="pills-pizzas"
          aria-selected="false"
          >Pizzas</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-salads-tab"
          data-toggle="pill"
          href="#pills-salads"
          role="tab"
          aria-controls="pills-salads"
          aria-selected="false"
          >Salads</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-branding-tab"
          data-toggle="pill"
          href="#pills-branding"
          role="tab"
          aria-controls="pills-branding"
          aria-selected="false"
          >Print & Branding</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-framing-tab"
          data-toggle="pill"
          href="#pills-framing"
          role="tab"
          aria-controls="pills-framing"
          aria-selected="false"
          >Framing</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-paintings-tab"
          data-toggle="pill"
          href="#pills-paintings"
          role="tab"
          aria-controls="pills-paintings"
          aria-selected="false"
          >Paintings</a
        >
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-renders"
        role="tabpanel"
        aria-labelledby="pills-renders-tab"
      >
        <div class="images-holder">
          <img src="images/r1.JPG" alt="renders" srcset="" />
          <img src="images/r2.JPG" alt="renders" srcset="" />
          <img src="images/r3.JPG" alt="renders" srcset="" />
          <img src="images/r4.JPG" alt="renders" srcset="" />
          <img src="images/r5.JPG" alt="renders" srcset="" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-logos"
        role="tabpanel"
        aria-labelledby="pills-logos-tab"
      >
        <div class="images-holder">
          <img src="images/l1.PNG" alt="logos" srcset="" />
          <img src="images/l2.PNG" alt="logos" srcset="" />
          <img src="images/l3.JPG" alt="logos" srcset="" />
          <img src="images/l4.PNG" alt="logos" srcset="" />
          <img src="images/l5.PNG" alt="logos" srcset="" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-flyers"
        role="tabpanel"
        aria-labelledby="pills-flyers-tab"
      >
        <div class="images-holder">
          <img src="images/f1.PNG" alt="flyers" srcset="" />
          <img src="images/f2.PNG" alt="flyers" srcset="" />
          <img src="images/f3.PNG" alt="flyers" srcset="" />
          <img src="images/f4.PNG" alt="flyers" srcset="" />
          <img src="images/f5.JPG" alt="flyers" srcset="" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-pencil"
        role="tabpanel"
        aria-labelledby="pills-pencil-tab"
      >
        <div class="images-holder">
          <img src="images/p1.JPG" alt="pencil" srcset="" />
          <img src="images/p2.JPEG" alt="pencil" srcset="" />
          <img src="images/p3.JPEG" alt="pencil" srcset="" />
          <img src="images/p4.JPEG" alt="pencil" srcset="" />
          <img src="images/p5.JPEG" alt="pencil" srcset="" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-ink"
        role="tabpanel"
        aria-labelledby="pills-ink-tab"
      >
        <div class="images-holder">
          <img src="images/i1.JPG" alt="ink" srcset="" />
          <img src="images/i2.jpg" alt="ink" srcset="" />
          <img src="images/i3.JPG" alt="ink" srcset="" />
          <img src="images/i4.JPG" alt="ink" srcset="" />
          <img src="images/i5.JPG" alt="ink" srcset="" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-photo"
        role="tabpanel"
        aria-labelledby="pills-photo-tab"
      >
        <div class="images-holder">
          <img src="images/ph1.JPEG" alt="photography" srcset="" />
          <img src="images/ph2.jpg" alt="photography" srcset="" />
          <img src="images/ph3.jpg" alt="photography" srcset="" />
          <img src="images/ph4.JPEG" alt="photography" srcset="" />
          <img src="images/ph5.JPEG" alt="photography" srcset="" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-branding"
        role="tabpanel"
        aria-labelledby="pills-branding-tab"
      >
        <div class="images-holder">
          <img src="images/b1.jpg" alt="branding" srcset="" />
          <img src="images/b2.jpg" alt="branding" srcset="" />
          <img src="images/b3.jpg" alt="branding" srcset="" />
          <img src="images/b4.jpg" alt="branding" srcset="" />
          <img src="images/b5.jpg" alt="branding" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>


<!--<template>
  <div class="food-categories" onload="show()">
    <h1>Our Menu</h1>
    <div 
      class="menu-holder"
      v-for="menu in allMenu"
      :key="menu"
      :menuItem="menu"
    >
      <div class="card">
        <img
          :src="menu.image"
          alt="menuName"
          srcset=""
        />
        <h3>{{ menu.title }} </h3>
        <p> {{ menu.description }} </p>

        <div class="more">
          <a href=""><i class="fa fa-arrow-right"></i></a>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuList',
  computed: mapGetters(['allMenu']),
}
</script>

<style scoped>
.food-categories h1{
  margin-top: 50px;
}
.menu-holder{  
  display: inline-block;
}
.card {
  width: 400px;
  margin: 20px;
  display: grid;
  height: 530px;
  background-color: #e8b772;
  box-shadow: 0 0 0 15 rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  margin-top: 70px;
}

.card img {
  border-radius: 0 0 50% 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.more a {
  text-decoration: none;
  background: transparent;
  margin: auto;
}
.more a .fa {
  color: #fff;
  background: transparent;
  padding: 15px;
  border-radius: 50%;
}
.more .fa:hover {
  color: #f2f2f2;
  background: orange;
  border: 2px solid #f2f2f2;
}

@media screen and (max-width: 767px){
  .food-categories h1{
    padding-bottom: 50px;
  }
  .card {
    width: 330px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>-->