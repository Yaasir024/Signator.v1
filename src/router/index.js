import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
      path: "/about-us",
      name: "about-us",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
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
      path: "/cookies-policy",
      name: "cookies-policy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CookiePolicy.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PrivacyPolicy.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/editor",
      name: "editor",
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
      component: () => import("../views/Editor/Dashboard.vue"),
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
      path: "/profile/account",
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/Account.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile/subscription",
      name: "subscription",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/Subscription.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile/billing-history",
      name: "billing-history",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Settings/BillingHistory.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: 'smooth', };
  },
});

router.beforeEach((to, from, next) => {
  const useAuth = authStore();
  if (to.path === "/login" && useAuth.userState) {
    next("/dashboard");
    return;
  }
  if (to.path === "/signup" && useAuth.userState) {
    next("/dashboard");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !useAuth.userState
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
