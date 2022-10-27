<script setup>
import { RouterLink, RouterView } from "vue-router";
import Loading from "@/components/Loading.vue";
import Toast from "@/components/Toast/index.vue";
import Snackbar from "@/components/Snackbar.vue";
import { systemStore } from "@/stores/system";
const useSystemStore = systemStore();
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <Loading v-if="useSystemStore.loadingState" />
  <!-- <Toast v-if="useSystemStore.toastData" /> -->
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
