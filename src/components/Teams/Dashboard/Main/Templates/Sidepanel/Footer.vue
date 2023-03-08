<script setup>
import { ref, reactive, onMounted, computed } from "vue";


import { templateStore } from "@/stores/teams/dashboard/templates";

const useTemplates = templateStore();

const cancel = () => {
  useTemplates.showSidePanel = false;
};

</script>

<template>
    <div
        class="h-[64px] border-t flex items-center justify-between px-6 shrink-0"
      >
        <button class="text-base py-1.5 px-4 text-red-600" @click="cancel()">
          Cancel
        </button>
        <button
          class="text-base py-1.5 px-4 text-white bg-primary-color"
          @click="useTemplates.saveTemplate()"
        >
          Save Changes
        </button>
      </div>
</template>