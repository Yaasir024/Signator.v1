<script setup>
import { ref, reactive, computed } from "vue";

import "ant-design-vue/lib/switch/style/index.css";

import { systemStore } from "@/stores/system";
const useSystemStore = systemStore();


const cookiePermissions = ref({
  performance: false,
  functionality: false,
});

const preferences = computed(() => {
  let data = ["necessary"];
  if (cookiePermissions.value.performance) {
    data.push("performance");
  }
  if (cookiePermissions.value.functionality) {
    data.push("functionality");
  }
  return data;
});

const acceptAll = () => {
  cookiePermissions.value.performance = true;
  cookiePermissions.value.functionality = true;
  useSystemStore.setprivacyPreferences(preferences.value)
};
</script>

<template>
  <div class="fixed top-[12%] w-full px-4 z-20">
    <section
      class="max-w-[550px] w-full mx-auto bg-white px-4 py-6 border shadow-xl rounded-lg"
    >
      <div class="px-4">
        <div class="">
          <h1 class="text-xl font-medium mb-2">Cookie Consent</h1>
          <span
            >By clicking "Accept", you agree to our use of cookies on your
            device in accordance with our privacy policy to enhace site
            navigation and usage.</span
          >
        </div>
        <div class="bg-canvas-color my-2 py-2 rounded-md">
          <ul class="px-5 py-3">
            <li class="flex items-center justify-between text-base pb-3.5">
              <span class="">Strictly Necesssary Cookies</span>
              <span class="text-primary-color">Always Active</span>
            </li>
            <li class="flex items-center justify-between text-base pb-3.5">
              <span class="">Performance Cookies</span>
              <span class="text-primary-color"
                ><a-switch v-model:checked="cookiePermissions.performance"
              /></span>
            </li>
            <li class="flex items-center justify-between text-base pb-3.5">
              <span class="">Functionality Cookies</span>
              <span class="text-primary-color"
                ><a-switch v-model:checked="cookiePermissions.functionality"
              /></span>
            </li>
            <li class="pb-2">
              <button
                class="text-primary-color text-base font-medium border-2 border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 hover:scale-[1.02] transition-all duration-300 ease-in-out"
                @click="useSystemStore.privacyPreferenceVisibility = true"
              >
                Cookie Settings
              </button>
            </li>
          </ul>
        </div>
        <div
          class="flex items-center justify-between flex-col xs:flex-row mt-10"
        >
          <button
            class="text-white text-base font-medium bg-primary-color border border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 hover:scale-[1.02] transition-all duration-300 ease-in-out"
            @click="useSystemStore.setprivacyPreferences(preferences)"
          >
            Save Choices
          </button>
          <div class="flex items-center flex-col xs:flex-row w-full xs:w-auto">
            <button
              class="text-white text-base font-medium bg-primary-color border border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 hover:scale-[1.02] transition-all duration-300 ease-in-out"
              @click="useSystemStore.setprivacyPreferences(['necessary'])"
            >
              Accept Necesssary
            </button>
            <button
              class="text-white text-base font-medium bg-primary-color border border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 xs:ml-2 hover:scale-[1.02] transition-all duration-300 ease-in-out"
              @click="acceptAll()"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ant-switch {
  background-color: rgba(0, 0, 0, 0.25) !important;
}
.ant-switch-checked {
  background-color: #1890ff !important;
}
</style>
