<script setup>
import { inject } from 'vue'

const emits = defineEmits(["close"]);

const currentTab = inject('currentTab')
</script>

<template>
    <div class="header px-8 bg-white border-b">
      <div class="flex items-center justify-between pt-4 pb-2">
        <div class="text-xl font-medium">Image Gallery</div>
        <button @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="pt-1">
        <div class="flex items-center text-base">
          <button
            class="px-4 py-2 border-2 border-b-0"
            @click="currentTab = 'library'"
            :class="currentTab == 'library' ? 'bg-canvas-color mb-[-1px]' : ''"
          >
            Media Library
          </button>
          <button
            class="px-4 py-2 border-2 border-b-0"
            @click="currentTab = 'upload'"
            :class="currentTab == 'upload' ? 'bg-canvas-color mb-[-1px]' : ''"
          >
            Upload Media
          </button>
        </div>
      </div>
    </div>
</template>