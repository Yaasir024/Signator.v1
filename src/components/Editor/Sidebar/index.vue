<script setup>
import Menu from "@/components/Editor/Sidebar/Menu.vue";
import Section from "@/components/Editor/Sidebar/Section/index.vue"
import ImageModal from "@/components/Editor/Sidebar/ImageModal.vue";
import GalleryModal from "@/components/Editor/Sidebar/GalleryModal/index.vue";
import Overlay from "@/components/Overlay.vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
</script>

<template>
  <aside class="sidebar static top-0 h-screen">
    <div class="w-[450px] bg-white shadow-xl border-r h-full flex">
      <Menu />
      <Section />
      <GalleryModal />
      <ImageModal v-if="useEditorStore.imageModal"/>
      <Overlay v-if="useEditorStore.imageModal || true"/>
    </div>
  </aside>
</template>
