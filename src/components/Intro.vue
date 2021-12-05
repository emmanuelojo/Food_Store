<template>
  <div class="main">
    <div class="intro-holder">
      <img src="@/assets/images/food.jpeg" alt="" />

      <div class="intro">
        <h3>Dine Out Restaurant</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          eum minus. Odit culpa nam aliquam laudantium dignissimos eius,
          accusantium impedit ipsa hic ratione explicabo dolores quibusdam
          numquam earum quidem! Mollitia?
        </p>
        <a href="#menu">Our Menu </a>
      </div>
    </div>

    <div id="about">
      <h5>Our Story</h5>
      <h3>About Us</h3>
      <div class="about">
        <div class="about-msg">
          <h4>Welcome To Dine Out Restaurant</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            adipisci, amet quasi tempora quos eaque dolore. Voluptatibus vero
            dolores omnis eius! Explicabo quasi dignissimos.
          </p>
          <!-- <br> -->
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            accusamus vero, pariatur culpa sapiente, excepturi voluptates esse
            dolorum inventore dignissimos velit ex suscipit veniam perspiciatis
            sequi ab magnam, officia temporibus?
          </p>
          <a href="#menu">Check Our Menu</a>
        </div>
        <!-- <img src="@/assets/images/beans.jpeg" alt="" /> -->
        <img src="@/assets/images/food4.jpg" alt="" srcset="" />
      </div>
    </div>

    <div id="menu">
      <h5>Order Now</h5>
      <h3>Our Menu</h3>

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-breakfast-tab"
            data-toggle="pill"
            href="#pills-breakfast"
            role="tab"
            aria-controls="pills-breakfast"
            aria-selected="true"
            >Breakfast</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-lunch-tab"
            data-toggle="pill"
            href="#pills-lunch"
            role="tab"
            aria-controls="pills-lunch"
            aria-selected="false"
            >Lunch</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-dinner-tab"
            data-toggle="pill"
            href="#pills-dinner"
            role="tab"
            aria-controls="pills-dinner"
            aria-selected="false"
            >Dinner</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-drinks-tab"
            data-toggle="pill"
            href="#pills-drinks"
            role="tab"
            aria-controls="pills-drinks"
            aria-selected="false"
            >Drinks</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-desserts-tab"
            data-toggle="pill"
            href="#pills-desserts"
            role="tab"
            aria-controls="pills-desserts"
            aria-selected="false"
            >Desserts</a
          >
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-breakfast"
          role="tabpanel"
          aria-labelledby="pills-breakfast-tab"
        >
          <div class="images-holder">
            <div class="card">
              <img src="@/assets/images/sandwich.jpg" alt="" />
              <h4>Breakfast One</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/food6.jpg" alt="" />
              <h4>Breakfast Two</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/veggieToast.jpg" alt="" />
              <h4>Breakfast Three</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-lunch"
          role="tabpanel"
          aria-labelledby="pills-lunch-tab"
        >
          <div class="images-holder">
            <div class="card">
              <img src="@/assets/images/jollof.jpeg" alt="" />
              <h4>Lunch One</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/ofada.jpeg" alt="" />
              <h4>Lunch Two</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/beans.jpeg" alt="" />
              <h4>Lunch Three</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-dinner"
          role="tabpanel"
          aria-labelledby="pills-dinner-tab"
        >
          <div class="images-holder">
            <div class="card">
              <img src="@/assets/images/swallow.jpeg" alt="" />
              <h4>Dinner One</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/moimoi.jpeg" alt="" />
              <h4>Dinner Two</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/sautee.jpg" alt="" />
              <h4>Dinner Three</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-drinks"
          role="tabpanel"
          aria-labelledby="pills-drinks-tab"
        >
          <div class="images-holder">
            <div class="card">
              <img src="@/assets/images/drinks.png" alt="" />
              <h4>Drinks One</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/drinks2.jpg" alt="" />
              <h4>Drinks Two</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/drinks3.jpg" alt="" />
              <h4>Drinks Three</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-desserts"
          role="tabpanel"
          aria-labelledby="pills-desserts-tab"
        >
          <div class="images-holder">
            <div class="card">
              <img src="@/assets/images/desserts.jpg" alt="" />
              <h4>Desserts One</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/desserts5.jpg" alt="" />
              <h4>Desserts Two</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
            <div class="card">
              <img src="@/assets/images/desserts6.jpg" alt="" />
              <h4>Desserts Three</h4>
              <p>
                Lorem ipsum dolor sit amet Quis dolorem cumque provident sequi
                odit?
              </p>
              <h6>₦22</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="testimonials">
      <h5>Testimonials</h5>
      <h3>Some Feedbacks</h3>

      <div class="reviews">
        <div class="card">
          <div class="reviewer">
            <div class="reviewer-details">
              <h4>Andy Doe</h4>
              <p>Food Tasting Expert</p>
            </div>
            <!-- <img src="@/assets/images/user1.png" alt="" /> -->
            <img src="@/assets/images/user1.png" alt="" srcset="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae ea illum magnam cupiditate. At dicta placeat
            eaque maxime quas error laudantium, consequatur quia autem, vel
            dolor deserunt beatae eligendi.
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>

        <div class="card">
          <div class="reviewer">
            <div class="reviewer-details">
              <h4>Bella Doe</h4>
              <p>Food Tasting Expert</p>
            </div>
            <!-- <img src="@/assets/images/user2.png" alt="" /> -->
            <img src="@/assets/images/user2.png" alt="" srcset="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae ea illum magnam cupiditate. At dicta placeat
            eaque maxime quas error laudantium, consequatur quia autem, vel
            dolor deserunt beatae eligendi.
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>

        <div class="card">
          <div class="reviewer">
            <div class="reviewer-details">
              <h4>Candy Doe</h4>
              <p>Food Tasting Expert</p>
            </div>
            <!-- <img src="@/assets/images/user3.png" alt="" /> -->
            <img src="@/assets/images/user3.png" alt="" srcset="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae ea illum magnam cupiditate. At dicta placeat
            eaque maxime quas error laudantium, consequatur quia autem, vel
            dolor deserunt beatae eligendi.
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>

    <div id="team">
      <h5>Team</h5>
      <h3>Our Chefs</h3>

      <div class="chefs">
        <div class="card">
          <!-- <img src="@/assets/images/user1.png" alt="" /> -->
          <img src="@/assets/images/chef.jpg" alt="" srcset="" />
          <div class="chef-details">
            <h4>Chef One</h4>
            <p>Head Chef</p>
          </div>
        </div>
        <div class="card">
          <!-- <img src="@/assets/images/user2.png" alt="" /> -->
          <img src="@/assets/images/chef5.png" alt="" srcset="" />
          <div class="chef-details">
            <h4>Chef Two</h4>
            <p>Executive Chef</p>
          </div>
        </div>
        <div class="card">
          <!-- <img src="@/assets/images/chef2.jpg" alt="" /> -->
          <img src="@/assets/images/chef2.jpg" alt="" srcset="" />
          <div class="chef-details">
            <h4>Chef Three</h4>
            <p>Sous Chef</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  background: rgb(12, 12, 26);
}
.intro-holder {
  position: relative;
}
.intro-holder img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
.intro {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  margin-top: -25%;
  margin-left: auto;
  margin-right: auto;
  /* margin: auto; */
}
.intro h3 {
  /* margin-top: 200px; */
  color: #fff;
  font-style: italic;
  font-size: 35px;
  text-align: center;
}
.intro p {
  text-align: center;
  color: #fff;
}

.intro a {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 120px;
  text-decoration: none;
  color: orange;
  margin: auto;
  padding: 6px 15px;
  /* background: #fff; */
  border: 1px solid orange;
  border-radius: 15px;
  transition: 0.3s ease-in-out;
}
.intro a:hover {
  background: orange;
  color: #fff;
}
#about {
  width: 90%;
  margin-top: 130px;
  margin-left: auto;
  margin-right: auto;
}
#about h5 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
  color: orange;
  font-style: italic;
  font-size: 17px;
}

#about h3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5px;
  color: #fff;
}

.about {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
}
.about-msg {
  display: grid;
  width: 50%;
  text-align: left;
}
.about-msg h4 {
  color: #fff;
  margin-top: 50px;
}

.about-msg p {
  color: rgb(243, 241, 241);
  margin-top: -10px;
  /* margin-bottom: 10px; */
}

.about-msg a {
  width: 160px;
  text-decoration: none;
  color: orange;
  margin-top: auto;
  margin-bottom: auto;
  padding: 6px 15px;
  border: 1px solid orange;
  border-radius: 18px;
  transition: 0.3s ease-in-out;
}
.about-msg a:hover {
  background: #fff;
  border: 1px solid #fff;
}
.about img {
  margin-top: 40px;
  padding: 20px;
  border-radius: 35px;
  height: 400px;
}

#menu {
  width: 90%;
  margin: auto;
}
#menu h5 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
  color: orange;
  font-style: italic;
  font-size: 17px;
}

#menu h3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5px;
  color: #fff;
}
#menu .nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
}
#menu .nav .nav-item a {
  color: orange;
}

.nav-pills .nav-link.active {
  background: #fff;
}

.images-holder {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.images-holder .card {
  width: 300px;
  height: 400px;
  margin: 10px 30px;
}
.images-holder .card:hover {
  cursor: pointer;
  /* box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%); */
  /* box-shadow: rgb(30, 30, 53); */
  box-shadow: 0 2px 1px -1px red, 0 1px 1px 0 red, 0 1px 3px 0 red;
}
.images-holder .card img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
}
.images-holder .card h4 {
  margin-top: 10px;
}
.images-holder .card p {
  padding-left: 10px;
  padding-right: 10px;
}
.images-holder .card h6 {
  color: #000;
  letter-spacing: 1px;
}
#testimonials {
  width: 90%;
  margin: auto;
}
#testimonials h5 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
  color: orange;
  font-style: italic;
  font-size: 17px;
}

#testimonials h3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 50px;
  color: #fff;
}

.reviews {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
}
.reviews .card {
  background: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  width: 350px;
  margin: 10px;
}

.reviewer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin: auto; */
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
}
.reviewer-details {
  display: grid;
  margin-top: 0;
}
.reviewer-details h4 {
  display: flex;
  color: #fff;
  /* margin-left: -35px; */
}
.reviewer-details p {
  display: flex;
  color: gray;
  margin-left: -15px;
  font-weight: 600;
}

.reviewer img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.reviews .card p {
  color: gray;
  text-align: left;
  padding-left: 15px;
  padding-right: 5px;
}
.stars {
  display: flex;
  padding-left: 10px;
  padding-right: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
}
.stars i {
  color: orange;
  margin-left: 5px;
}

#team {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}
#team h5 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
  color: orange;
  font-style: italic;
  font-size: 17px;
}

#team h3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5px;
  color: #fff;
}

.chefs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  padding-bottom: 50px;
}

.chefs .card {
  position: relative;
  border: 1px solid gray;
  border-radius: 10px;
  width: 350px;
  height: 350px;
  /* margin: 10px; */
  margin: 50px auto;
  transition: 0.3s ease-in;
}

.chefs .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.chefs .card .chef-details {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 30px;
  bottom: -45px;
  width: 80%;
  border-radius: 10px;
  background: rgb(30, 30, 53);
  transition: 0.3s ease-in;
}

.chefs .card .chef-details h4 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  margin-top: 15px;
}
.chefs .card .chef-details p {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
}
.chefs .card:hover {
  cursor: pointer;
}
.chefs .card:hover .chef-details {
  bottom: 0;
  /* margin-top: -91px;
  margin-left: auto;
  margin-right: auto; */
  border-radius: 10px;
  background: orange;
  transition: 0.3s ease-in;
}
@media screen and (max-width: 450px) {
  .intro {
    margin-top: -110%;
  }
  .intro h3 {
    font-size: 25px;
  }
  .intro p {
    font-size: 14px;
  }
  .intro a {
    margin-top: 20px;
  }

  #about {
    margin-top: 0px;
  }
  .about {
    display: grid;
    width: 100%;
  }
  .about-msg {
    width: 100%;
  }

  .about .about-msg p {
    margin-top: 20px;
  }
  .about img {
    width: 330px;
  }

  .chefs .card {
    width: 330px;
    height: 300px;
    margin: 50px 0;
  }
  .chefs .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* width: 330px; */
  }
}
@media screen and (width: 768px) {
  .intro {
    margin-top: -55%;
  }
  .intro h3 {
    font-size: 25px;
  }
  .intro p {
    font-size: 14px;
  }
  .intro a {
    margin-top: 20px;
  }

  #about {
    margin-top: 150px;
  }
  .about {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
  .about img {
    width: 330px;
  }

  .images-holder {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }

  .images-holder .card {
    width: 250px;
  }

  .reviews {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }

  .reviews .card {
    width: 250px;
  }

  .chefs {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }

  .chefs .card {
    width: 330px;
    height: 300px;
    margin: 70px 5px;
  }
  .chefs .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* width: 330px; */
  }
}
@media screen and (max-width: 850px) {
  .intro {
    /* margin-top: -55%; */
    display: none;
  }
}
</style>
