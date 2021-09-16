<template>
  <div>
    <input
      type="text"
      class="search-bar"
      v-model="search"
      placeholder="Search food items"
    />
    <div class="noItem" v-if="!filteredFoods.length">
      <div class="col-8">
        <h3>Your Search Results: </h3>
        <h5>No food with that name</h5>
      </div>
    </div>
    <div v-else id="foodlist" class="d-flex align-items-stretch flex-wrap">
      <div v-for="food in newItems" :key="food.id">
        <p> {{ food.name}} </p>
      </div>
      <food-card v-for="food in filteredFoods" :key="food.id" :food="food" />
    </div>
  </div>
</template>

<script>
import FoodCard from "./FoodCard";
export default {
  // props: ['search'],
  // props: {
  //   search: String
  // },
  components: {
    FoodCard,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    foods() {
      return this.$store.getters.allFoods;
    },
    places() {
      return this.$store.getters.allPlaces;
    },
    newItems() {
      return this.$store.getters.newItems;
    },
    
    filteredFoods() {
      return this.foods.filter((food) => {
        // return food.title.match(this.search);
        return food.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  beforeMount(){
    console.log("search is here", typeof this.search)
  }
};
</script>

<style scoped>
input[type="text"] {
  width: 80vw;
  padding: 7px 20px;
  margin: 20px 0 50px 0;
  box-sizing: border-box;
  border: 2px solid #000;
  border-radius: 5px;
}
input[type="text"]:focus {
  border-radius: 5px;
  border: 2px solid #000;
  border: none;
  outline: none;
}
.noItem {
  /* top: 50%;
  left: 50%; */
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: 150px auto;
  margin-right: 150px auto;
  /* margin-bottom: 14%; */
  margin-bottom: 100vh;
  color: #fff;
}
#foodlist{
  margin-bottom: 100px
}
/* @media screen and (max-width: 850px) {
  .noItem {
    margin-bottom: 67%;
  };
} */
</style>
