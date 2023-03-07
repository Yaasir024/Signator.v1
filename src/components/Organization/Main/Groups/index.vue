<script setup>
import { ref, onMounted, computed } from "vue";

import { uid } from "@/composables/useGenerateUid";

import { groupsStore } from "@/stores/Organization/groups";

import Table from "@/components/Organization/Main/Groups/Table.vue";
import Add from "@/components/Organization/Main/Groups/Modals/Add.vue";
import Delete from "@/components/Organization/Main/Groups/Modals/Delete.vue";

import Overlay from "@/components/Overlay.vue";

const useGroupStore = groupsStore();

const addNewGroup = () => {
  let data = {
    id: uid(6),
    name: "",
    template: "",
  };
  useGroupStore.openEditModal(data, "add");
};
</script>

<template>
  <div class="pt-10 px-8">
    <div class="flex items-center justify-between px-4 mb-16">
      <h1 class="text-3xl font-medium">Manage Groups</h1>
      <div class="">
        <button
          class="text-lg text-white bg-primary-color py-1.5 px-4"
          @click="addNewGroup()"
        >
          Add Group
        </button>
      </div>
    </div>
    <div class="">
      <Table />
    </div>
    <div class="">
      <Add v-if="useGroupStore.showEditModal" />
      <transition name="modal">
        <Delete v-if="useGroupStore.showDeleteModal" />
      </transition>
      <Overlay
        v-if="useGroupStore.showDeleteModal || useGroupStore.showEditModal"
      />
    </div>
  </div>
</template>

<!-- <style scoped>
/* Menu Animation */
.modal-enter-active,
.modal-leave-active {
  transition: transform 0.3s ease;
  /* transform-origin: top right; */
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(100);
}
</style> -->
