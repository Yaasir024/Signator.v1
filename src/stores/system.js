import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const systemStore = defineStore("system", () => {
  const loadingState = ref(false);

  return { loadingState };
});
