import Vue from "vue";
import App from "./App.vue";
import router from "@/routes";
import store from "@/store";

Vue.config.productionTip = false;

// plugins
import "@/plugins/fontAwesomeIcon";

//global-components
import "@/components/index";
import "@/layout/index";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
