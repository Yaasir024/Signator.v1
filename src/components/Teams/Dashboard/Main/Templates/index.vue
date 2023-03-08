<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { useClickOutside } from "@/composables/useClickOutside";

import { detailsStore } from "@/stores/teams/dashboard/details";
import { templateStore } from "@/stores/teams/dashboard/templates";

import Side from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/index.vue";
import Card from "@/components/Organization/Main/Templates/Card.vue";
import Overlay from "@/components/Overlay.vue";

const panel = ref(null);
const menuVisibility = ref(false);
// useClickOutside(panel, () => {
//   useTemplateStore.showSidePanel = false;
// });

const useDetails = detailsStore();
const useTemplates = templateStore();
</script>

<template>
  <div class="pt-10 px-8 pb-20">
    <div class="flex items-center justify-between px-4 mb-16">
      <h1 class="text-3xl font-medium">Templates</h1>
      <div class="" ref="panel">
        <button
          class="text-lg text-white bg-primary-color py-1.5 px-4"
          @click="useTemplates.addNewTemplate()"
        >
          Add Template
        </button>
        <transition name="panel">
          <Side v-if="useTemplates.showSidePanel" />
        </transition>
      </div>
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-3 px-4 py-6 overflow-x-hidden"
    >
      <div
        class="mb-4"
        v-for="data in useTemplates.allTemplates.data"
        :key="data.uid"
      >
        <Card :data="data" />
      </div>
    </div>
    <div class="">
      <!-- <Overlay v-if="useTemplateStore.showSidePanel" /> -->
    </div>
  </div>

  {{ useTemplates.allTemplates }}
  Templates
</template>
