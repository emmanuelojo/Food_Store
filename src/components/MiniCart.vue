<template>
  <div>
    <div class="cart">
      <h2>Your cart</h2>
      <div class="noItem" v-if="!cartItems.length">
        <div class="col-8">
          <h5>Empty cart</h5>
          <div v-if="paidFor">
          <h2>Payment successful</h2>
          <img
            src="https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif"
            alt=""
            srcset=""
          />
        </div>
        </div>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.food.id" :item="item">
          <!-- <div class="px-2 d-flex justify-content-between">
            <div>
              <strong>{{ item.food.title }}</strong>
              <br />
              {{ item.quantity }} x ₦{{ item.food.price.toFixed(2) }}
            </div>
            <div>
              <a
                href="#"
                class="badge badge-secondary"
                @click.prevent="removeFoodFromCart(item.food)"
                >Remove</a
              >
            </div>
          </div> -->
          <div class="cartlist">
            <div>
              <img :src="item.food.image" alt="image" srcset="" />

              <h5>
                <strong>{{ item.food.title }}</strong>
              </h5>
              <p>{{ item.quantity }} x ₦{{ item.food.price.toFixed(2) }}</p>
              <button @click.prevent="removeFoodFromCart(item.food)">
                Remove
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div class="d-flex justify-content-between">
          <span>Total: ₦{{ cartTotalPrice.toFixed(2) }}</span>
          <a class="clearCart" href="#" @click.prevent="clearCartItems()">Clear Tray</a>
        </div>

        <!-- <button>Checkout</button> -->
        <!-- <button><router-link to="/checkout"> Checkout </router-link></button> -->

        <!-- <section class="row payment-form">

        <h5 class="#e0e0e0 grey lighten-4">
            Payment Method
            <span class="right">$25</span>
        </h5>

        <div class="error red center-align white-text"></div>

        <div class="col s12 card-element">
            <label>Card Number</label>
            <div id="card-number-element" class="input-value"></div>
        </div>

        <div class="col s6 card-element">
            <label>Expiry Date</label>
            <div id="card-expiry-element"></div>
        </div>

        <div class="col s6 card-element">
            <label>CVC</label>
            <div id="card-cvc-element"></div>
        </div>

        <div class="col s12 place-order-button-block">
            <button class="btn col s12 #e91e63 pink">Place Order</button>
        </div>
    </section> -->

        <!-- <div v-if="!paidFor">
          <h2>Total Amount: ₦{{ cartTotalPrice.toFixed(2) }}</h2>
        </div> -->

        <div v-if="paidFor">
          <h2>Payment successful</h2>
          <img
            src="https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif"
            alt=""
            srcset=""
          />
        </div>
        <br /><br /><br /><br /><br />
        <div class="paypal" ref="paypal"></div>
        <!-- <router-link to="/checkout"> Checkout </router-link> -->

        <!-- <div class="checkout">
      <router-link to="/checkout"> Checkout </router-link>
      <form action="payment" method="POST">
        <script
          src="//checkout.stripe.com/v2/checkout.js"
          class="stripe-button"
          data-key="<%= key %>"
          data-amount="8000"
          data-currency="usd"
          data-name="Emmanuel Ojo"
          data-description="Buy a typescript course"
          data-locale="auto"
        ></script>
      </form>
    </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue";
// import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  components: {
    // Footer,
    // StripeCheckout,
  },
  data() {
    return {
      stripe: null,
      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,

      loaded: false,
      paidFor: false,
      product: {
        price: 77.77,
        description: "A lamp",
        // img: './assets/beans.jpeg'
      },
    };
  },
  mounted() {
    var cartItems2 = this.cartItems.reduce((a, b) => {
      a = a + b.food.title;
    });
    console.log("string of cart items", cartItems2);
    console.log(cartItems2);

    // stripe
    // this.stripe = Stripe(
    //   "pk_test_51JSH8NC2mK5imsbDUhGHeEnXinRj7QIP4ORhBxBGPxKmIVSsWygshDBHpEQdZvuDAqf9uSuau7M4RWUoP0TPwDCC00KHLLcOWc"
    // );
    // this.createAndMountFormElements();

    // paypal
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AYu9ZTHedGu33SKK6teSsn7lS_efCb1YJhcRDBVVBK6EBscQ-AJjEdU63_D8VVqWffEgE_zAZolhP2JX";
    script.addEventListener("load", () => this.setLoaded());
    document.body.appendChild(script);
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    // cartItems2(){
    //   return console.log("Hi there")
    //   // let items = this.cartItems.reduce((a,b) => { a = a + b.title})
    //   // console.log('string of cart items', items)
    //   // return items
    // }
  },
  methods: {
    // createAndMountFormElements() {
    //   var elements = this.stripe.elements();

    //   this.cardNumberElement = elements.create("cardNumber");
    //   this.cardNumberElement.mount("#card-number-element");

    //   this.cardExpiryElement = elements.create("cardExpiry");
    //   this.cardExpiryElement.mount("#card-expiry-element");

    //   this.cardCvcElement = elements.create("cardCvc");
    //   this.cardCvcElement.mount("#card-cvc-element");
    // },

    // paypal
    setLoaded() {
      this.loaded = true;

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Vue paypal store",
                  amount: {
                    currency_code: "USD",
                    value: this.cartTotalPrice,
                  },
                  // description: this.product.description,
                  // amount: {
                  //   currency_code: "USD",
                  //   value: this.product.price,
                  // },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            this.clearCartItems();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal)
        // .finally(() => {
        //   this.clearCartItems();
        // });
    },
    removeFoodFromCart(food) {
      this.$store.commit("removeFoodFromCart", food);
    },
    clearCartItems() {
      this.$store.commit("clearCartItems");
    },
  },
};
</script>

<style scoped>
.cart {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30vh;
  padding-top: 50px;
  color: #fff;
}
.noItem h5 {
  margin-top: 50px;
}
.cartlist div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* width: 95%; */
  margin: 20px auto;
}
.cartlist div img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.cartlist div h5 {
  margin: auto;
}
.cartlist div p {
  margin: auto;
}
.cartlist div button {
  height: 30px;
  margin: auto;
  padding-left: auto;
  padding-right: auto;
  padding-top: 4px ;
  color: white;
  background: red;
  border-radius: 5px;
  border: none;
  outline: none;
}
.cartlist div button:hover {
  cursor: pointer;
}
.clearCart{  
  color: white;
  background: #1e1e35;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
}
#clearWishList {
  margin-bottom: 50vh;
}
#clearWishList button {
  color: white;
  background: #1e1e35;
  margin-top: 30px;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
#clearWishList button:hover {
  cursor: pointer;
}

.paypal{
  background: #fff;
}

.checkout,
button {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
/* .checkout a,
button {
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-top: 30px;
  padding: 7px 15px;
}
button {
  margin-bottom: 35vh;
}

button a {
  color: white;
  text-decoration: none;
}
button a:hover {
  text-decoration: none;
} */
.payment-form {
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #ececec;
}
.payment-form h5 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}
.card-element {
  margin-top: 5px;
}
#card-number-element,
#card-expiry-element,
#card-cvc-element {
  background: white;
  padding: 5px;
  border: 1px solid #ececec;
}
.place-order-button-block {
  margin: 10px 0;
}
@media screen and (max-width: 480px) {
  .cartlist div {
    display: grid;
  }
  .cartlist div img {
    margin-top: 30px;
    width: 150px;
    height: 150px;
    border-radius: 5px;
  }
  .cartlist div h5 {
    font-size: 23px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .cartlist div p {
    font-size: 18px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .cartlist div button {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (width: 768px) {
  .noItem{
    margin-bottom: 58vh;
  }
  .clearCart {
    margin-bottom: 4vh;
  }
}
</style>