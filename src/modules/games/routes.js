const routes = [
  {
    path: "",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "cat-vs-dog-board-game",
    component: () => import("./pages/CatVsDogBoardGame.vue"),
  },
];

export default routes;
