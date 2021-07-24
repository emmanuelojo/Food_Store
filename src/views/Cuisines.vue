<template>
  <div class="cuisines">
    <h3 class="african-title">African Cuisines</h3>
    <FoodList />
    <br />
    <br />
    <h3>Intercontinental Cuisines</h3>
    <FoodList2 />
  </div>
</template>

<script>
import FoodList from "@/views/FoodList.vue";
import FoodList2 from "@/views/FoodList2.vue";

export default {
  components: {
    FoodList,
    FoodList2,
  },
};
</script>

<style scoped>
/* .cuisines{
    margin-top: -130px;
} */
.african-title {
  margin-top: 80px;
}
.food-items {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
}
.food-items .item {
  position: relative;
  height: 350px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  place-content: center;
  width: 320px;
  margin: 30px;
  border-radius: 5px;
}
.food-items .item .img-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
.food-items .item:hover .img-box {
  width: 150px;
  height: 150px;
  border-radius: 0 0 50% 0;
  left: -75px;
  top: calc(50% -75px);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.food-items .item .img-box:before {
  content: attr(data-text);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 4em;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
}
.food-items .item .img-box img {
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
  border-radius: 5px;
}
.food-items .item:hover .img-box img {
  width: 200px;
}
.food-items .item .food-descr {
  position: absolute;
  right: 10px;
  width: calc(100% - 120px);
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: start;
}
.food-items .item .food-descr h2 {
  margin-top: 200px;
  margin-bottom: 5px;
  font-size: 24px;
}
.food-items .item .food-descr .order {
  margin-top: 120px;
}
.food-items .item .food-descr a {
  background: #333;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  padding: 5px;
  display: flex;
  justify-content: center;
}
.food-items .item .food-descr a:nth-child(2) {
  margin-top: 10px;
}

.item {
  width: 350px;
  height: 400px;
  padding: 20px;
}
.item img {
  width: 100%;
}
.food-descr {
  margin-top: -160px;
  margin-left: 80px;
  display: none;
  transition: ease-in 5s;
}
.food-items h2 {
  margin-left: 10px;
  padding-bottom: 10px;
}
.order {
  border: 2px solid #fff;
  border-radius: 10px;
}
.order a {
  text-decoration: none;
  color: aqua;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.item:hover .food-descr {
  display: block;
  transition: 5s ease-in;
}

.food-categories h1 {
  margin-top: 30px;
  margin-bottom: -30px;
  font-size: 25px;
}

@media screen and (max-width: 767px) {
  .african-title {
    margin-top: 180px;
  }
}
</style>