<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { templateStore } from "@/stores/teams/dashboard/templates";

import { useClickOutside } from "@/composables/useClickOutside";

import Image from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Fields/Details/Image.vue";
import Info from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Fields/Details/Info.vue";

const useTemplates = templateStore();

const data = computed(() => {
  return useTemplates.editTemplateData;
});

</script>

<template>
  <div class="pb-14">
    <div
      class="px-4 py-2 border-b sticky top-0 left-0 bg-white z-10 shadow flex items-center justify-between"
    >
      <span class="text-lg">DETAILS</span>
    </div>
    <div class="py-5 px-10">
      <Image />
      <Info />
    </div>
  </div>
</template>
