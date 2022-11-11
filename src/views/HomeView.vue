<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";

const useAuth = authStore();
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="w-full bg-white py-5 px-6">
      <div
        class="hero first-letter:lg:pl-[140px] pt-11 lg:pt-[93px] md:pl-[70px] pl-3 lg:text-left"
      >
        <div class="mt-6 lg:mt-0">
          <h2
            class="text-[32px] max-w-[316px] leading-[44.8px] text-center mx-auto font-semibold sm:text-[40px] sm:max-w-[500px] lg:text-400px lg:max-w-400px sm:leading-56 lg:text-left lg:mx-0"
          >
            Simple-to-use signature generator
            <span class="text-primary-color text-3xlfont-extrabold inline-block"
              >.</span
            >
          </h2>
          <p
            class="max-w-[343px] text-center text-[16px] leading-[24.64px] mx-auto font-normal mt-7 sm:max-w-[400px] sm:text-[18px] lg:text-left lg:mx-0"
          >
            Signator a simple-to-use email signature generator designed to
            enhance your interactions with clients, coworkers, and business
            partners. You can use the generator to make email signatures that
            are suitable for all purposes.
          </p>
        </div>
        <div class="img-container">
          <img src="images/Home/hero-signature.png" alt="" />
        </div>
      </div>
    </main>
    
    <section class="features w-full bg-white pt-[70px] pb-[90px] px-6">
      <div class="text-center text-2xl font-medium leading-10">Features</div>
      <div class="w-full px-6">
        <div
          class="flex items-center justify-center flex-col-reverse md:flex-row-reverse max-w-[1160px] mx-auto pt-6 pb-6"
        >
          <article
            class="flex flex-col items-center md:items-start md:pr-6 mb-4 md:mb-0 text-center md:text-left"
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
      <div class="text-center pt-[30px] pb-[10px]">
        <RouterLink
        to="/features"
        class="py-2 px-4 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
      >
        <span>View all Features</span>
      </RouterLink>
      </div>
    </section>
    <section class="support w-full pt-[70px] pb-[60px] px-6">
      <div class="text-center text-2xl font-medium leading-10">Supported By:</div>
      <div class="flex items-center justify-center">
        <div class="bg-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-105  transition-all duration-300 ease-in-out">
          <img src="/icons/mails/gmail.png" alt="">
        </div>
        <div class="bg-white p-4 rounded-full shadow-lg ml-3 cursor-pointer hover:scale-105  transition-all duration-300 ease-in-out">
          <img src="/icons/mails/apple.png" alt="">
        </div>
        <div class="bg-white p-4 rounded-full shadow-lg ml-3 cursor-pointer hover:scale-105  transition-all duration-300 ease-in-out">
          <img src="/icons/mails/yahoo.png" alt="">
        </div>
        <div class="bg-white p-4 rounded-full shadow-lg ml-3 cursor-pointer hover:scale-105  transition-all duration-300 ease-in-out">
          <img src="/icons/mails/outlook.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-rows: 1.5fr 2fr;
}
.hero .img-container {
  grid-area: 1/1;
}
@media only screen and (min-width: 1024px) {
  .hero {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-template-rows: 1fr;
    gap: 10px;
  }
  .hero .img-container {
    grid-area: auto;
  }
}
</style>
