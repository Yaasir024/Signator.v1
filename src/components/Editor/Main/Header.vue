<script setup>
import { ref, reactive, computed } from "vue";
import { useDebouncedRefHistory, useStorage } from "@vueuse/core";
import axios from "axios";
import { inject } from "vue";
import { editorStore } from "@/stores/editor";
const data = inject("data");
const useEditorStore = editorStore();


const uploadImage = () => {
  if(data.image.imgSrc != '') {
    useEditorStore.addSignature()
  }else if(data.image.img != '') {
    useEditorStore.uploadImg(data.image.img)
  }
  // useEditorStore.data = {}
}


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
        <span class="ml-2 text-lg">Go Home</span>
      </div>
    </RouterLink>
    <div class="">
      <button
        class="py-2 px-4 bg-primary-color text-white text-base font-medium rounded-lg"
        @click="uploadImage()"
      >
        Save Signature
      </button>
    </div>
  </div>
</template>
