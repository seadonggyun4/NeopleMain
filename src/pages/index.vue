<template>
  <div :class="$style.app">
    <TheCurtain v-if="curtain.show" :firstRender="firstRender" />
    <TheHeader v-if="browserWidth > 1200" />
    <TheNavButton
      v-if="browserWidth <= 1200 && !navActive"
      @onClick="SET_NAV"
    />
    <TheNavigation
      v-if="browserWidth <= 1200 && navActive"
      @onClick="SET_NAV"
    />
    <router-view></router-view>
    <TheFooter />
    <ModalContainer />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      firstRender: true,
    };
  },
  computed: {
    ...mapState("common", ["curtain", "navActive", "browserWidth"]),
  },
  watch: {
    $route: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.OPEN_CURTAIN({ time: 1800 });
      }
    },
  },
  created() {
    this.checkWindowSize();
    this.OPEN_CURTAIN({ time: 10000 });
    setTimeout(() => {
      this.firstRender = false;
    }, 5000);
  },
  methods: {
    ...mapMutations("common", [
      "SET_LOADING",
      "OPEN_CURTAIN",
      "SET_NAV",
      "SET_BROWSER_WIDTH",
    ]),
    checkWindowSize() {
      this.SET_BROWSER_WIDTH(window.innerWidth);

      window.addEventListener("resize", () => {
        this.SET_BROWSER_WIDTH(window.innerWidth);
      });
    },
  },
};
</script>

<style module>
.app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
