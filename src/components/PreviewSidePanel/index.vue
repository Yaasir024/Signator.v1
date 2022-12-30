<script setup>
import { ref, reactive, computed, provide } from "vue";

import Sidebar from "@/components/PreviewSidePanel/Sidebar.vue";
import Main from "@/components/PreviewSidePanel/Main/index.vue";


const currentTab = ref("gmail");
provide(/* key */ "currentTab", /* value */ currentTab);

const emits = defineEmits(['close'])



</script>

<template>
  <div
    class="fixed top-0 right-0 h-screen z-50 bg-white max-w-[860px] w-full shadow-xl border-l"
  >
    <div class="h-[60px] flex items-center justify-between border-b px-6">
      <div class="text-xl font-medium">Add signature to email</div>
      <div class="cursor-pointer"
          @click="$emit('close')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
          />
        </svg>
      </div>
    </div>
    <div class="flex h-full">
        <Sidebar />
        <Main />
    </div>
  </div>
</template>
