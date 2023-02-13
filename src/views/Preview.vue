<script setup>
import { ref, reactive, onBeforeMount, provide } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";

import { firestoreDb } from "@/services/firebase";
import { editorStore } from "@/stores/editor";

import MainLayout from "@/components/Layout/Main.vue";
import SignaturePreview from "@/components/PreviewSidePanel/SignaturePreview.vue";
import SidePanel from "@/components/PreviewSidePanel/index.vue";

const route = useRoute();
const path = route.params.id;
const useEditorStore = editorStore();
const currentTab = ref("gmail");
provide(/* key */ "currentTab", /* value */ currentTab);

const previewData = ref(null);

onBeforeMount(() => {
  useEditorStore.getSignaturePreview(path);
});
</script>

<template>
  <MainLayout>
    <div class="h-[calc(100vh_-_65px)]">
      <div
        class="max-w-[700px] mx-auto py-24 px-5"
        v-if="useEditorStore.signaturePreviewData != null"
      >
        <div class="min-h-[50px] flex">
          <SignaturePreview :data="useEditorStore.signaturePreviewData" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
