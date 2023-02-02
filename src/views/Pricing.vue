<script setup>
import { ref, reactive, computed } from "vue";

import { authStore } from "@/stores/auth";
import { paymentStore } from "@/stores/payment";
import { systemStore } from "@/stores/system";

import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";
import AuthModal from "@/components/Modal/AuthModal.vue";
import IndividualSection from "@/components/Pricing/IndividualSection.vue";
import OrganizationSection from "@/components/Pricing/OrganizationSection.vue";
import PaymentConfirmation from "@/components/Modal/PaymentConfirmation.vue";


const useAuth = authStore();
const usePayment = paymentStore();
const useSystemStore = systemStore();

const currentPricingTab = ref("individuals");


</script>

<template>
  <div
    class="min-h-screen bg-white"
    :class="
      usePayment.authModalVisibility || usePayment.paymentConfirmationModal
        ? 'h-screen overflow-y-hidden'
        : 'min-h-screen'
    "
  >
    <Navbar />
    <main class="mb-24" v-if="useSystemStore.userFullData">
      <div class="px-4 pt-10 text-center bg-canvas-color">
        <h1 class="text-[40px] font-medium">Pricing & Plans</h1>

        <div class="max-w-[720px] mx-auto px-3">
          <div class="flex justify-center items-center pt-10 text-xl">
            <div
              class="text-center px-4 py-3 border-b-0 cursor-pointer transition-all ease-in duration-200 rounded-tl-lg"
              :class="
                currentPricingTab == 'individuals'
                  ? 'bg-white text-primary-color border-2 border-primary-color'
                  : 'border-0'
              "
              @click="currentPricingTab = 'individuals'"
            >
              For Individuals
            </div>
            <div
              class="text-center px-4 py-3 border-b-0 cursor-pointer transition-all ease-in duration-200 rounded-tr-lg"
              :class="
                currentPricingTab == 'organization'
                  ? 'bg-white text-primary-color border-2 border-primary-color'
                  : 'border-0'
              "
              @click="currentPricingTab = 'organization'"
            >
              For Organizations
            </div>
          </div>
        </div>
      </div>
      <IndividualSection v-if="currentPricingTab == 'individuals'" />
      <OrganizationSection v-if="currentPricingTab == 'organization'" />
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
  <AuthModal
    @close="usePayment.authModalVisibility = false"
    v-if="usePayment.authModalVisibility"
  />
  <PaymentConfirmation v-if="usePayment.paymentConfirmationModal" />
</template>


