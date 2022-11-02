<script setup>
import { ref, reactive, computed } from "vue";
const emit = defineEmits(["closeModal"]);
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
  <div
    class="modal fixed top-0 max-w-[800px] w-full bg-white rounded-xl shadow-lg border flex z-50"
  >
    <div class="left w-[500px] pt-10 pb-8 px-5 border-r">
      <div class="text-center">
        <div class="text-xl font-medium mb-3">
            Get Signator Premium
        </div>
        <div class="">
          <span class="text-4xl font-semibold">${{ price }}</span>
          <sub class="text-lg font-semibold bottom-[-0.1em]">/mo</sub>
        </div>
        <div class="">billed {{ billingTerm }}</div>
      </div>
      <div class="mt-5 pl-4">
        <ul class="text-base font-normal leading-8">
          <li class="feature relative pl-5">Premium templates</li>
          <li class="feature relative pl-5">All premium addons</li>
          <li class="feature relative pl-5">No Signator Watermark</li>
          <li class="feature relative pl-5">Banner Feature</li>
          <li class="feature relative pl-5">More Designs and Stying options</li>
        </ul>
      </div>
    </div>
    <div class="w-full pt-8 px-5 relative">
      <div
        class="cursor-pointer absolute right-[-18px] top-[-18px]"
        @click="$emit('closeModal')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
          />
        </svg>
      </div>
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
        <div class="mb-2 text-lg text-center">
          Select number of signatures you need
        </div>
        <input type="range" min="2" max="51" v-model="signaturesNo" />
        <div class="flex justify-end text-lg">
          {{ signaturesNo }} Signatures
        </div>
      </div>
      <div class="">
        <button
          class="py-1 px-8 bg-primary-color text-white text-base rounded-xl"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}
</style>
