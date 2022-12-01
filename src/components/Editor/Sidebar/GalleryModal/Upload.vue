<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

import { editorStore } from "@/stores/editor";

import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

const useEditorStore = editorStore();

const cropper = ref(null);

const imgSrc = ref("");
const readImage = () => {
  let input = event.target;
  let image = input.files[0];

  if (input.files) {
    let reader = new FileReader();
    // let imgSrc = ''
    reader.onload = (e) => {
      imgSrc.value = reader.result;
      console.log(image.name, e.target.result)
      uploadImg(imgSrc.value, image.name)
    };
    // console.log(image.name);
    reader.readAsDataURL(input.files[0]);
  }
};

const uploadImg = (img, imgId) => {
    let src = img;
    let name = imgId
    const formData = new FormData();
    formData.append("file", src);
    formData.append("upload_preset", "imgassets");
    formData.append("folder", "signatorClientImages");
    formData.append("public_id", name);

    const postImg = async () => {
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dwajobdyb/upload",
          formData
        );
        // data.value.image.img = "";
        // data.value.image.imgSrc = res.data.secure_url;
        console.log(res.data.secure_url);
        useEditorStore.addImageToGallery(res.data.secure_url, name)
        console.log('Success');
      } catch (error) {
        console.log(error);
      }
    };
    postImg();
  };
</script>

<template>
  <div class="grow flex items-center justify-center">
    <div class="grow">
      <div
        class="flex flex-col items-center border border-dashed overflow-hidden cursor-pointer"
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
  </div>
  <div class="flex items-center justify-center" v-if="false">
    <div class="grow">
      <div class="max-w-[500px] mx-auto p-4">
        <vue-cropper
          ref="cropper"
          :src="img"
          :aspectRatio="1 / 1"
          :img-style="{ maxHeight: '520px' }"
          max-container-width="100%"
        >
        </vue-cropper>
        
      </div>
    </div>
  </div>
  <div class="h-[50px] bg-white"></div>
</template>
