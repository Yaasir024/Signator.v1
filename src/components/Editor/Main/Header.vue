<script setup>
import { ref, reactive, computed, inject } from "vue";

import { editorStore } from "@/stores/editor";

import axios from "axios";
import { useDebouncedRefHistory, useStorage } from "@vueuse/core";

const data = inject("data");
const useEditorStore = editorStore();
</script>

<template>
  <div
    class="h-[50px] w-full bg-white shadow-lg border-b flex items-center justify-between px-6"
  >
    <RouterLink to="/">
      <div class="home flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="16"
          height="16"
        >
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
        <span class="ml-1 text-base">Home</span>
      </div>
    </RouterLink>
    <div class="max-w-[250px]">
      <input
        type="text"
        placeholder="Title"
        v-model="data.title"
        class="w-full px-4 py-1 outline-none border border-transparent focus:border-gray-200 hover:border-gray-200 rounded-md text-base"
      />
    </div>
    <div class="flex items-center">
      <button
        class=" py-1.5 px-4 bg-primary-color text-white text-base font-medium rounded-lg"
        @click="useEditorStore.addSignature()"
      >
        Save 
      </button>
    </div>
  </div>
</template>
