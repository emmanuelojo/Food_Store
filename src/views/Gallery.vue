<template>
  <div class="gallery">
    <h3>Gallery</h3>
    <br />
    <p>A quick look at our most ordered recipes</p>

    <div class="pictures">
      <div class="big">
        <img src="@/assets/images/swallow.jpeg" alt="" id="BigImg" />
      </div>
      <div class="small">
        <img src="@/assets/images/swallow.jpeg" @click="document.getElementById('BigImg').src='@/assets/images/swallow.jpeg'" />
        <img src="@/assets/images/segg.jpg" @click="document.getElementById('BigImg').src='@/assets/images/segg.jpg'" />
        <img src="@/assets/images/beans.jpeg" @click="myFunction()" />
        <img src="@/assets/images/moimoi.jpeg" @click="myFunction()" />
        <img src="@/assets/images/pancake2.jpg" @click="myFunction()" />
        <img src="@/assets/images/pasta.jpg" @click="myFunction()" />
        <!-- <img src="@/assets/images/swallow.jpeg" @click="myFunction(this)">
                <img src="@/assets/images/segg.jpg" @click="myFunction(this)">
                <img src="@/assets/images/segg.jpg" @click="myFunction(this)">
                <img src="@/assets/images/beans.jpeg" @click="myFunction(this)">
                <img src="@/assets/images/moimoi.jpeg" @click="myFunction(this)">
                <img src="@/assets/images/pancake2.jpg" @click="myFunction(this)">
                <img src="@/assets/images/pasta.jpg" @click="myFunction(this)"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // myFunction(smallImg) {
    //   var fullImg = document.getElementById("BigImg");
    //   fullImg.src = smallImg.src;
    // },
    myFunction() {
      const imgSrc = document.getElementById('BigImg');
      imgSrc.src='@/assets/images/segg.jpg'
    }
  },
};
</script>

<style scoped>
.gallery {
  margin-top: 100px;
}

.pictures {
  margin: 20% auto;
  width: 1000px;
  max-width: 100%;
  margin-top: 20px;
  padding-top: 20px;
}
.big img {
  width: 700px;
  height: 500px;
  margin: auto;
  /* margin-left: 150px; */
  border-radius: 10px;
}
.small {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.small img {
  width: 100px;
  height: 100px;
  opacity: 0.6;
  border-radius: 5px;
  transition: 0.5s ease;
  margin: 5px;
}
.small img:hover {
  opacity: 1;
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .big img {
    width: 340px;
    height: 350px;
    /* object-fit: cover; */
    margin: auto;
  }

  .small {
    overflow-x: auto;
  }
}
</style>