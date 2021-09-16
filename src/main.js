import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { StripePlugin } from '@vue-stripe/vue-stripe';

const options = {
  pk: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeAccount: process.env.STRIPE_ACCOUNT,
  apiVersion: process.env.API_VERSION,
  locale: process.env.LOCALE,
};
createApp(App).use(store).use(router).use(options).mount('#app')
