<template>
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
    <!--<div class="menu">
            <div class="lunch" id="lunch">
                <img src="@/assets/images/pancake.jpg" alt="">
                <div class="text">
                    <h2 class="breakfast">Breakfast Menu</h2>
                    <br>
                    <p>Tasty sumptuous meals, just as hot as you like it </p>
                    <br><a href=""><i class="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="lunch" id="lunchs">
                <img src="@/assets/images/sautee.jpg" alt="">
                <div class="text">
                    <h2>Lunch Menu</h2>
                    <br>
                    <p>Tasty sumptuous meals, just as hot as you like it</p>
                    <br><a href=""><i class="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="lunch" id="lunch">
                <img src="@/assets/images/segg.jpg" alt="">
                <div class="text">
                    <h2>Dinner Menu</h2>
                    <br>
                    <p>Tasty sumptuous meals, just as hot as you like it </p>
                    <br><a href=""><i class="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>-->
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
  /* display: flex;
  margin: auto;
  justify-content: center; */

  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: auto;
}
.more a .fa {
  color: #fff;
  background: transparent;
  padding: 15px;
  border-radius: 50%;
  /* border: 2px solid #ffff; */
}
.more .fa:hover {
  color: #f2f2f2;
  background: orange;
  border: 2px solid #f2f2f2;
}
/* .menu {
  display: flex;
  margin: auto;
  justify-content: space-evenly;
}
.text {
  padding: 20px;
}
.text h1 {
  padding-bottom: 20px;
  text-align: center;
}
.text .fa {
  padding-left: 20px;
}
.text a {
  text-decoration: none;
  cursor: pointer;
}
.text p {
  padding-top: 20px;
}
.lunch {
  height: 530px;
  width: 300px;
  background-color: #e8b772;
  box-shadow: 0 0 0 15 rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  margin-top: 150px;
}
.lunch img {
  border-radius: 0 0 50% 0;
  width: 100%;
  height: 250px;
}
.lunch p,
.lunch h2 {
  color: #fff;
}
.breakfast {
  font-size: 30px;
}
.lunch a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lunch .fa {
  color: orange;
  background: #f2f2f2;
  padding: 15px;
  border-radius: 50%;
}
.lunch .fa:hover {
  color: #f2f2f2;
  background: orange;
  border: 2px solid #f2f2f2;
} */

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
</style>