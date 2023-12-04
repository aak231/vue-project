import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./Home.vue";
import VueCountryFlag from 'vue-country-flag-next'
import Api from "./Api.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/api", component: Api },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);

// Register the VueCountryFlag component globally
app.component("vue-country-flag", VueCountryFlag);

app.use(router).mount("#app");

