/*eslint-disable*/
import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage.vue";
import ProductDetails from "./views/ProductDetails.vue";
import OtherDetails from "./components/OtherDetails.vue";
import Cart from "./views/Cart.vue";
import CreateAccount from "./views/CreateAccount.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import ClickedCategory from "./views/ClickedCategory.vue";
import emailConfirmation from "./views/emailConfirmation.vue";
import store from "../src/store/";
import Nprogress from "nprogress";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: HomePage,
    beforeEnter(to, from, next) {
      Nprogress.start();
      store.dispatch("getCars").then(() => {
        Nprogress.done();
        next();
      });
    },
  },
  {
    path: "/car-details",
    component: ProductDetails,
  },
  {
    path: "/car-detailsx",
    component: OtherDetails,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/create-account",
    component: CreateAccount,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/category/:link",
    component: ClickedCategory,
  },
  {
    path: "/email-confirmation/:token",
    component: emailConfirmation,
    beforeEnter: (to, from, next) => {
      store.dispatch("confirmAccount", {
        token: to.params.token,
      });
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
