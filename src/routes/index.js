import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/neople",
    },
    {
      path: "/neople",
      component: () => import("@/pages/index"),
      redirect: "/neople/main",
      children: [
        {
          name: "main",
          path: "/neople/main",
          meta: { auth: true },
          component: () => import("@/pages/MainPage.vue"),
        },
        {
          name: "sub",
          path: "/neople/sub",
          meta: { auth: true },
          component: () => import("@/pages/SubPage.vue"),
        },
        {
          name: "notfound",
          path: "*",
          meta: { auth: true },
          component: () => import("@/pages/NotFoundPage.vue"),
        },
      ],
    },
  ],
});

export default router;
