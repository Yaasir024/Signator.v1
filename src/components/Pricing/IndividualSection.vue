<script setup>
import { ref, reactive, computed } from "vue";

import { authStore } from "@/stores/auth";
import { paymentStore } from "@/stores/payment";
import { systemStore } from "@/stores/system";

const useAuth = authStore();
const usePayment = paymentStore();
const useSystemStore = systemStore();

const initPrice = 8
const signaturesNo = ref(4);

const price = computed(() => {
  let calculatedPriceMonthly = initPrice * signaturesNo.value;
  let calculatedPriceYearly = initPrice * signaturesNo.value * 12;
  if (billingTerm.value == "monthly") {
    return calculatedPriceMonthly;
  } else if (billingTerm.value == "yearly") {
    return calculatedPriceYearly - calculatedPriceYearly * (12 / 100);
  }
});

const basicPricing = reactive({
  price: computed(() => {
    if (billingTerm.value == "monthly") {
      return 8.0;
    } else if (billingTerm.value == "yearly") {
      return Math.ceil((8 * 12 - 8 * 12 * (12 / 100)));
    }
  }),
  plan: "basic",
  signaturesNo: 4,
});

const proPricing = reactive({
  price: computed(() => {
    let calculatedPriceMonthly = initPrice * signaturesNo.value;
    let calculatedPriceYearly = initPrice * signaturesNo.value * 12;
    if (billingTerm.value == "monthly") {
      return calculatedPriceMonthly;
    } else if (billingTerm.value == "yearly") {
      return Math.ceil(calculatedPriceYearly - calculatedPriceYearly * (12 / 100));
    }
  }),
  plan: "pro",
});

const billingTerm = ref("monthly");

</script>

<template>
  <section class="max-w-[950px] mx-auto my-12 px-6">
    <div class="w-full my-2 flex justify-end">
      <!-- Billing Filter -->
      <div class="">
        <div class="flex items-center h-[45px] rounded-lg bg-canvas-color">
          <button
            class="ml-2 mr-1 py-1 px-4 h-[35px] w-[100px] rounded-lg text-lg transition-all ease-in-out duration-300"
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
            class="ml-1 mr-2 py-1 px-4 h-[35px] w-[100px] rounded-lg text-lg transition-all ease-in-out duration-300"
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
        <div class="text-base mt-0.5 text-center">
          <span class="text-primary-color">Save up to 12%</span> with yearly
        </div>
      </div>
      <!--  -->
    </div>

    <!-- Cards -->
    <div
      class="max-w-[400px] mx-auto md:max-w-full md:mx-0 w-full flex justify-center flex-wrap"
    >
      <!-- FREE -->
      <div
        class="price-card w-full md:w-[33.33%] mb-12 md:mb-0 p-2 flex flex-col"
      >
        <div class="flex-1 w-full pt-6 pb-8 px-5 border rounded-md">
          <div class="text-center">
            <div class="text-lg font-medium mb-3">SIGNATOR FREE</div>
            <div class="">
              <span class="text-4xl font-medium">$0</span>
            </div>
            <sub class="text-xl font-medium bottom-[-0.1em]"
              >/{{ billingTerm }}</sub
            >
          </div>
          <div class="mt-5 pl-4">
            <ul class="text-base font-normal leading-8">
              <li class="feature relative pl-5">One Signature</li>
              <li class="feature relative pl-5">
                Limited Designs and Styling options
              </li>
              <li class="feature relative pl-5">Signator Watermark</li>
            </ul>
          </div>
        </div>
        <button
          class="mt-2 py-2 px-8 w-full bg-white border border-primary-color text-primary-color text-lg rounded-lg hover:text-white hover:bg-primary-color transition-all duration-300 ease-in-out"
          @click="usePayment.authModalVisibility = true"
          v-if="!useAuth.userState"
        >
          Get Started
        </button>
      </div>
      <!-- BASIC -->
      <div
        class="price-card w-full md:w-[33.33%] mb-12 md:mb-0 p-2 flex flex-col"
      >
        <div class="flex-1 w-full pt-6 pb-8 px-5 border rounded-md">
          <div class="text-center">
            <div class="text-lg font-medium mb-3">SIGNATOR BASIC</div>
            <div class="">
              <span class="text-4xl font-medium"
                >${{ basicPricing.price }}</span
              >
            </div>
            <sub class="text-xl font-medium bottom-[-0.1em]"
              >/{{ billingTerm }}</sub
            >
          </div>
          <div class="mt-5 pl-4">
            <ul class="text-base font-normal leading-8">
              <li class="feature relative pl-5">4 Signatures</li>
              <li class="feature relative pl-5">Basic Templates and Layouts</li>
              <li class="feature relative pl-5">All Basic addons</li>
              <li class="feature relative pl-5">No Signator Watermark</li>
              <li class="feature relative pl-5">
                Up to 10 Images in Image Library
              </li>
              <li class="feature relative pl-5">
                More Designs and Stying options
              </li>
            </ul>
          </div>
        </div>
        <div
          class=""
          v-if="
            useAuth.userState &&
            useSystemStore.userFullData.subscriptionData.plan == 'free'
          "
        >
          <button
            class="mt-2 py-2 px-8 w-full bg-white border-2 border-primary-color text-primary-color text-lg rounded-lg hover:text-white hover:bg-primary-color transition-all duration-300 ease-in-out"
            @click="
              usePayment.openPaymentModal(
                basicPricing.price,
                'basic',
                basicPricing.signaturesNo,
                billingTerm
              )
            "
            v-if="useAuth.userState"
          >
            Choose Plan
          </button>
          <button
            class="mt-2 py-2 px-8 w-full bg-white text-lg border-2 border-primary-color text-primary-color rounded-lg hover:text-white hover:bg-primary-color transition-all duration-300 ease-in-out"
            @click="usePayment.authModalVisibility = true"
            v-else
          >
            Get Started
          </button>
          <!-- authModalVisibility -->
        </div>
      </div>

      <!-- PRO -->
      <div class="price-card w-full md:w-[33.33%] mb-12 md:mb-0 p-2">
        <div class="w-full pb-8 border border-t-0 rounded-md overflow-hidden">
          <div
            class="pt-4 pb-2 text-center bg-primary-color rounded-b-[3.5rem] text-white"
          >
            <div class="text-lg font-medium mb-1">SIGNATOR PRO</div>
            <div class="">
              <span class="text-4xl font-medium">${{ proPricing.price }}</span>
            </div>
            <sub class="text-xl font-medium bottom-[-0.1em]"
              >/{{ billingTerm }}</sub
            >
          </div>
          <div class="pt-6 mb-4 px-4">
            <div class="mb-1 text-base text-center">
              Select number of users you need signature for
            </div>
            <input
              type="range"
              min="4"
              max="10"
              v-model="signaturesNo"
              class="mt-1"
            />
            <div class="flex justify-end">{{ signaturesNo }} Users</div>
          </div>
          <div class="px-5 pl-6">
            <ul class="text-base font-normal leading-8">
              <li class="feature relative pl-5">Up to 10 signatures</li>
              <li class="feature relative pl-5">Pro Templates & Layouts</li>
              <li class="feature relative pl-5">All premium Addons</li>
              <li class="feature relative pl-5">No Signator Watermark</li>
              <li class="feature relative pl-5">
                Up to 25 Images in Image Library
              </li>
              <li class="feature relative pl-5">
                All Designs and Stying options
              </li>
            </ul>
          </div>
        </div>
        <button
          class="mt-2 py-2 px-8 w-full bg-primary-color border border-primary-color text-white text-lg rounded-lg hover:text-primary-color hover:bg-white transition-all duration-300 ease-in-out"
          @click="
            usePayment.openPaymentModal(
              proPricing.price,
              'pro',
              signaturesNo,
              billingTerm
            )
          "
          v-if="
            useAuth.userState &&
            useSystemStore.userFullData.subscriptionData.plan != 'pro'
          "
        >
          Choose Plan
        </button>
        <button
          class="mt-2 py-2 px-8 w-full bg-primary-color border border-primary-color text-white text-lg rounded-lg hover:text-primary-color hover:bg-white transition-all duration-300 ease-in-out"
          @click="usePayment.authModalVisibility = true"
          v-if="!useAuth.userState"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>


<style scoped>
.feature::before {
  display: block;
  position: absolute;
  content: url(/icons/check.svg);
  left: -4px;
}
</style>