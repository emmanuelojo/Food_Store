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
</style>