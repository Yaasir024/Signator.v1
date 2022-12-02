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

const data = inject("data");
</script>

<template>
  <main>
    <div class="sticky top-0">
      <Header />
    </div>
    <div class="px-6">
      <Preview :data="data" />
      <Tools />
    </div>
  </main>
</template>
