<script setup>
import { ref, reactive, computed, inject } from "vue";
import axios from "axios";

import { editorStore } from "@/stores/editor";

import { uploadFile } from "@/composables/firebase/images";

const useEditorStore = editorStore();

const currentTab = inject("currentTab");

const readImage = async (e) => {
  let files = e.target.files;
  const { snapshot, downloadUrl, metadata } = await uploadFile(files[0]);
  useEditorStore.addImageToGallery(
    downloadUrl,
    metadata.name,
    metadata.fullPath,
    metadata.timeCreated
  );
  currentTab.value = "library";
};
</script>

<template>

  <div class="pt-16">
    <div
      class="flex flex-col items-center overflow-hidden cursor-pointer"
    >
      <div class="icon block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          width="50"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
          />
        </svg>
      </div>
      <span class="inline-block mt-1 text-base"
        >Drop your files here or click to upload</span
      >
      <input
        type="file"
        accept="image/*"
        @change="readImage"
        class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        title=""
      />
    </div>
    <div class="text-center mt-5">Maximum file size: 3MB</div>
  </div>
</template>
