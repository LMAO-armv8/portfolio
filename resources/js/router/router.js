import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./views/Home.route.vue"),
    },
    {
        path: "/test",
        component: () => import("./views/home.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});