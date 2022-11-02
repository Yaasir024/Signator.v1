<script setup>
import { ref, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/SidebarSetting.vue";
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
const useAuth = authStore();
const useSystemStore = systemStore();

const emit = defineEmits(["closeNameModal"]);

const newName = ref("");

const form = ref({ password: "", repeatPassword: "" });
const submitForm = () => {
  useAuth.updateUserName(newName.value);
  emit("closeNameModal");
};
const reset = () => {
    console.log(reset)
    useAuth.resetPassword('yope4ever@gmail.com')
}
</script>

<template>
  <div
    class="modal fixed max-w-xl w-full bg-white border rounded-2xl shadow-xl z-50 py-10 px-10"
  >
    <div class="relative">
      <h2 class="text-2xl mb-4" @click="reset()">Change Name</h2>
      <div
        class="absolute top-0 right-0 hover:scale-105 cursor-pointer"
        @click="$emit('closeNameModal')"
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
      <form @submit.prevent="submitForm">
        <div class="field mb-4">
          <div class="mb-1">New Name</div>
          <input
            type="text"
            placeholder="New Name"
            class="w-full h-10 bg-white text-lg border rounded-lg px-4 outline-none focus:border-primary-color"
            required
            v-model="newName"
          />
        </div>
        <div class="flex items-center justify-end">
          <button
            type="submit"
            class="py-2 px-3 bg-primary-color text-white rounded-3xl"
          >
            Change Name
          </button>
        </div>
      </form>
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
