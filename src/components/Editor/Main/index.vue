<script setup>
import { ref, reactive, computed, inject } from "vue";
import Header from "@/components/Editor/Main/Header.vue";
import Preview from "@/components/Editor/Main/Preview.vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});
</script>

<template>
  <main class="w-[calc(100%_-_450px)] h-screen flex flex-col">
    <div class="">
      <Header />
      <div class="relative h-[calc(100vh_-_50px)] overflow-hidden px-5">
        <Preview :data="data" />
      </div>
    </div>
  </main>
</template>
