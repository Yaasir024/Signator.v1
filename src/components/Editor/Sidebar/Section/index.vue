<script setup>
import { ref, reactive, computed, inject } from "vue";
import General from "@/components/Editor/Sidebar/Section/General.vue";
import Social from "@/components/Editor/Sidebar/Section/Social.vue";
import Addons from "@/components/Editor/Sidebar/Section/Addon/index.vue";
import Design from "@/components/Editor/Sidebar/Section/Design.vue";
import Layout from "@/components/Editor/Sidebar/Section/Layout.vue";
import Addon from "@/components/Editor/Sidebar/Section/Addon/index.vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
</script>

<template>
  <div class="editor-tools h-full w-full">
    <div class="content px-4 pt-6 pb-14 h-full overflow-y-auto">
      <General v-if="useEditorStore.currentEditorNav === 'general'" />
      <Social v-if="useEditorStore.currentEditorNav === 'social'" />
      <Addon v-if="useEditorStore.currentEditorNav === 'addons'" />
      <Design v-if="useEditorStore.currentEditorNav === 'design'" />
      <Layout v-if="useEditorStore.currentEditorNav === 'layout'" />
    </div>
  </div>
</template>

<style scoped>
.content::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
}

.content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background: #F5F5F5; 
}

.content::-webkit-scrollbar-thumb {
  background-color: darkgrey;    /* color of the scroll thumb */
  /* border: 1px solid slategray;  creates padding around scroll thumb */
}
</style>