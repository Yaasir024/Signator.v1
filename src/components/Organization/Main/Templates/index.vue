<script setup>
import { ref, onMounted, computed } from "vue";

import { useClickOutside } from "@/composables/useClickOutside";

import { templateStore } from "@/stores/Organization/templates";
import { dashboardStore } from "@/stores/Organization/dashboard";

import Side from "@/components/Organization/Main/Templates/SidePanel.vue";
import Card from "@/components/Organization/Main/Templates/Card.vue";
import Overlay from "@/components/Overlay.vue";

const useTemplateStore = templateStore();
const useDashboardStore = dashboardStore();

const panel = ref(null);
const menuVisibility = ref(false);
// useClickOutside(panel, () => {
//   useTemplateStore.showSidePanel = false;
// });

const consoler = () => {
  console.log(useTemplateStore.editTemplateData)
  console.log(useDashboardStore.allTemplates.data)
}
</script>

<template>
  <div class="pt-10 px-8 pb-20">
    <div class="flex items-center justify-between px-4 mb-16">
      <h1 class="text-3xl font-medium">Templates</h1>
      <div class="" ref="panel">
        <button
          class="text-lg text-white bg-primary-color py-1.5 px-4"
          @click="useTemplateStore.addNewTemplate()"
        >
          Add Template
        </button>
        <transition name="panel">
          <Side v-if="useTemplateStore.showSidePanel" />
        </transition>
      </div>
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-3 px-4 py-6 overflow-x-hidden"
    >
      <div
        class="mb-4"
        v-for="data in useDashboardStore.allTemplates.data"
        :key="data.uid"
      >
        <Card :data="data" />
      </div>
    </div>
    <button class="" @click="consoler()">CONSOLE</button>
    <div class="">
      <!-- <Overlay v-if="useTemplateStore.showSidePanel" /> -->
    </div>
  </div>
</template>

<style scoped>
/* Menu Animation */
.panel-enter-active,
.panel-leave-active {
  transition: transform 0.3s ease;
  /* transform-origin: top right; */
}

.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}
</style>
