<script setup>
import { ref, reactive, computed, provide } from "vue";

import { firestoreDb } from "@/services/firebase";

import { authStore } from "@/stores/auth";
import { editorStore } from "@/stores/editor";

import Header from "@/components/Editor/Sidebar/GalleryModal/Header.vue";
import Upload from "@/components/Editor/Sidebar/GalleryModal/Upload.vue";
import Library from "@/components/Editor/Sidebar/GalleryModal/Library.vue";

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

const emits = defineEmits(["close"]);

const currentTab = ref("library");

provide(/* key */ "currentTab", /* value */ currentTab);
</script>

<template>
  <div
    class="fixed top-8 bottom-8 left-8 right-8 lg:left-16 lg:right-16 bg-canvas-color border rounded-md overflow-hidden shadow-xl z-[80]"
  >
    <Header @close="$emit('close')" />
    <Upload v-if="currentTab == 'upload'" />
    <Library
      :galleryImages="galleryImages"
      v-if="currentTab == 'library'"
      @close="$emit('close')"
    />
  </div>
</template>
