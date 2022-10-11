<script setup>
import { provide } from "vue";
import { editorStore } from "@/stores/editor";

import Sidebar from "@/components/Editor/Sidebar/index.vue";
import Main from "@/components/Editor/Main/index.vue";

const useEditorStore = editorStore();
provide(/* key */ "data", /* value */ useEditorStore.data);
</script>

<template>
  <div class="h-screen bg-canvas-color overflow-hidden">
    <section class="h-full w-full flex">
      <Sidebar />
      <Main />
    </section>
  </div>
</template>
