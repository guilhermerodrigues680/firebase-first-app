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
];

export default routes;
