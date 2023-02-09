<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useCookies } from "@vueuse/integrations/useCookies";

import { systemStore } from "@/stores/system";
import { authStore } from "@/stores/auth";

import Loading from "@/components/Loading.vue";
import Toast from "@/components/Toast/index.vue";
import Snackbar from "@/components/Snackbar.vue";
import CookieBanner from "@/components/Cookie/ConsentBanner.vue";
import CookieSettings from "@/components/Cookie/Settings.vue";


const useSystemStore = systemStore();
const useAuth = authStore();
</script>

<template>
  <RouterView />
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
</style>
