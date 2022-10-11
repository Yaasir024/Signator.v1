<script setup>
import { ref, reactive, computed } from "vue";
import { useDebouncedRefHistory, useStorage } from "@vueuse/core";
import { inject } from "vue";
const data = inject("data");


// To be Fixed
// const { history, undo, redo } = useDebouncedRefHistory(data, {
//   deep: true,
//   capacity: 15,
//   debounce: 2000,
// });
</script>

<template>
  <div
    class="h-[50px] w-full bg-white shadow-lg border-b flex items-center justify-between px-6"
  >
    <RouterLink to="/">
      <div class="home flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="16"
          height="16"
        >
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
        <span class="ml-2 text-lg">Go Home</span>
      </div>
    </RouterLink>
    <div class="controls flex items-center">
      <div class="undo cursor-pointer" title="Undo" @click="undo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"
          />
        </svg>
      </div>
      <div class="redo ml-2 cursor-pointer" title="Redo" @click="redo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c3.31 0 6.291 1.353 8.459 3.522l2.48-2.48 1.061 7.341-7.437-.966 2.489-2.489c-1.808-1.807-4.299-2.928-7.052-2.928-5.514 0-10 4.486-10 10s4.486 10 10 10c3.872 0 7.229-2.216 8.89-5.443l1.717 1.046c-2.012 3.803-6.005 6.397-10.607 6.397-6.627 0-12-5.373-12-12s5.373-12 12-12z"
          />
        </svg>
      </div>
    </div>
    <div class="">
      <button
        class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
      >
        Save Signature
      </button>
    </div>
  </div>
</template>
