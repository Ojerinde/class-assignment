import { createRouter, createWebHistory } from "vue-router";

import AppHome from "../views/Home/AppHome";

const routes = [
  {
    name: "home",
    path: "/",
    component: AppHome,
  },
  {
    path: "/frontend",
    name: "frontend",
    component: () => import("../views/Frontend/FrontendStudents"),
  },
  {
    path: "/backend",
    name: "backend",
    component: () => import("../views/Backend/BackendStudents"),
  },
  {
    path: "/cloud",
    name: "cloud",
    component: () => import("../views/Cloud/CloudStudents"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/Users/AllUsers"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "isActive",
  linkExactActiveClass: "isActiveExact",
});

export default router;
