<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

import { editorStore } from "@/stores/editor";

const useEditorStore = editorStore();

const props = defineProps(["galleryImages"]);
const emits = defineEmits(["close"]);

const selectedImage = ref("");

const deleteImage = (img) => {
    const timestamp = new Date().getTime()
  console.log(img);
  const formData = new FormData();
  formData.append("api_key", "832939519396337");
  formData.append("public_id", img.name);
  formData.append("signature", 'bfd09f95f331f558cbd1320e67aa8d488770583e')
  formData.append("timestamp",timestamp)
//   bfd09f95f331f558cbd1320e67aa8d488770583e
  const postImg = async () => {
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dwajobdyb/image/destroy",
        formData
      );
      //   `https://api.cloudinary.com/v1_1/dwajobdyb/image/destroy/signatorClientImages/2roadmap.PNG`,
      //   ${img.name}/
      console.log(res);
      //   useEditorStore.addImageToGallery(res.data.secure_url, name);
      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  };
  postImg();
};

const useImage = () => {
  useEditorStore.data.image.img = selectedImage.value.url
  emits('close')
  selectedImage.value = ""
}
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
        <h4 class="break-all">{{ selectedImage.name }}</h4>
        <h4 class="break-all">October 3, 2022</h4>
        <h4 class="">
          <span class="text-blue-400 cursor-pointer mr-2">Edit Image</span>
          <span
            class="text-red-400 cursor-pointer"
            @click="deleteImage(selectedImage)"
            >Delete Image</span
          >
        </h4>
        <div class="mt-4 flex items-center justify-end px-2">
            <button class="bg-primary-color text-white h-[32px] px-4 rounded" @click="useImage()">Set Image</button>
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
</template>
