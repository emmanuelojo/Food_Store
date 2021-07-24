<template>
<h2>Food details</h2>
  <div v-if="food">
    <h2>{{ food.title }}</h2>
    <h5>{{ food.price}} </h5>
    <p> {{ food.description }} </p>
  </div>
    <!-- <h2>{{ description }}</h2> -->
    <!-- <p>{{ foodItem.title }} </p> -->
 
  <button>Add to cart</button>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  props: ['foodItem'],
  computed: {
    description() {
      return this.foodItem.description
    },

    // ...mapGetters(['getFoodById']),

  },
  created() {
    // console.log(this.getFoodById(3));
  }
}
</script>