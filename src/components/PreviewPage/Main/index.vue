<script setup>
import { ref, reactive, computed, inject } from "vue";
import Preview from "@/components/SignaturePreviewComponent.vue";

import { useClipboard } from "@vueuse/core";

const source = ref(null);
const props = defineProps(['data'])
// const data = inject("previewData");
const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <div class="w-full pl-6">
    <div class="h-full pt-4">
      <div class="card bg-white shadow-lg border rounded-lg mb-5 px-4">
        <div class="heading pt-3 pb-2 px-2 border-b">
          <h1 class="text-lg font-medium">{{ data.title }}</h1>
        </div>
        <div class="w-full h-full flex flex-col py-7 px-6 overflow-hidden">
          <div ref="source">
            <Preview :data="data" />
          </div>
        </div>
      </div>
      <div class="footer mt-4 px-3 flex items-center justify-between">
        <div class="font-medium cursor-pointer">Back to Editor</div>
        <button class="bg-primary-color text-white px-3 py-2 rounded-xl">
          Copy to clipboard
        </button>
      </div>
      <button @click="copy()">
        <!-- by default, `copied` will be reset in 1.5s -->
        <span v-if="!copied">Copy</span>
        <span v-else>Copied!</span>
      </button>
    </div>
  </div>
</template>
