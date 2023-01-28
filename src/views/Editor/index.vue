<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { provide } from "vue";
import { editorStore } from "@/stores/editor";
import { systemStore } from "@/stores/system";

import ImageModal from "@/components/Editor/Sidebar/ImageModal.vue";
import GalleryModal from "@/components/Editor/Sidebar/GalleryModal/index.vue";
import Overlay from "@/components/Overlay.vue";
import Sidebar from "@/components/Editor/Sidebar/index.vue";
import Main from "@/components/Editor/Main/index.vue";
import MobileView from "@/components/Editor/MobileView/index.vue";
import TemplateSection from "@/components/Templates/v1.vue";

const useEditorStore = editorStore();
const useSystemStore = systemStore();
provide(/* key */ "data", /* value */ useEditorStore.data);

const showTemplatesSection = ref(false);

onMounted(() => {
  if (Object.keys(useEditorStore.data).length == 0) {
    useEditorStore.showTemplatesSection = true;
  }
});

const showEditor = computed(() => {
  if (
    Object.keys(useEditorStore.data).length == 0 &&
    Object.keys(useSystemStore.userFullData).length == 0
  ) {
    return false;
  } else {
    return true;
  }
});

/*
Check Screen Size
*/
const mobile = ref(false);
const checkScreen = () => {
  if (window.innerWidth <= 1020) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
};
onMounted(() => {
  window.addEventListener("resize", checkScreen);
});
</script>

<template>
  <div class="" v-if="showEditor">
    <div class="h-screen bg-canvas-color overflow-hidden" v-if="!mobile">
      <section class="h-full w-full flex">
        <Sidebar />
        <Main />
      </section>
    </div>
    <div class="overflow-y-auto" v-if="mobile">
      <MobileView />
    </div>
  </div>

  <transition name="galleryModal">
    <GalleryModal
      v-if="useEditorStore.galleryModal"
    />
  </transition>
  <ImageModal v-if="useEditorStore.imageModal || false" />
  <Overlay v-if="useEditorStore.imageModal || useEditorStore.galleryModal" />
  <transition name="templates">
    <TemplateSection v-if="!showEditor" />
  </transition>
</template>

<style scoped>
.galleryModal-enter-active,
.galleryModal-leave-active {
  transition: 0.32s ease all;
}
.galleryModal-enter-from,
.galleryModal-leave-to {
  opacity: 0;
}
.templates-enter-active,
.templates-leave-active {
  transition: 0.32s ease all;
}
.templates-enter-from,
.templates-leave-to {
  transform: translateY(-100%);
}
</style>
