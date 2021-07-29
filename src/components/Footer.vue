<template>
  <div class="footer">
    <div class="end-img">
      <img src="@/assets/images/logo.png" />
    </div>
    <div class="end">
      <div class="address">
        <p>
          Lekki Phase 1 <br />
          Lekki<br />
          Banana Island, <br />
          Lagos, Nigeria.
        </p>
      </div>
      <div class="end-contact">
        <p>
          <a href="#"><i class="fa fa-phone"></i>+234 123 456 7890</a>
        </p>
        <p>
          <a href="#"><i class="fa fa-phone"></i>+234 123 456 7890</a>
        </p>
        <p>
          <a href="#"><i class="fa fa-envelope"></i>info@gmail.com</a>
        </p>
      </div>

      <div class="icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-pinterest"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.footer {
  margin-top: 10%;
  background: black;
}

.end-title {
  display: flex;
  justify-content: center;
  place-content: center;
}
.end {
  color: goldenrod;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.footer-count {
  display: flex;
  justify-content: center;
  place-content: center;
}
.end-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  margin-bottom: 20px;
}
.end-img img {
  width: 50px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50%;
}
.end-title h2 {
  font-size: 40px;
  padding-left: 10px;
  color: goldenrod;
}
.end p .fa {
  padding: 0 10px;
}
.end-contact a {
  text-decoration: none;
  cursor: pointer;
  color: goldenrod;
}
.end-contact a:hover {
  color: #fff;
}
.icons {
  padding: 20px;
}
.icons a {
  color: goldenrod;
  padding: 20px;
}
.icons a:hover {
  color: #fff;
}
</style>