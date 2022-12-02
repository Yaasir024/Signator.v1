<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { provide } from "vue";
import { editorStore } from "@/stores/editor";
import { systemStore } from "@/stores/system";

import Sidebar from "@/components/Editor/Sidebar/index.vue";
import Main from "@/components/Editor/Main/index.vue";
import MobileView from "@/components/Editor/MobileView/index.vue";
import TemplateSection from "@/components/Templates/v1.vue";

const useEditorStore = editorStore();
const useSystemStore = systemStore();
provide(/* key */ "data", /* value */ useEditorStore.data);

const viewportWidth = ref(window.innerWidth);

const showTemplatesSection = ref(false);

onMounted(() => {
  if (Object.keys(useEditorStore.data).length == 0) {
    useEditorStore.showTemplatesSection = true;
  }
});
</script>

<template>
  {{viewportWidth}}
  <div class="" v-if="Object.keys(useEditorStore.data).length != 0">
    <div class="h-screen bg-canvas-color overflow-hidden"  v-if="false">
      <section class="h-full w-full flex">
        <Sidebar />
        <Main />
      </section>
    </div>
    <div class="overflow-y-auto">
      <MobileView />
    </div>
  </div>

  <transition name="templates">
    <TemplateSection v-if="useEditorStore.showTemplatesSection" />
  </transition>
</template>

<style scoped>
.templates-enter-active,
.templates-leave-active {
  transition: 0.32s ease all;
}
.templates-enter-from,
.templates-leave-to {
  transform: translateY(-100%);
}
</style>
