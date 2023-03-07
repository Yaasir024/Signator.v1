<script setup>
import { ref, onMounted, computed } from "vue";

import Info from "@/components/Organization/Main/CompanyDetails/Info.vue";

const currentTab = ref("info");
</script>

<template>
  <div class="pt-10 px-8">
    <div class="flex items-center justify-between mb-20">
      <h1 class="text-3xl font-medium">Company Details</h1>
    </div>
    <div class="">
      <Info />
    </div>
  </div>
</template>
