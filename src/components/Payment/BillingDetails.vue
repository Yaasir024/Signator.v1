<script setup>
import { profileStore } from "@/stores/profile";

import {
  getDate,
  getMonthlySubscriptionEndDate,
  getYearlySubscriptionEndDate,
  getFormattedDate,
} from "@/composables/useFormatDate";

const useProfileStore = profileStore();
</script>

<template>
  <section
    class="fixed bottom-0 right-0 min-h-[480px] xs:max-w-[400px] w-full pb-10 bg-white border shadow-lg xs:rounded-tl-xl z-40"
  >
    <div
      class="relative top-3 left-3 cursor-pointer"
      @click="useProfileStore.closeBillingDetailsModal()"
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
    <div class="mt-4">
      <div class="text-center">
        <h1 class="text-center text-lg font-medium capitalize">
          Payment For Signator
          {{ useProfileStore.billingDetailsModalData.plan }} Plan
        </h1>
        <span class="text-xl font-bold mt-2"
          >${{ useProfileStore.billingDetailsModalData.price }}</span
        >
      </div>
      <div class="mt-8">
        <div class="text-center"><span>PAYMENT DETAILS</span></div>
        <div class="text-base mt-2 mx-4 px-6 py-4 bg-canvas-color rounded-lg">
          <div class="flex pb-2 mb-2 border-b">
            <div class="flex-[50%] font-medium">AMOUNT PAID</div>
            <div class="flex-[50%] text-end">
              ${{ useProfileStore.billingDetailsModalData.price }}
            </div>
          </div>
          <div class="flex pb-2 mb-2 border-b">
            <div class="flex-[50%] font-medium">Plan</div>
            <div class="flex-[50%] text-end capitalize">
              {{ useProfileStore.billingDetailsModalData.plan }}
            </div>
          </div>
          <div class="flex pb-2 mb-2 border-b">
            <div class="flex-[50%] font-medium">Billing Cycle</div>
            <div class="flex-[50%] text-end capitalize">
              {{ useProfileStore.billingDetailsModalData.billingCycle }}
            </div>
          </div>
          <div class="flex pb-2 mb-2 border-b">
            <div class="flex-[50%] font-medium">Start Date</div>
            <div class="flex-[50%] text-end">
              {{
                getFormattedDate(
                  useProfileStore.billingDetailsModalData.transactionDate.toDate()
                )
              }}
            </div>
          </div>
          <div class="flex pb-2 mb-2 border-b">
            <div class="flex-[50%] font-medium">End Date</div>
            <div class="flex-[50%] text-end">
              {{
                getFormattedDate(
                  useProfileStore.billingDetailsModalData.subscriptionEndDate.toDate()
                )
              }}
            </div>
          </div>
          <div class="flex pb-2 mb-2 border-b">
            <div class="flex-[50%] font-medium">Transaction ID</div>
            <div class="flex-[50%] text-end">
              {{ useProfileStore.billingDetailsModalData.transactionId }}
            </div>
          </div>
        </div>
        <div class="mt-2 text-center px-3 text-sm">
          <span class="">
            If you have questions or issues with this payment,<RouterLink
              to="/contact-us"
              class="text-primary-color transition-all duration-300 ease-in-out"
            >
              Contact Us
            </RouterLink>
          </span>
        </div>
      </div>
    </div>
  </section>
  
</template>
