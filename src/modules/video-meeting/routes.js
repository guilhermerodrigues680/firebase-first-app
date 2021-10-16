const routes = [
  {
    path: "",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "meeting",
    component: () => import("./pages/VideoMeeting.vue"),
  },
];

export default routes;
