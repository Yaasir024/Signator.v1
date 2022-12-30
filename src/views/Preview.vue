<script setup>
import { ref, reactive, onBeforeMount, provide } from "vue";
import { useRoute } from "vue-router";

import { firestoreDb } from "@/services/firebase";
import { editorStore } from "@/stores/editor";

import Navbar from "@/components/Navigations/Navbar.vue";
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

const copy = async () => {
  console.log("copy");
  const content = document.getElementById("exampleContent").innerHTML;
  // const blob = new Blob([content], { type: "text/html" });
  // const richTextInput = new ClipboardItem({ "text/html": blob });
  // await navigator.clipboard.write([richTextInput]);
  // console.log('done')
  navigator.clipboard.writeText(content);
};
// id="exampleContent"
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main
      class="max-w-[700px] mx-auto py-24 px-5"
      v-if="useEditorStore.signaturePreviewData != null"
    >
      <div class="min-h-[50px] flex">
        <SignaturePreview :data="useEditorStore.signaturePreviewData" />
      </div>
    </main>
  </div>
</template>
