<script setup>
import { ref, reactive, computed, inject } from "vue";
import { useRouter } from "vue-router";

import { editorStore } from "@/stores/editor";

import { useClickOutside } from "@/composables/useClickOutside";

import Preview from "@/components/SignaturePreviewComponent.vue";
import SidePanel from "@/components/PreviewSidePanel/index.vue";
import Overlay from "@/components/Overlay.vue";

const router = useRouter();

const useEditorStore = editorStore();


const props = defineProps(["data"]);

const backToEditor = () => {
    useEditorStore.data = props.data;
  router.push({ path: "/editor" });
}


const addModal = ref(null)
const addToMailPanel = ref(false)
useClickOutside(addModal, () => {
    addToMailPanel.value = false;
});
</script>

<template>
  <div class="w-full pl-6">
    <div class="h-full pt-4">
      <div class="card bg-white shadow-lg border rounded-lg mb-5 px-4">
        <div class="heading pt-3 pb-2 px-2 border-b">
          <h1 class="text-lg font-medium">{{ data.title }}</h1>
        </div>
        <div class="w-full h-full flex flex-col py-7 px-6 overflow-hidden">
          <div ref="source">
            <Preview :data="data" />
          </div>
        </div>
      </div>
      <div class="footer mt-4 px-3 flex items-center justify-between">
        <div class="text-base font-medium cursor-pointer" @click="backToEditor()">Back to Editor</div>
        <div class="" ref="addModal">
          <button class="bg-primary-color text-white text-base px-4 py-1 rounded-lg" @click="addToMailPanel = true">
            Add to mail
          </button>
          <transition name="panel">

              <SidePanel v-if="addToMailPanel" @close="addToMailPanel = false"/>
              
          </transition>
        </div>
      </div>
    </div>
  </div>
  <Overlay v-if="addToMailPanel" />
</template>


<style scoped>
.panel-enter-active,
.panel-leave-active {
  transition: 0.32s ease all;
}
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}
</style>
