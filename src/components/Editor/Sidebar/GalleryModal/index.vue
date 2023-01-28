<script setup>
import { ref, reactive, computed, provide } from "vue";

import { firestoreDb } from "@/services/firebase";

import { authStore } from "@/stores/auth";
import { editorStore } from "@/stores/editor";

import Header from "@/components/Editor/Sidebar/GalleryModal/Header.vue";
import Upload from "@/components/Editor/Sidebar/GalleryModal/Upload.vue";
import Library from "@/components/Editor/Sidebar/GalleryModal/Library.vue";
import ImageModal from "@/components/Editor/Sidebar/ImageModal.vue";

import { doc, onSnapshot } from "firebase/firestore";

const useAuth = authStore();
const useEditorStore = editorStore();

const galleryImages = ref([]);
onSnapshot(
  doc(firestoreDb, "users", useAuth.userId.uid, "data", "gallery"),
  (snapshot) => {
    galleryImages.value = snapshot.data().images;
  }
);

</script>

<template>
  <div
    class="fixed top-8 bottom-8 left-2 right-2 sm:left-8 sm:right-8 lg:left-16 lg:right-16 bg-canvas-color border rounded-md overflow-hidden shadow-xl z-[80]"
  >
    <Header />
    <Upload v-if="useEditorStore.currentImageGalleryTab == 'upload'" />
    <Library
      v-if="useEditorStore.currentImageGalleryTab == 'library'"
    />
  </div>
  <!-- <ImageModal /> -->
</template>
