<script setup>
import { ref, reactive, computed } from "vue";
// https://agontuk.github.io/vue-cropperjs/
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { inject } from "vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
const data = inject("data");

const toggleImageModal = () => {
  useEditorStore.imageModal = !useEditorStore.imageModal;
  useEditorStore.previewImage = "";
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

const cropper = ref(null);
const aspenctRatio = ref(1 / 1);
const croppedImg = ref("");
const cropImage = () => {
  croppedImg.value = cropper.value.getCroppedCanvas().toDataURL();
  setImage()
};
const setImage = () => {
  
  if (croppedImg.value != "") {
    data.image.img = croppedImg.value;
  } else {
    data.image.img = useEditorStore.previewImage;
  }
  useEditorStore.previewImage = ""
  croppedImg.value = "";
  useEditorStore.imageModal = false;
};
</script>

<template>
  <div class="modal fixed max-w-[550px] w-full px-5 z-[80]">
    <div
      class="bg-white m-auto pt-5 pb-5 px-6 rounded-3xl shadow-lg border relative"
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
          <vue-cropper
            ref="cropper"
            :src="useEditorStore.previewImage"
            :aspectRatio="1 / 1"
            :img-style="{ maxHeight: '520px' }"
          >
          </vue-cropper>
        </div>
        <div class="controls flex items-center justify-between pt-6 pb-2">
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
              @click="cropImage"
            >
              Use Image
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%) !important;
}
</style>
