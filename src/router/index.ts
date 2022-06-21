import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginView from "../views/LoginView.vue";
import GraphView from "../views/GraphView.vue";
import store from "../store";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "*", redirect: "/login" },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    beforeEnter(to, from, next) {
      if (
        localStorage.getItem("Leadhit-Site-Id") === "5f8475902b0be670555f1bb3"
      ) {
        next("/graph");
      } else {
        next();
      }
    },
  },
  {
    path: "/graph",
    name: "Graph",
    beforeEnter(to, from, next) {
      if (
        localStorage.getItem("Leadhit-Site-Id") != "5f8475902b0be670555f1bb3"
      ) {
        next("/login");
      } else {
        next();
      }
    },

    component: GraphView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
