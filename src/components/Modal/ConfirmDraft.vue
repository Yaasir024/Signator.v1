<script setup>
import { dashboardStore } from "@/stores/dashboard";
const useDashboard = dashboardStore();
const emit = defineEmits(["deleteDraft", "editDraft"]);
</script>
<template>
  <div class="modal fixed max-w-[400px] w-full bg-white shadow-lg z-50">
    <div
      class="header bg-[#ff6b6b] py-3 px-4 flex items-center justify-between text-white"
    >
      <div class="flex items-center">
        <div class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
            />
          </svg>
        </div>
        <div class="text-lg">Alert</div>
      </div>
    </div>
    <div class="py-8 px-4 text-base text-center">
      You currently have 1 signature in drafts. Would you like to edit or delete permanently?
    </div>
    <div class="flex items-center justify-between pb-3 px-4 text-lg">
        <button
        class="bg-[#ff6b6b] text-white py-1 px-8 border border-[#ff6b6b] rounded-md"
        @click="$emit('deleteDraft')"
      >
        Delete
      </button>
      <button
        class="py-1 px-8 border-2 border-green-500 rounded-md"
        @click="$emit('editDraft')"
      >
        Edit
      </button>
      
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}
</style>
