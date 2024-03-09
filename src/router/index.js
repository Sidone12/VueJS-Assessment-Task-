import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import GamePage from "@/views/GamePage.vue";

const routes = [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
        path: "/game",
        name: "GamePage",
        component: GamePage,
      },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
      return { top: 0, left: 0, behavior: "smooth" };
    },
  });
  
  export default router;