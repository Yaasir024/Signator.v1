<script setup>
import { templateStore } from "@/stores/Organization/templates";

import LayoutResolver from "@/components/Organization/Layouts/LayoutResolver.vue";

const props = defineProps(["data"]);
const useTemplateStore = templateStore();
</script>

<template>
  <div class="card bg-white shadow-lg border rounded-lg px-4">
    <div class="heading pt-3 pb-2 px-2 border-b">
      <h1 class="text-lg font-medium">{{ data.title }}</h1>
    </div>
    <div class="w-full py-2 px-4">
      {{ data }}
      <LayoutResolver :data="data" />
    </div>
    <div class="pt-3 pb-4 px-2 border-t flex items-center justify-between">
      <button
        class="py-2 px-4 border-2 border-red-400 text-red-400 font-medium text-base rounded-md flex items-center"
        @click="useTemplateStore.editTemplate(data)"
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
          data-v-e65f9153=""
        >
          <path
            d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
            fill-rule="nonzero"
          ></path>
        </svg>
        <span class="ml-1.5">Delete</span>
      </button>
      <button
        class="py-2 px-4 bg-primary-color text-white font-medium text-base rounded-md"
        @click="useTemplateStore.editTemplate(data)"
      >
        Edit Template
      </button>
    </div>
  </div>
</template>
