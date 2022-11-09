<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";

const useAuth = authStore();
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="">
      <div class="py-12 text-center">
        <h1 class="text-2xl font-medium leading-10">Features</h1>
        <p class="text-lg">Signator provides you with lots of cool features for creating your Email Signature</p>
        <button class="bg-primary-color text-white py-2 px-6 mt-2 text-base font-medium rounded-2xl">Get Started</button>
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
        <div class=" w-full px-6">
          <div
            class="flex flex-row-reverse items-center max-w-[1160px] mx-auto py-6"
          >
            <article class="w-[50%] flex flex-col items-start pr-6">
              <h3 class="text-2xl font-medium">Add your image or logo to your signature easily</h3>
              <p class="mt-4 text-lg max-w-[360px] text-left">
                Improve your customers' trust in your brand by adding your photo or business logo. <br>
                Add a link to the photo or business logo so the recipients of your emails can easily visit your website or other intended sources.
              </p>
            </article>
            <div class="pl-8">
              <div class="">
                <img
                  src="images/Features/images.png"
                  alt=""
                  class="scale-75 "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-6">
          <div class="flex items-center justify-center flex-col md:flex-row max-w-[1160px] mx-auto py-6">
            <article class="flex flex-col items-center md:items-end md:pr-6 text-center md:text-right">
              <h3 class="text-2xl font-medium">50+ Social Icons</h3>
              <p class="mt-2 text-lg max-w-[360px] ">
                Add icons to your social media accounts to increase traffic to your pages.
                Additional icons can bedeveloped on request.
              </p>
            </article>
            <div class="flex-full md:flex-50% md:pl-8 mt-4 md:mt-0">
              <div
                class="w-[400px] h-[400px] overflow-hidden rounded-full bg-canvas-color shadow-xl"
              >
                <img
                  src="images/Features/social.png"
                  alt=""
                  class="mt-5 scale-75"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-6">
          <div class="flex flex-wrap justify-center max-w-[1160px] mx-auto py-12">
            <div class="flex-33.33% w-full px-4 py-2">
              <h3 class="text-xl font-medium">Templates and layouts</h3>
              <p class="text-base mt-2">Create the professional signature your emails need with our templates and layouts.Have your own design in mind? Contact us so we can make it work. Additional charges may apply</p>
            </div>
            <div class="flex-33.33% w-full px-4 py-2">
              <h3 class="text-xl font-medium">Custom Fields</h3>
              <p class="text-base mt-2">Add as many custom fields as you like to your signature for your most important details.</p>
            </div>
            <div class="flex-33.33% w-full px-4 py-2">
              <h3 class="text-xl font-medium">Cropper Tool</h3>
              <p class="text-base mt-2">Our cropper tool allows you to edit the picture that you’ve uploaded by cropping it to any size in seconds.</p>
            </div>
            <div class="flex-33.33% w-full px-4 py-2">
              <h3 class="text-xl font-medium">Fonts Variation</h3>
              <p class="text-base mt-2">Choose from a variety of fonts that best match your needs.</p>
            </div>
            <div class="flex-33.33% w-full px-4 py-2">
              <h3 class="text-xl font-medium">Easy to Manage Dashboard</h3>
              <p class="text-base mt-2">View and manage all your email signatures from a dashboard.</p>
            </div>
            
            
          </div>
        </div>
        <div class="bg-canvas-color w-full px-6">
          <div
            class="flex flex-row-reverse items-center max-w-[1160px] mx-auto py-6"
          >
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
