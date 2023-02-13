<script setup>
import { ref, reactive, computed, inject } from "vue";
import Menu from "@/components/Editor/Sidebar/Menu.vue";
import Section from "@/components/Editor/Sidebar/Section/index.vue"

import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
</script>

<template>
  <aside class="sidebar static top-0 h-screen">
    <div class="w-[450px] bg-white shadow-xl border-r h-full flex">
      <Menu />
      <Section />
      
    </div>
  </aside>
</template>
