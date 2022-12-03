<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

import { systemStore } from "@/stores/system";

import data from "@/data/templates";

import { uid } from "@/composables/useGenerateUid";

import Navbar from "@/components/Navigations/Navbar.vue";
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
  return data.templates.filter((template) => {
    if (filterValue.value === "professional") {
      return data.template.category === "professional";
    }
    if (filterValue.value === "creative") {
      return data.template.category === "creative";
    }
    return template;
  });
});

const middleIndex = Math.ceil(filteredTemplates.value.length / 2);

const templates = computed(() => {
  return {
    first: filteredTemplates.value.slice(0, middleIndex),
    second: filteredTemplates.value.slice(-middleIndex),
  };
});

const organizedTemplates = computed(() => {});

const pricingModal = ref(false);

const createEditorSession = (data) => {
  if (useSystemStore.isEligibleToCreate()) {
    data.uid = uid(16);
    useEditorStore.data = data;
    router.push({ path: "/editor" });
  } else {
    useSystemStore.addNotificationData({
      message: "Upgrade to create more signatures.",
      type: "error",
    });
  }
};

//
const user = ref("pro");
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="px-8 pb-20">
      <section class="hero py-32">
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
        <div class="max-w-[560px] md:max-w-[720px] mx-auto">
          <div class="flex w-full flex-wrap">
            <div class="w-full md:w-[50%] px-3 md:pr-5">
              <div
                class="w-full my-6"
                v-for="template in templates.first"
                :key="template.id"
              >
                <div
                  class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
                >
                  <img
                    :src="'/images/templates/' + template.imgSrc"
                    alt=""
                    class=""
                  />
                  <div
                    class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
                  >
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-if="template.type == user || user == 'pro'"
                      @click="createEditorSession(template.data)"
                    >
                      Customize This Template
                    </button>
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-else
                    >
                      Upgrade To Pro to Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-[50%] px-3 md:pl-5">
              <div
                class="w-full my-4"
                v-for="template in templates.second"
                :key="template.id"
              >
                <div
                  class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
                >
                  <img
                    :src="'/images/templates/' + template.imgSrc"
                    alt=""
                    class=""
                  />
                  <div
                    class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
                  >
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-if="template.type == user || user == 'pro'"
                      @click="createEditorSession(template.data)"
                    >
                      Customize This Template
                    </button>
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-else
                    >
                      Upgrade To Pro to Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Overlay v-if="pricingModal" />
  <PricingModal v-if="pricingModal" @close-modal="pricingModal = false" />
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
