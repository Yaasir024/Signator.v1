<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navigations/Navbar.vue";
import { authStore } from "@/stores/auth";

const useAuth = authStore();
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="">
      <div class="pt-[70px] pb-[90px] px-4 text-center">
        <h1 class="text-4xl font-medium leading-10">Features</h1>
        <p class="text-lg">
          Signator provides you with lots of cool features for creating your
          Email Signature
        </p>
        <button
          class="bg-primary-color text-white py-2 px-6 mt-2 text-base font-medium rounded-2xl"
        >
          Get Started
        </button>
      </div>
      <section class="features w-full bg-white py-5">
        <div class="w-full px-6">
          <div
            class="flex items-center justify-center flex-col-reverse md:flex-row-reverse max-w-[1160px] mx-auto py-6"
          >
            <article
              class="flex flex-col items-center md:items-start md:pl-6 mt-4 md:mt-0 text-center md:text-left"
            >
              <h3 class="text-2xl font-medium">Simple, Easy to use Editor</h3>
              <p class="mt-2 text-lg max-w-[360px]">
                Create you email signature today with our simple, easy to use
                editor. Just provide your basic information and get your preview
                your results instantly
              </p>
            </article>
            <div class="flex-full md:flex-50% md:pl-8 mt-4 md:mt-0">
              <div
                class="w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-full bg-canvas-color shadow-xl"
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
        <!-- Templates and Layouts -->
        <div class="w-full px-6">
          <div
            class="flex items-center justify-center flex-col md:flex-row max-w-[1160px] mx-auto py-6"
          >
            <article
              class="flex flex-col items-center md:items-end md:pr-6 text-center md:text-right"
            >
              <h3 class="text-2xl font-medium">Templates and Layouts</h3>
              <p class="mt-2 text-lg max-w-[360px]">
                Create the professional signature your emails need with our
                templates and layouts.Have your own design in mind? Contact us
                so we can make it work. Additional charges may apply
              </p>
            </article>
            <div class="flex-full md:flex-50% md:pl-8 mt-4 md:mt-0">
              <div class="">
                <img
                  src="images/Features/templates.png"
                  alt=""
                  class="mt-10 scale-75 md:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Images -->
        <div class="w-full px-6">
          <div
            class="flex items-center justify-center flex-col-reverse md:flex-row-reverse max-w-[1160px] mx-auto py-6"
          >
            <article
              class="flex flex-col items-center md:items-start md:pr-6 mb-4 md:mb-0 text-center md:text-left"
            >
              <h3 class="text-2xl font-medium">
                Add your image or logo to your signature easily
              </h3>
              <p class="mt-4 text-lg max-w-[360px]">
                Improve your customers' trust in your brand by adding your photo
                or business logo. <br />
                Add a link to the photo or business logo so the recipients of
                your emails can easily visit your website or other intended
                sources.
              </p>
            </article>
            <div class="flex-full md:flex-50% md:pl-8 mt-4 md:mt-0">
              <div class="">
                <img src="images/Features/images.png" alt="" class="scale-75" />
              </div>
            </div>
          </div>
        </div>
        <!-- Social -->
        <div class="w-full px-6">
          <div
            class="flex items-center justify-center flex-col md:flex-row max-w-[1160px] mx-auto py-6"
          >
            <article
              class="flex flex-col items-center md:items-end md:pr-6 text-center md:text-right"
            >
              <h3 class="text-2xl font-medium">50+ Social Icons</h3>
              <p class="mt-2 text-lg max-w-[360px]">
                Add icons to your social media accounts to increase traffic to
                your pages. Additional icons can bedeveloped on request.
              </p>
            </article>
            <div class="flex-full md:flex-50% md:pl-8 mt-4 md:mt-0">
              <div
                class="w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-full bg-canvas-color shadow-xl"
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
        <!-- Additional -->
        <div class="w-full px-6">
          <div class="max-w-[1160px] mx-auto py-12">
            <div class="text-center">
              <p class="text-2xl font-medium leading-10 mb-3">
                Additional Features
              </p>
            </div>
            <div class="flex flex-wrap justify-center">
              <div
                class="flex-full sm:flex-50% md:flex-33.33% w-full px-4 py-2"
              >
                <h3 class="text-xl font-medium">Custom Fields</h3>
                <p class="text-base mt-2">
                  Add as many custom fields as you like to your signature for
                  your most important details.
                </p>
              </div>
              <div
                class="flex-full sm:flex-50% md:flex-33.33% w-full px-4 py-2"
              >
                <h3 class="text-xl font-medium">Cropper Tool</h3>
                <p class="text-base mt-2">
                  Our cropper tool allows you to edit the picture that you’ve
                  uploaded by cropping it to any size in seconds.
                </p>
              </div>
              <div
                class="flex-full sm:flex-50% md:flex-33.33% w-full px-4 py-2"
              >
                <h3 class="text-xl font-medium">Fonts Variation</h3>
                <p class="text-base mt-2">
                  Choose from a variety of fonts that best match your needs.
                </p>
              </div>
              <div
                class="flex-full sm:flex-50% md:flex-33.33% w-full px-4 py-2"
              >
                <h3 class="text-xl font-medium">Easy to Manage Dashboard</h3>
                <p class="text-base mt-2">
                  View and manage all your email signatures from a dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-canvas-color w-full px-6">
          <div class="max-w-[1160px] mx-auto py-14 text-center">
            <h3 class="text-2xl font-medium">
              Build your unique email signature today with Signator
            </h3>
            <button
              class="bg-primary-color text-white py-2 px-6 mt-2 text-base font-medium rounded-2xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
