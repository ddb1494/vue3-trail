import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ApiTest from "../views/ApiTest.vue";
import VBindTest from "../views/VBindTest.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/api-test",
    name: "ApiTest",
    component: ApiTest,
  },
  {
    path: "/v-bind-test",
    name: "VBindTest",
    component: VBindTest,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
