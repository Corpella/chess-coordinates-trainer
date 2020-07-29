import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () =>
      import("@/views/Main.vue"),
    children: [{
      path: "/",
      name: "Menu",
      component: () => import("@/components/Menu.vue")
    }, {
      path: "/game",
      name: "Game",
      component: () =>
        import("@/views/Game/Game.vue")
    },]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.IS_ELECTRON ? "hash" : "history",
  routes
});

export default router;
