<template>
  <div>
    <h3>Congrats</h3>
    <p>Your payment was successful</p>
    <hr>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style scoped>
h3 {
  margin: 30px 0 100px 0;
}
hr {
  margin-bottom: 55vh;
  visibility: hidden;
}
@media screen and (width: 768px) {
  hr {
    margin-bottom: 55vh;
  }
}
</style>