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
        <h3>No food with that name</h3>
      </div>
    </div>
    <div v-else class="d-flex align-items-stretch flex-wrap">
      <food-card v-for="food in filteredFoods" :key="food.id" :food="food" />
    </div>
  </div>
  <!-- <div class="noItem" v-if="!reviews.length">
    <div class="col-8">
      <h3>No food with that name</h3>
    </div>
  </div> -->
</template>

<script>
import FoodCard from "./FoodCard";
export default {
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
    filteredFoods() {
      return this.foods.filter((food) => {
        // return food.title.match(this.search);
        return food.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
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
}
.noItem {
  /* top: 50%;
  left: 50%; */
  display: flex;
  justify-content: center;
  margin: 150px auto;
}
</style>
