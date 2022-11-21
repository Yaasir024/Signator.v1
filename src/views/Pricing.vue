<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";

const initPrice = {
  monthly: 8,
  yearly: 5,
};

const signaturesNo = ref(2);

const price = computed(() => {
  return initPrice[billingTerm.value] * signaturesNo.value;
});

const billingTerm = ref("monthly");
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="mb-24">
      <div class="bg-canvas-color px-4 py-14 text-center">
        <h1 class="text-4xl font-medium">
          Choose the best plan for your needs.
        </h1>
      </div>
      <section class="max-w-[900px] mx-auto my-12 px-6">
        <div class="w-full my-2 flex justify-center">
          <div class="bg-white shadow-lg rounded-xl flex items-center">
            <button
              class="py-1 px-4 rounded-xl transition-all ease-in-out duration-300"
              :class="
                billingTerm == 'monthly'
                  ? 'bg-primary-color text-white'
                  : 'text-primary-color'
              "
              @click="billingTerm = 'monthly'"
            >
              Monthly
            </button>
            <button
              class="py-1 px-4 rounded-xl transition-all ease-in-out duration-300"
              :class="
                billingTerm == 'yearly'
                  ? 'bg-primary-color text-white'
                  : 'text-primary-color'
              "
              @click="billingTerm = 'yearly'"
            >
              Yearly
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="price-card p-2 flex flex-col">
            <div class="flex-1 max-w-[310px] w-full pt-6 pb-8 px-5 border">
              <div class="text-center">
                <div class="text-lg font-medium mb-1">FREE</div>
                <div class="">
                  <span class="text-4xl font-medium">$0</span>
                  <sub class="text-xl font-medium bottom-[-0.1em]">/mo</sub>
                </div>
              </div>
              <div class="mt-5 pl-4">
                <ul class="text-base font-normal leading-8">
                  <li class="feature relative pl-5">One Signature</li>
                  <li class="feature relative pl-5">
                    Limites Designs and Styling options
                  </li>
                  <li class="feature relative pl-5">Signator Watermark</li>
                </ul>
              </div>
            </div>
            <button
              class="mt-2 py-2 px-8 w-full bg-white border border-primary-color text-primary-color text-base rounded-lg hover:text-white hover:bg-primary-color transition-all duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
          <div class="price-card p-2">
            <div class="max-w-[310px] w-full pb-8 rounded border border-t-0">
              <div
                class="pt-4 pb-2 text-center bg-primary-color rounded-b-[3.5rem] text-white"
              >
                <div class="text-lg font-medium mb-1">PRO</div>
                <div class="">
                  <span class="text-4xl font-medium">${{ price }}</span>
                  <sub class="text-xl font-medium bottom-[-0.1em]">/mo</sub>
                </div>
                <div class="">billed {{ billingTerm }}</div>
              </div>
              <div class="pt-6 mb-4 px-4">
                <div class="mb-1 text-base text-center">
                  Select number of users you need signature for
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  v-model="signaturesNo"
                  class="mt-1"
                />
                <div class="flex justify-end">{{ signaturesNo }} Users</div>
              </div>
              <div class="px-5 pl-6">
                <ul class="text-base font-normal leading-8">
                  <li class="feature relative pl-5">Premium templates</li>
                  <li class="feature relative pl-5">All premium addons</li>
                  <li class="feature relative pl-5">No Signator Watermark</li>
                  <li class="feature relative pl-5">Banner Feature</li>
                  <li class="feature relative pl-5">
                    More Designs and Stying options
                  </li>
                </ul>
              </div>
            </div>
            <button
              class="mt-2 py-2 px-8 w-full bg-primary-color border border-primary-color text-white text-base rounded-lg hover:text-primary-color hover:bg-white transition-all duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <div class="bg-canvas-color px-5 py-14 text-center">
        <h1 class="text-2xl font-medium">
          Need more signatures or have other needs?
        </h1>
        <RouterLink to="/contact-us">
          <button
              class="mt-2 py-1 px-10 bg-primary-color border border-primary-color text-white text-lg rounded-lg"
            >
              Contact Us
            </button>
        </RouterLink>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.feature::before {
  display: block;
  position: absolute;
  content: url(/icons/check.svg);
  left: -4px;
}
</style>
