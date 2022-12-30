<script setup>
import { ref, reactive, computed, inject } from "vue";

import { editorStore } from "@/stores/editor";

import Gmail from "@/components/PreviewSidePanel/Main/Gmail.vue";
import Outlook from "@/components/PreviewSidePanel/Main/Outlook.vue";
import Yahoo from "@/components/PreviewSidePanel/Main/Yahoo.vue";
import AppleMail from "@/components/PreviewSidePanel/Main/AppleMail.vue";
import Html from "@/components/PreviewSidePanel/Main/Html.vue";

import Preview from "@/components/SignaturePreviewComponent.vue";

const useEditorStore = editorStore();

const currentTab = inject("currentTab");



const signatureOutputCopy = () => {
  useEditorStore.copySignature(document.getElementById("signature"))
}
const signatureCodeCopy = () => {
  useEditorStore.copySignatureCode(document.getElementById("signature").innerHTML)
}
</script>

<template>
  <div class="w-full h-full flex flex-col p-1">
    <div class="w-[85%] mx-auto">
      <Gmail v-if="currentTab == 'gmail'" @copy="signatureOutputCopy()" />
      <Outlook v-if="currentTab == 'outlook'" @copy="signatureOutputCopy()" />
      <Yahoo v-if="currentTab == 'yahoo'" @copy="signatureOutputCopy()" />
      <AppleMail v-if="currentTab == 'apple'" @copy="signatureOutputCopy()" />
      <Html v-if="currentTab == 'html'" @copy="signatureCodeCopy()" />
    </div>
  </div>

  <div id="signature" ref="source" v-if="false">
    <Preview :data="useEditorStore.signaturePreviewData" />
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
