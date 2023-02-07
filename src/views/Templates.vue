<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

import { systemStore } from "@/stores/system";

import signatureTemplates from "@/data/templates.json";

import { uid } from "@/composables/useGenerateUid";

import Navbar from "@/components/Navigations/Navbar.vue";
import TemplateLayout from "@/components/Templates/Layout.vue";
import Overlay from "@/components/Overlay.vue";
import PricingModal from "@/components/Modal/Pricing.vue";

const router = useRouter();
const useSystemStore = systemStore();
// Filter
const filterValue = ref("all");
const filter = (value) => {
  filterValue.value = value;
};

// Filtered Templates

const filteredTemplates = computed(() => {
  return signatureTemplates.filter((template) => {
    if (filterValue.value === "professional") {
      return template.category === "professional";
    }
    if (filterValue.value === "creative") {
      return template.category === "creative";
    }
    return template;
  });
});




</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="px-8 pb-20">
      <section class="hero py-24">
        <div class="wrapper text-center">
          <h1 class="text-4xl font-medium mb-3">Email Signature Templates</h1>
          <h3 class="text-lg">
            Design your Email signature with our easily customizable templates
          </h3>
        </div>
      </section>
      <ul
        class="filter-bar flex flex-center justify-center text-lg"
        v-if="false"
      >
        <li
          class="px-5 py-2 cursor-pointer border border-gray-400 rounded-l-2xl transition-all ease-in-out duration-350"
          @click="filter('all')"
          :class="filterValue == 'all' ? 'text-white bg-primary-color ' : ''"
        >
          All
        </li>
        <li
          class="px-5 py-2 cursor-pointer border-y border-r border-gray-400 transition-all ease-in-out duration-350"
          @click="filter('professional')"
          :class="
            filterValue == 'professional' ? 'text-white bg-primary-color ' : ''
          "
        >
          Professional
        </li>
        <li
          class="px-5 py-2 cursor-pointer border-y border-gray-400 transition-all ease-in-out duration-350"
          @click="filter('creative')"
          :class="
            filterValue == 'creative' ? 'text-white bg-primary-color ' : ''
          "
        >
          Creative
        </li>
        <li
          class="px-5 py-2 cursor-pointer border border-gray-400 rounded-r-2xl transition-all ease-in-out duration-350"
          @click="filter('free')"
          :class="filterValue == 'free' ? 'text-white bg-primary-color ' : ''"
        >
          Free
        </li>
      </ul>
      <div class="mt-12">
        <TemplateLayout :data="filteredTemplates"/>
        
      </div>
    </main>
  </div>
</template>

<style scoped>
.card:hover .overlay {
  transition: all 0.3s ease;
  opacity: 1;
}
.filter-link.active {
  color: #000000;
  font-weight: 500;
}
.filter-link.active:before {
  content: "";
  position: absolute;
  width: 22px;
  height: 2px;
  background: #ffffffb3;
  left: 0;
  bottom: 0;
}
</style>
