<script setup>
import { ref, onMounted, computed } from "vue";

import { uid } from "@/composables/useGenerateUid";
import { useClickOutside } from "@/composables/useClickOutside";
// STORE
import { templateStore } from "@/stores/Organization/templates";

const useTemplateStore = templateStore();

const data = computed(() => {
  return useTemplateStore.editTemplateData;
});

const menu = ref(null);
const menuVisibility = ref(false);
useClickOutside(menu, () => {
  menuVisibility.value = false;
});

const addCompanyLogo = () => {
  console.log("ADD COMPANY LOGO");
};
const addCustomImage = () => {
  console.log("ADD Custom Img");
};
</script>

<template>
  <div class="pb-10">
    <div
      class="px-4 py-2 border-b sticky top-0 left-0 bg-white z-10 shadow flex items-center justify-between"
    >
      <span class="text-lg">IMAGES</span>
      <div class="relative" ref="menu">
        <button
          class="p-1.5 hover:bg-canvas-color rounded-full transition-all duration-300 ease-in-out"
          @click="menuVisibility = !menuVisibility"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <transition name="menu">
          <div
            class="absolute top-[50px] right-[-1px] z-50 w-[150px] min-h-[50px] py-1.5 bg-white shadow-xl border rounded-b-md"
            v-if="menuVisibility"
          >
            <ul class="">
              <!-- v-if="!checkField('name')" -->
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addCompanyLogo()"
              >
                Company Logo
              </li>
              <!-- v-if="!checkField('position')" -->
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addCustomImage()"
              >
                Custom Image
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="py-5 px-10">
      <div class="">
        <h1 class="text-lg font-medium">Company Logo</h1>
        <div class="flex">
          <div class="">
            <img
              src="/organization/placeholder-logo.png"
              alt=""
              class="h-[115px]"
            />
          </div>
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
