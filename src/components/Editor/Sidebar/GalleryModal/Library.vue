<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

import { editorStore } from "@/stores/editor";

import { deleteFile } from "@/composables/firebase/images";

import DeleteModal from "@/components/Editor/Sidebar/GalleryModal/ConfirmDeleteModal.vue";
import Overlay from "@/components/Overlay.vue";

const useEditorStore = editorStore();


const selectedImage = ref("");

const deleteModalVisibility = ref(false);

const deleteImage = async (img) => {
  deleteModalVisibility.value = false;
  const result = await deleteFile(img.fullPath);
  if (result) {
    useEditorStore.removeImageFromGallery(img);
  }
  selectedImage.value = "";
};

const closeDeleteModal = () => {
  deleteModalVisibility.value = false;
};

const useImage = () => {
  useEditorStore.data.image.img = selectedImage.value.url;
  useEditorStore.galleryModal = false;
  selectedImage.value = "";
};


</script>

<template>
  <div class="flex h-full relative">
    <div class="bg-white w-full h-full overflow-y-auto px-5 py-3">
      <ul
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-[140px]"
      >
        <li
          v-for="image in useEditorStore.galleryImages"
          :key="image"
          class="p-2 max-h-[180px]"
        >
          <div
            class="w-full h-full overflow-hidden transition-all ease-in-out duration-300"
            @click="selectedImage = image"
            :class="
              selectedImage === image
                ? 'border-primary-color border-4'
                : 'border'
            "
          >
            <img
              :src="image.url"
              :alt="image.name"
              class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
        </li>
      </ul>
    </div>
    <div
      class="absolute top-0 right-0 sm:static h-full w-[220px] sm:w-[300px] bg-canvas-color border-l py-4 px-2 overflow-hidden transition-all duration-300 ease-in-out"
      :class="selectedImage == '' ? 'translate-x-[100%]' : 'translate-x-0'"
    >
      <div class="" v-if="selectedImage">
        <div
          class="text-base flex items-center justify-between border-b-2 pb-1 mb-1"
        >
          Image Details
          <div class="block sm:hidden" @click="selectedImage = ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
              />
            </svg>
          </div>
        </div>
        <div
          class="max-w-[275px] max-h-[180px] overflow-hidden transition-all ease-in-out duration-300"
        >
          <img
            :src="selectedImage.url"
            :alt="selectedImage.name"
            class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
          />
        </div>
        <h4 class="break-all">{{ selectedImage.name }}</h4>
        <h4 class="">
          
          <span
            class="text-red-400 cursor-pointer"
            @click="deleteModalVisibility = true"
            >Delete Image</span
          >
        </h4>
        <div class="mt-4 flex items-center justify-end px-2">
          <button
            class="bg-primary-color text-white h-[32px] px-4 rounded"
            @click="useImage()"
          >
            Set Image
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="" v-if="false">
    <div class="flex">
      <div class="w-full bg-white overflow-hidden px-8">
        <!-- {{galleryImages}} -->
      </div>
      <div class="w-[300px] border-l"></div>
    </div>
  </div>

  <transition-group name="modalFade">
    <DeleteModal
      v-if="deleteModalVisibility"
      @close-delete-modal="closeDeleteModal()"
      @delete-image="deleteImage(selectedImage)"
      message="Are you sure you want to delete this image permanently. This action can't be undone."
    />
    <Overlay v-if="deleteModalVisibility" />
  </transition-group>
</template>

<style scoped>
.modalFade-enter-active,
.modalFade-leave-active {
  transition: 0.32s ease all;
}
.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
}
</style>
