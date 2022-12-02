<script setup>
import { ref, reactive, computed } from "vue";
import PreviewComponentResolver from "@/components/Editor/PreviewComponentResolver.vue";
const prop = defineProps(["data"]);
</script>

<template>
  <div
    class="max-w-[615px] mx-auto overflow-hidden mt-11 my-4 bg-white shadow-lg border rounded-3xl"
  >
    <div class="flex flex-col flex-auto">
      <div class="header px-7 py-4 border-b bg-white shadow-md text-lg">
        Preview Signature
      </div>
      <div class="preview max-h-[450px] overflow-y-auto overflow-x-hidden">
        <div class="px-8 py-3">
          <div class="pb-1 mb-1 border-b">From:</div>
          <div class="pb-1 mb-1 border-b">To:</div>
          <div class="pb-1 mb-1 border-b">Subject:</div>
        </div>
        <div class="sig-preview pt-1 px-9 mb-10">
          <PreviewComponentResolver :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview::-webkit-scrollbar {
  width: 10px; /* width of the entire scrollbar */
}

.preview::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: #f5f5f5;
}

.preview::-webkit-scrollbar-thumb {
  background-color: darkgrey; /* color of the scroll thumb */
  border-bottom-right-radius: 20px; /* roundness of the scroll thumb */
  /* border: 1px solid slategray;  creates padding around scroll thumb */
}
</style>
