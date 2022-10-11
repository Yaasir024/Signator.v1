<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
const data = inject("data");

const toggleImageModal = () => {
  useEditorStore.imageModal = !useEditorStore.imageModal;
};
const readImage = (event) => {
  let input = event.target;
  let image = input.files[0];
  if (input.files) {
    let reader = new FileReader();
    reader.onload = (e) => {
      useEditorStore.previewImage = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
  useEditorStore.imageModal = true;
};
const setImage = () => {
  data.image.imgSrc = useEditorStore.previewImage;
  useEditorStore.imageModal = false;
};
</script>

<template>
  <!-- Image Modal -->
  <div
    class="image-modal fixed top-0 left-0 w-full h-full bg-[#ffffff83] backdrop-blur z-40"
  >
    <div
      class="h-full w-full py-8 px-6 overflow-y-scroll flex items-center justify-center"
    >
      <div
        class="bg-white m-auto pt-5 pb-10 px-6 rounded-3xl shadow-lg border relative"
      >
        <div class="flex items-center justify-between pb-4">
          <h1 class="text-xl font-medium">Image Preview</h1>
          <div
            class="flex items-center cursor-pointer"
            @click="toggleImageModal()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
              />
            </svg>
          </div>
        </div>
        <div class="image-preview">
          <div class="img" v-if="useEditorStore.previewImage">
            <img :src="useEditorStore.previewImage" alt="" />
          </div>
          <div class="controls flex items-center justify-between pt-12 pb-2">
            <div
              class="relative overflow-hidden py-1 px-3 bg-primary-color text-white text-lg rounded-3xl border-2 border-primary-color hover:text-primary-color hover:bg-white cursor-pointer transition-all ease-in-out duration-30"
            >
              Choose New Image
              <input
                type="file"
                accept="image/*"
                @change="readImage"
                class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div class="">
              <div
                class="py-1 px-4 border-2 border-primary-color text-primary-color text-lg rounded-3xl hover:text-white hover:bg-primary-color cursor-pointer transition-all ease-in-out duration-300"
                @click="setImage"
              >
                Use Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
