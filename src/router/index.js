import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.IS_ELECTRON ? "hash" : "history",
  routes
});

export default router;
