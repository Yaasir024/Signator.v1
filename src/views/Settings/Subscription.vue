<script setup>
import { systemStore } from "@/stores/system";

import {
  getDate,
  getMonthlySubscriptionEndDate,
  getYearlySubscriptionEndDate,
  getFormattedDate,
} from "@/composables/useFormatDate";


import SettingsLayout from "@/components/Layout/Settings.vue";
import Sidebar from "@/components/Navigations/SidebarSetting.vue";
import MobileSidebar from "@/components/Navigations/SettingsMobileSidebar.vue";
import Button from "@/components/Button.vue";

const useSystemStore = systemStore();
</script>

<template>
  <SettingsLayout>
    <div
      class="max-w-xl mx-auto mt-10 bg-white shadow-xl border rounded-2xl py-10 px-10"
    >
      <div class="">
        <h2 class="text-2xl mb-5">Subscription</h2>
        <div class="bg-canvas-color p-6 rounded-2xl">
          <div class="flex items-center justify-between">
            <div class="">
              <h1 class="text-xl font-medium capitalize">
                {{ useSystemStore.userData.data.subscriptionData.plan }}
                Plan
              </h1>
              <p class="text-base">
                {{
                  useSystemStore.userData.data.subscriptionData.signaturePackage
                }}
                Signatures
              </p>
            </div>
            <div class="">
              <div class="">
                <span class="text-xl"
                  >${{
                    useSystemStore.userData.data.subscriptionData.price
                  }}</span
                >
                <span class=""
                  >paid
                  {{
                    useSystemStore.userData.data.subscriptionData.billingCycle
                  }}</span
                >
              </div>
            </div>
          </div>

          <!--  -->
          <div
            class=""
            v-if="useSystemStore.userData.data.subscriptionData.plan != 'free'"
          >
            <div class="text-base">
              <span class="">Start Date: </span>
              <span>{{
                getFormattedDate(
                  useSystemStore.userData.data.subscriptionData.transactionDate.toDate()
                )
              }}</span>
            </div>
            <div class="text-base">
              <span class="">Expiry Date: </span>
              <span>{{
                getFormattedDate(
                  useSystemStore.userData.data.subscriptionData.subscriptionEndDate.toDate()
                )
              }}</span>
            </div>
          </div>
          <div
            class="mt-3"
            v-if="useSystemStore.userData.data.subscriptionData.plan != 'pro'"
          >
            <RouterLink to="/pricing" class="mr-2">
              <Button text="Upgrade Plan" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </SettingsLayout>
</template>
