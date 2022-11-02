<script setup>
import { dashboardStore } from "@/stores/dashboard";
const useDashboard = dashboardStore();
const emit = defineEmits(["closeDeleteModal"]);
const props = defineProps(["id"]);
const deleteSig = () => {
    useDashboard.deleteSignature(props.id)
    emit('closeDeleteModal')
}
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
        <div class="text-lg">Confirm Delete</div>
      </div>
      <div
        class="hover:text-gray-200 cursor-pointer"
        @click="$emit('closeDeleteModal')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
          />
        </svg>
      </div>
    </div>
    <div class="py-8 px-4 text-base">
      Are you sure you want to delete this? This Action can't be undone.!
    </div>
    <div class="flex items-center justify-between pb-3 px-4 text-lg">
      <button
        class="py-1 px-8 border-2 border-[#6c757d] rounded-md"
        @click="$emit('closeDeleteModal')"
      >
        No
      </button>
      <button
        class="bg-[#ff6b6b] text-white py-1 px-8 border border-[#ff6b6b] rounded-md"
        @click="deleteSig()"
      >
        Yes
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}
</style>
