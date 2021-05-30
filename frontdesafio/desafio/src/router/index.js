import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import users from "@/views/users.vue";
import userscreate from "@/views/userscreate.vue";
import usersput from "@/views/usersput.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/users",
        name: "users",
        component: users,
    },
    {
        path: "/users/create",
        name: "userscreate",
        component: userscreate,
    },
    {
        path: "/users/put/:id",
        name: "usersput",
        component: usersput,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;