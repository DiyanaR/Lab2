import { createRouter, createWebHashHistory } from "vue-router";

import homeView from "./views/homeView.vue";
import animeView from "./views/animeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: homeView,
      path: "/home",
    },
    {
      component: animeView,
      path: "/",
    },
  ],
});
