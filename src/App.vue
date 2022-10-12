<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loading from './components/Loading.vue'
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
  <Loading v-if="useSystemStore.loadingState"/>
</template>

