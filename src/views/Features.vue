<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";

const useAuth = authStore();
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="pt-11">
      <div class="text-center">
        <h1 class="text-2xl font-medium leading-10">Signator Features</h1>
      </div>
      <section class="features w-full bg-white py-5">
        <div class="w-full px-6">
          <div class="flex items-center max-w-[1160px] mx-auto py-6">
            <article class="w-[50%] flex flex-col items-end pr-6">
              <h3 class="text-2xl font-medium">Simple, Easy to use Editor</h3>
              <p class="mt-4 text-base max-w-[360px] text-right">
                Create you email signature today with our simple, easy to use
                editor. Just provide your basic information and get your preview
                your results instantly
              </p>
            </article>
            <div class="pl-8">
              <div
                class="w-[400px] h-[400px] overflow-hidden rounded-full bg-canvas-color shadow-xl"
              >
                <img
                  src="images/Features/editor.png"
                  alt=""
                  class="mt-10 scale-75"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-canvas-color w-full px-6">
          <div
            class="flex flex-row-reverse items-center max-w-[1160px] mx-auto py-6"
          >
            <article class="w-[50%] flex flex-col items-start pr-6">
              <h3 class="text-2xl font-medium">Simple, Easy to use Editor</h3>
              <p class="mt-4 text-base max-w-[360px] text-left">
                Our cropper tool allows you to edit the picture that you’ve uploaded by cropping it to any size in seconds.
              </p>
            </article>
            <div class="pl-8">
              <div class="">
                <img
                  src="images/Features/cropper.png"
                  alt=""
                  class="scale-75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
