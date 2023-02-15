<script setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

import { useCookies } from "@vueuse/integrations/useCookies";

import { systemStore } from "@/stores/system";
import { authStore } from "@/stores/auth";

import Navbar from "@/components/Navigations/Navbar.vue";
import Loading from "@/components/Loading.vue";
import Toast from "@/components/Toast/index.vue";
import Snackbar from "@/components/Snackbar.vue";
import CookieBanner from "@/components/Cookie/ConsentBanner.vue";
import CookieSettings from "@/components/Cookie/Settings.vue";

const useSystemStore = systemStore();
const useAuth = authStore();

const route = useRoute();
const path = computed(() => {
  return route.name;
});

// const showNav = () => {

// };
const showNav = computed(() => {
  if (path.value == "editor") {
    return false;
  } else {
    return true;
  }
});


</script>

<template>
  <!-- <Navbar v-if="showNav" /> -->
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <RouterView /> -->
  <Loading v-if="useSystemStore.loadingState" />

  <transition name="fade">
    <CookieBanner v-if="!useSystemStore.getPrivacyPreferences()" />
  </transition>
  <transition name="fade">
    <CookieSettings v-if="useSystemStore.privacyPreferenceVisibility" />
  </transition>
  <transition name="snackbar">
    <Snackbar v-if="useSystemStore.notificationData" />
  </transition>


</template>

<style>

/* Nav Animation */
.snackbar-enter-active,
.snackbar-leave-active {
  transition: all 0.32s ease;
}
.snackbar-enter-from,
.snackbar-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.32s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ROUTE TRANSITIONS
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
} */
</style>
