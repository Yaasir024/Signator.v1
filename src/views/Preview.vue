<script setup>
import { ref, reactive, onBeforeMount, provide } from "vue";
import { useRoute } from "vue-router";

import Navbar from "@/components/Navbar.vue";
import Tabs from "@/components/PreviewPage/Tabs/index.vue";
import Main from "@/components/PreviewPage/Main/index.vue";
import { firestoreDb } from "@/services/firebase";
import { editorStore } from "@/stores/editor";

const route = useRoute();
const path = route.params.id;
const useEditorStore = editorStore();
const currentTab = ref("gmail");
provide(/* key */ "currentTab", /* value */ currentTab);

const previewData = ref(null);

onBeforeMount(() => {
  useEditorStore.getSingleSignature(path);
});
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main
      class="max-w-[1200px] mx-auto py-24 px-5"
      v-if="useEditorStore.signaturePreviewData != null"
    >
      <div class="min-h-[50px] flex">
        <Tabs />
        <Main :data="useEditorStore.signaturePreviewData" />
      </div>
    </main>
  </div>
</template>
