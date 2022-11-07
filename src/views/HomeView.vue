<script setup>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";

const useAuth = authStore();

const image =
  "https://res.cloudinary.com/dwajobdyb/image/upload/v1667421036/templateImages/jen_smith_n1v2vg.jpg";

const change = ({ coordinates, canvas }) => {
  console.log(coordinates, canvas);
};
</script>

<template>
  <!-- <main class="">
    <Navbar />
    <div class="text-center text-4xl py-16">
      HOME PAGE
      
    </div>
  </main> -->
  <div class="crop-box">
    <!-- <cropper class="cropper" :src="image" /> -->
    <vue-cropper
      ref="cropper"
      :src="image"
      :viewMode="3"
      :img-style="{ width: '400px', height: '400px' }"
      :auto-crop-area="0.5"
      :min-container-width="250"
      :min-container-height="180"
      :aspectRatio="1 / 1"
    >
    </vue-cropper>
  </div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 17px;
}
/* .crop-box {
  width: 200px;
} */
</style>
