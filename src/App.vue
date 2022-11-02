<script setup>
import { RouterLink, RouterView } from "vue-router";
import Loading from "@/components/Loading.vue";
import Toast from "@/components/Toast/index.vue";
import Snackbar from "@/components/Snackbar.vue";
import { systemStore } from "@/stores/system";
const useSystemStore = systemStore();
</script>

<template>
  <RouterView />
  <Loading v-if="useSystemStore.loadingState" />
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
</style>
