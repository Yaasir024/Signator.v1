<script setup>
import { ref, reactive, computed, inject } from "vue";

import Gmail from "@/components/PreviewSidePanel/Main/Gmail.vue";
import Outlook from "@/components/PreviewSidePanel/Main/Outlook.vue";
import Yahoo from "@/components/PreviewSidePanel/Main/Yahoo.vue";
import AppleMail from "@/components/PreviewSidePanel/Main/AppleMail.vue";

const currentTab = inject("currentTab");

const copyToClipboard = () => {
  console.log("Copy to Clipboard");
};
</script>

<template>
  <div class="w-full h-full flex flex-col p-1">
    <div class="w-[85%] mx-auto">
      <Gmail v-if="currentTab == 'gmail'" />
      <Outlook v-if="currentTab == 'outlook'" />
      <Yahoo v-if="currentTab == 'yahoo'" />
      <AppleMail v-if="currentTab == 'apple'" />
    </div>

  </div>
</template>

<style scoped>
.item {
  padding-left: 15px;
  counter-increment: item;
  position: relative;
  line-height: 22.8px;
}
.item strong {
  font-weight: 600;
}
.item::before {
  position: absolute;
  left: 0;
  width: 12px;
  content: counter(item) ".";
}
</style>
