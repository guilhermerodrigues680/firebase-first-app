import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import adapter from "webrtc-adapter";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.scss";

console.debug(
  "webrtc-adapter, browser and version",
  adapter.browserDetails.browser,
  adapter.browserDetails.version
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
