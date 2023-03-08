<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { useClickOutside } from "@/composables/useClickOutside";

import { detailsStore } from "@/stores/teams/dashboard/details";
import { templateStore } from "@/stores/teams/dashboard/templates";

import Header from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Header.vue";
import Footer from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Footer.vue";
import SideMenu from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/SideMenu.vue";
import Sections from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Fields/index.vue";
import Overlay from "@/components/Overlay.vue";

const useDetails = detailsStore();
const useTemplates = templateStore();

const data = computed(() => {
  return useTemplates.editTemplateData;
});

</script>

<template>
  <section class="fixed top-0 right-0 h-full w-[550px] bg-white shadow-xl z-50">
    <div class="h-full w-full flex flex-col">
      <Header />
      <div class="h-[calc(100vh_-_64px_-_64px)] bg-white flex flex-col">
        <div class="h-[40%] border-b overflow-auto">
          <div class="px-2 py-1.5">
            <!-- <LayoutResolver :data="data" /> -->
          </div>
          {{ useTemplates.editTemplateData }}
        </div>
        <div class="h-[60%]">
          <div class="relative h-full w-full flex">
            <div class="w-[75px] border-r-2 bg-canvas-color">
              <SideMenu />
            </div>
            <div class="w-full overflow-y-auto">
              <Sections />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </section>
</template>
