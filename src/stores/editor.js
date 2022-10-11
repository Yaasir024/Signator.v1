import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { defineStore } from "pinia";
import {
  useRefHistory,
  useDebouncedRefHistory,
  useLocalStorage,
  useStorage,
} from "@vueuse/core";

export const editorStore = defineStore("editor", () => {
  const route = useRoute();
  const path = route.params.id;
  const data = useLocalStorage(path, {});
  const currentEditorNav = ref("general");
  const previewImage = ref('')
  const imageModal = ref(false)

  return { data, path, currentEditorNav };
});
