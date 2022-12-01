<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

import { editorStore } from "@/stores/editor";

const useEditorStore = editorStore();

const props = defineProps(["galleryImages"]);

const selectedImage = ref("");
</script>

<template>
  <div class="flex h-full">
    <div class="bg-white w-full h-full overflow-y-auto px-5 py-3">
      <ul
        class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-[140px]"
      >
        <li
          v-for="image in galleryImages"
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
    <div class="w-[300px] border-l py-4 px-2 overflow-hidden">
      <div class="" v-if="selectedImage">
        <div class="text-base">Image Details</div>
        <div
          class="max-w-[275px] max-h-[180px] overflow-hidden transition-all ease-in-out duration-300"
        >
          <img
            :src="selectedImage.url"
            :alt="selectedImage.name"
            class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
          />
        </div>
        <h4 class="break-all">{{selectedImage.name}}</h4>
        <h4 class="break-all">October 3, 2022</h4>
        <h4 class="">
            <span class="text-blue-400 cursor-pointer mr-2">Edit Image</span>
            <span class="text-red-400 cursor-pointer">Delete Image</span>
        </h4>
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
</template>
