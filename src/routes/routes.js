import Home from "../components/Home.vue";
// import Items from "../components/Items.vue";

import { useStoreUsuarios } from "../stores/usuario.js";
import { createRouter, createWebHashHistory } from "vue-router";
import { Notify } from "quasar";

const routes = [
  {
    path: "/",
    children: [
      { path: "", component: Home },
      { path: "home", component: Home },
   
  
    ]
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

