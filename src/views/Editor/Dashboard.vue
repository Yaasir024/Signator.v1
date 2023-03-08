<script setup>
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onUnmounted,
  computed,
  watch,
} from "vue";
import { useRouter } from "vue-router";

import { dashboardStore } from "@/stores/dashboard";
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
import { editorStore } from "@/stores/editor";

import { useClickOutside } from "@/composables/useClickOutside";

import PageLoading from "@/components/LoadingState/PageLoading.vue";

import Individual from "@/components/Dashboard/Individual/index.vue";
import Organization from "@/components/Organization/index.vue";
</script>

<template>
  <div class="">
    <!-- <Individual  /> -->
    <Organization />
  </div>
</template>

<style scoped></style>
