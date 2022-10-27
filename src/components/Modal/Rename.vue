<script setup>
import { dashboardStore } from "@/stores/dashboard";
const useDashboard = dashboardStore();
const emit = defineEmits(["closeRenameModal"]);
const props = defineProps(["title", "id"]);
const rename = () => {
    // console.log('Rename', props.title)
    useDashboard.renameSignature(props.id, props.title)
    emit('closeRenameModal')
}
</script>

<template>
  <div
    class="modal fixed top-0 max-w-[350px] w-full text-center bg-white shadow-xl rounded-xl z-50"
  >
    <div class="header py-4 text-lg">
      Rename Signature
    </div>
    <div class="text-center px-6 pb-8">
      <input
        type="text"
        v-model="title"
        class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
      />
    </div>
    <div class="flex items-center justify-between pb-3 px-4 text-lg">
      <button
        class="py-1 px-6 border-2 border-[#6c757d] rounded-md"
        @click="$emit('closeRenameModal')"
      >
        Cancel
      </button>
      <button
        class="bg-primary-color text-white py-1 px-8 border border-primary-color rounded-md"
        @click="rename()"
      >
        Rename
      </button>
    </div>
  </div>
</template>

<style>
.modal {
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%) !important;
}
</style>
