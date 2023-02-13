<script setup>
import { systemStore } from "@/stores/system";

import {
  getDate,
  getMonthlySubscriptionEndDate,
  getYearlySubscriptionEndDate,
  getFormattedDate,
} from "@/composables/useFormatDate";

import Navbar from "@/components/Navigations/Navbar.vue";
import Sidebar from "@/components/Navigations/SidebarSetting.vue";
import MobileSidebar from "@/components/Navigations/SettingsMobileSidebar.vue";
import Button from "@/components/Button.vue";

const useSystemStore = systemStore();
</script>

<template>
  <section class="h-[calc(100vh_-_68px)] overflow-hidden">
    <div class="h-full overflow-hidden">
      <MobileSidebar class="block md:hidden" />
      <div class="h-full flex">
        <Sidebar class="hidden md:block" />
        <div class="h-full w-full">
          <div class="overflow-y-auto h-full px-12">
            <div
              class="max-w-xl mx-auto mt-10 bg-white shadow-xl border rounded-2xl py-10 px-10"
            >
              <div class="">
                <h2 class="text-2xl mb-5">Subscription</h2>
                <div class="bg-canvas-color p-6 rounded-2xl">
                  <div class="flex items-center justify-between">
                    <div class="">
                      <h1 class="text-xl font-medium capitalize">
                        {{ useSystemStore.userFullData.subscriptionData.plan }}
                        Plan
                      </h1>
                      <p class="text-base">
                        {{
                          useSystemStore.useSystemStore.userFullData
                            .subscriptionData.signaturePackage
                        }}
                        Signatures
                      </p>
                    </div>
                    <div class="">
                      <div class="">
                        <span class="text-xl"
                          >${{
                            useSystemStore.userFullData.subscriptionData.price
                          }}</span
                        >
                        <span class=""
                          >paid
                          {{
                            useSystemStore.userFullData.subscriptionData
                              .billingCycle
                          }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <!--  -->
                  <div class="">
                    <div class="text-base">
                      <span class="">Start Date: </span>
                      <span>{{
                        getFormattedDate(
                          useSystemStore.userFullData.subscriptionData.transactionDate.toDate()
                        )
                      }}</span>
                    </div>
                    <div class="text-base">
                      <span class="">Expiry Date: </span>
                      <span>{{
                        getFormattedDate(
                          useSystemStore.userFullData.subscriptionData.subscriptionEndDate.toDate()
                        )
                      }}</span>
                    </div>
                  </div>
                  <div class="mt-3">
                    <RouterLink to="/pricing" class="mr-2">
                      <Button text="Upgrade Plan" />
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
