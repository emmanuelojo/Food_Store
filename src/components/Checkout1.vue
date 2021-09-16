<template>
  <div>
    <h3>Checkout</h3>
    <!-- <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
     <button @click="submit">Pay now!</button> -->

    <!-- <stripe-element-card></stripe-element-card> -->
    <stripe-element-card
      ref="elementRef"
      :pk="pulishableKey"
      @token="tokenCreated"
    />
    <button @click="submit">Generate token</button>
  </div>
</template>

<script>
import { StripeElementCard } from "@vue-stripe/vue-stripe";
export default {
  props: ["item"],
  components: {
    // StripeCheckout,
    StripeElementCard,
  },
  data() {
    // this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      pk: process.env.STRIPE_PUBLISHABLE_KEY,
      stripeAccount: process.env.STRIPE_ACCOUNT,
      apiVersion: process.env.API_VERSION,
      locale: process.env.LOCALE,
      token: null,
      loading: false,
      // lineItems: [
      //   this.item
      // ],
      lineItems: [
        {
          price: "some-price-id", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "your-success-url",
      cancelURL: "your-cancel-url",
    };
  },
  methods: {
    submit() {
      // this will trigger the process
      this.$refs.elementRef.submit();
    },
    tokenCreated(token) {
      console.log(token);
      // handle the token
      // send it to your server
    },
    // submit() {
    //   // You will be redirected to Stripe's secure checkout page
    //   // this.$refs.checkoutRef.redirectToCheckout();
    // },
  },
};
</script>
<style>
</style>