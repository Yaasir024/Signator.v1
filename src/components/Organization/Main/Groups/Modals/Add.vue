<script setup>
import { groupsStore } from "@/stores/Organization/groups";

const useGroupStore = groupsStore();
</script>
<template>
  <div
    class="modal fixed max-w-[400px] w-full bg-white shadow-lg rounded-t-lg z-50"
  >
    <div class="header border-b py-3 px-4 flex items-center justify-between">
      <div class="flex items-center">
        <div class="text-lg capitalize">
          {{ useGroupStore.editModalType }} Group
        </div>
      </div>
    </div>
    <div class="py-8 px-4 text-base">
      <div class="flex items-center">
        <label class="mr-2 text-lg shrink-0">Group Name:</label>
        <input
          type="text"
          v-model="useGroupStore.selectedGroup.name"
          class="border-b outline-none border-black px-0.5 py-1 w-full"
        />
      </div>
      <div class="flex mt-4">
        <div class="mr-2 text-lg shrink-0">Group Template:</div>
        <div class="flex flex-wrap">
          <span class="block text-base flex-50%" v-for="template in useGroupStore.allTemplates" :key="template.id">
            <input
              type="radio"
              :id="template.id"
              :value="template.name"
              v-model="useGroupStore.selectedGroup.template"
              class="mr-1"
            />
            <label :for="template.id">{{ template.name }}</label>
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between pb-3 px-4 text-lg">
      <button
        class="py-1 px-8 border-2 border-[#6c757d] rounded-md"
        @click="useGroupStore.showEditModal = false"
      >
        Cancel
      </button>
      <button
        class="bg-primary-color text-white py-1 px-8 border border-primary-color rounded-md"
        @click="useGroupStore.saveGroup()"
      >
        Save
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
