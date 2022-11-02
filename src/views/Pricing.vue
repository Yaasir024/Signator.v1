<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";

const initPrice = {
    monthly: 8,
    yearly: 5
}

const signaturesNo = ref(2)

const price = computed(() => {
    return (initPrice[billingTerm.value] * signaturesNo.value)
})

const billingTerm = ref("monthly");
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <div class="py-14 px-5">
        <div
          class="max-w-[900px] mx-auto bg-white rounded-xl shadow-lg border flex"
        >
          <div class="left w-[500px] pt-10 pb-8 px-5 border-r">
            <div class="text-center">
              <div class="">
                <span class="text-4xl font-semibold">${{price}}</span>
                <sub class="text-lg font-semibold bottom-[-0.1em]">/mo</sub>
              </div>
              <div class="">billed {{billingTerm}}</div>
            </div>
            <div class="mt-5 pl-4">
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
          <div class="w-full pt-8 px-5">
            <div class="flex justify-end py-2">
              <div class="bg-white shadow-md rounded-xl flex items-center">
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
            
            <div class="py-6">
                <div class="mb-2 text-lg text-center">Select number of signatures you need</div>
                <input type="range" min="2" max="51" v-model="signaturesNo">
                <div class="flex justify-end text-lg">
                    {{signaturesNo}} Signatures
                </div>
            </div>
            <div class="">
                <button class="py-1 px-8 bg-primary-color text-white text-base rounded-xl">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
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
