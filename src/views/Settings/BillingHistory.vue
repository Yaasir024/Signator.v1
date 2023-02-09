<script setup>
import { profileStore } from "@/stores/profile";

import {
  getDate,
  getMonthlySubscriptionEndDate,
  getYearlySubscriptionEndDate,
  getFormattedDate,
} from "@/composables/useFormatDate";

import Navbar from "@/components/Navigations/Navbar.vue";
import Sidebar from "@/components/Navigations/SidebarSetting.vue";
import MobileSidebar from "@/components/Navigations/SettingsMobileSidebar.vue";
import BillingDetails from "@/components/Payment/BillingDetails.vue";

const useProfileStore = profileStore();
</script>

<template>
  <section class="">
    <div class="h-[calc(100vh_-_68px)]  overflow-hidden">
      <div class="h-full overflow-hidden">
        <MobileSidebar class="block md:hidden" />
        <div class="h-full flex">
          <Sidebar class="hidden md:block" />
          <div class="h-full w-full">
            <div
              class="overflow-y-auto h-full px-4 xs:px-6 sm:px-12 pb-[150px]"
            >
              <div
                class="max-w-[720px] mx-auto my-8 bg-white shadow-xl border rounded-xl py-10 px-5 xs:px-7 sm:px-10"
              >
                <div class="">
                  <h2 class="text-2xl mb-5">Billing History</h2>

                  <div class="" v-if="useProfileStore.billingHistoryData">
                    <div
                      class="flex cursor-pointer gap-[16px] py-4 sm:py-5 px-4 xs:px-6 sm:px-8 my-4 bg-canvas-color shadow-lg rounded-3xl text-base hover:text-primary-color hover:scale-[1.02] transition-all duration-200 ease-in-out"
                      v-for="data in useProfileStore.billingHistoryData"
                      :key="data.transactionId"
                      @click="useProfileStore.openBillingDetailsModal(data)"
                    >
                      <div class="left hidden xs:flex">
                        <span class="hidden sm:block">{{
                          data.transactionId
                        }}</span>
                        <span class="">{{
                          getFormattedDate(data.transactionDate.toDate())
                        }}</span>
                      </div>
                      <div class="right flex">
                        <span class="capitalize">{{ data.plan }} Plan</span>
                        <span class="font-medium">${{ data.price }}</span>
                        <span class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="16"
                            height="16"
                            fill="currentColor"
                          >
                            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="" v-else>
                    <h1 class="text-lg">No Invoices Yet!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="billingModal">
      <BillingDetails v-if="useProfileStore.billingDetailsModalVisibility" />
    </transition>
    <transition name="overlay">
      <div
        class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-[2px] z-30 px-4 py-6"
        v-if="useProfileStore.billingDetailsModalVisibility"
      ></div>
    </transition>
  </section>
</template>

<style scoped>
/* BILLING MODAL ANIMATION */
.billingModal-enter-active,
.billingModal-leave-active {
  transition: 0.4s ease all;
}
.billingModal-enter-from,
.billingModal-leave-to {
  transform: translate(100%, 100%);
}

/* OVERLAY ANIMATION */
.overlay-enter-active,
.overlay-leave-active {
  transition: 0.4s ease all;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.left {
  align-items: center;
  flex-basis: 55%;
  gap: 16px;
}
.left span {
  flex: 1;
}
.right {
  align-items: center;
  flex-basis: 45%;
  gap: 16px;
}
.right span {
  flex: 1;
}
.right .icon {
  flex: 0;
}
@media only screen and (max-width: 640px) {
  .left {
    flex-basis: 35%;
  }
  .right {
    flex-basis: 65%;
  }
}
@media only screen and (max-width: 600px) {
  .left {
    flex-basis: 0%;
  }
  .right {
    flex-basis: 100%;
  }

  /* BILLING MODAL ANIMATION */
  .billingModal-enter-active,
  .billingModal-leave-active {
    transition: 0.4s ease all;
  }
  .billingModal-enter-from,
  .billingModal-leave-to {
    transform: translateY(100%);
  }
}
</style>
