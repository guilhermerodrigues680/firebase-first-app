const routes = [
  {
    path: "",
    name: "SiteModuleHome",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "about",
    component: () => import("./pages/About.vue"),
  },
];

export default routes;
