<template>
  <div>
    <food-slider />
    <Menu />
  </div>
</template>

<script>
import FoodSlider from '@/components/FoodSlider.vue'
import Menu  from '@/components/Menu.vue'


export default {
  components: {
    FoodSlider,
    Menu
  }
};
</script>

<style>
</style>