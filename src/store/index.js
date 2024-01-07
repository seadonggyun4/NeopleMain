import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import commonStore from "@/store/commonStore";

export default new Vuex.Store({
  modules: {
    common: commonStore,
  },
});
