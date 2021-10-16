import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "chat" */ "@/views/chat/Chat.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
