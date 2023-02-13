<script setup>
import { ref, reactive, computed, onMounted, inject } from "vue";

import { editorStore } from "@/stores/editor";
import { systemStore } from "@/stores/system";

import Sidebar from "@/components/Editor/Sidebar/index.vue";
import Header from "@/components/Editor/Main/Header.vue";
import Preview from "@/components/Editor/MobileView/Preview.vue";
import Tools from "@/components/Editor/MobileView/Tools/Index.vue";

const useEditorStore = editorStore();
const useSystemStore = systemStore();

// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});
</script>

<template>
  <main>
    <div class="fixed top-0 w-full z-20">
      <Header />
    </div>
    <div class="mt-24 px-6">
      <Preview :data="data" />
      <Tools />
    </div>
  </main>
</template>
