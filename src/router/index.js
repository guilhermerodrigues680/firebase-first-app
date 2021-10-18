import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import siteModule from "@/modules/site";
import videoMeetingModule from "@/modules/video-meeting";
import gamesModule from "@/modules/games";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/site",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "chat" */ "@/views/chat/Chat.vue"),
  },
  {
    path: "/site",
    component: () => import("@/modules/site/SiteView.vue"),
    children: siteModule.routes,
  },
  {
    path: "/video",
    component: () => import("@/modules/video-meeting/ModuleView.vue"),
    children: videoMeetingModule.routes,
  },
  {
    path: "/games",
    component: () => import("@/modules/games/ModuleView.vue"),
    children: gamesModule.routes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
