import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Editor from "../views/Editor.vue";
import { authStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/help-center",
      name: "help-center",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Help/HelpCenter.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/help-center/articles/:uid",
      name: "article",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Help/HelpArticle.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/help-center/search/:query",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Help/Search.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Help/ContactUs.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/pricing",
      name: "pricing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Pricing.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/features",
      name: "features",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Features.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/editor/:id",
      name: "editor",
      component: Editor,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/editor",
      name: "editors",
      component: () => import("../views/Editor/index.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/preview/:id",
      name: "preview",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Preview.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/templates",
      name: "templates",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Templates.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Auth/Login.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Auth/Signup.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Auth/ForgotPassword.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/settings/account-setting",
      name: "account-setting",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/AccountSetting.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/settings/profile",
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/Profile.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/settings/password",
      name: "password-setting",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/Password.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/settings/billing-history",
      name: "billing-history",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/BillingHistory.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/settings/payment-method",
      name: "payment-method",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/PaymentMethod.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const useAuth = authStore();
  if (to.path === "/login" && useAuth.userState) {
    next("/");
    return;
  }
  if (to.path === "/signup" && useAuth.userState) {
    next("/");
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !useAuth.userState) {
    next("/login");
    return;
  }

  next();
});

export default router;
