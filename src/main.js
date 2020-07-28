import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";

Vue.config.productionTip = false;
// Tailwind
import '@/assets/css/main.css'

// Axios
import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
