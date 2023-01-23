<script setup>
import { paymentStore } from "@/stores/payment";
const usePayment = paymentStore();

const pay = () => {
  console.log('Do')
  usePayment.makePayment()
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-[2px] z-40 px-4 py-6"
  >
    <div
      class="max-w-[420px] w-full mx-auto mt-20 bg-white rounded-lg overflow-hidden shadow-lg relative"
    >
      <div
        class="absolute top-3 right-3 cursor-pointer z-30"
        @click="usePayment.paymentConfirmationModal = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
          />
        </svg>
      </div>
      <div class="pt-4">
        <div class="text-xl font-medium text-center pb-2 border-b-2">
          Payment Details
        </div>
        <div class="pt-4 pb-2 px-7 text-center">
          <h2 class="text-xl font-medium capitalize">Signator {{ usePayment.customerDetail.plan }}({{ usePayment.customerDetail.billingCycle }})  --  <span>${{ usePayment.customerDetail.price }}</span></h2>
          <h2 class="text-lg font-medium capitalize"> </h2>
        </div>
        <form @submit.prevent="pay()">
          <div class="px-8 pt-4">
            <form action="">
              <div class="field mb-4 text-base">
                <div class="mb-1 pl-2">
                  <span>Name</span>
                  <span class="text-red-600">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                  required
                  v-model="usePayment.customerDetail.meta.name"
                />
              </div>
              <div class="field mb-4 text-base">
                <div class="mb-1 pl-2">
                  <span>Email</span>
                  <span class="text-red-600">*</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                  required
                  v-model="usePayment.customerDetail.meta.email"
                />
              </div>
              <div class="field mb-4 text-base">
                <div class="mb-1 pl-2">
                  <span>Phone Number</span>
                  <span class="text-red-600">*</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                  required
                  v-model="usePayment.customerDetail.meta.phoneNumber"
                />
              </div>
              <div class="field mb-4 text-base">
                <div class="mb-1 pl-2">
                  <span>Country</span>
                  <span class="text-red-600">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Nigeria"
                  class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                  required
                  v-model="usePayment.customerDetail.meta.country"
                />
              </div>
            </form>
          </div>
          <div
            class="border-t-2 py-3 px-4 flex items-center justify-between text-lg"
          >
            <h2></h2>
            <button
              class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
              type="submit"
            >
              Pay ${{ usePayment.customerDetail.price }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
