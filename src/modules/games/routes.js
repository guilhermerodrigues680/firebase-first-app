const routes = [
  {
    path: "",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "cat-vs-dog-board-game",
    component: () =>
      import(/* webpackChunkName: "cat-vs-dog-board-game" */ "./pages/CatVsDogBoardGame.vue"),
  },
  {
    path: "phaser",
    component: () => import(/* webpackChunkName: "phaser" */ "./pages/Phaser.vue"),
  },
];

export default routes;
