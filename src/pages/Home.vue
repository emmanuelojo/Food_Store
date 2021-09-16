<template>
  <div>
    <Intro />
  </div>
</template>

<script>
import Intro  from '@/components/Intro.vue'


export default {
  components: {
    Intro,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
</style>