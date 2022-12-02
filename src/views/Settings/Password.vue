<script setup>
import { ref, computed } from "vue";
import Navbar from "@/components/Navigations/Navbar.vue";
import Sidebar from "@/components/SidebarSetting.vue";
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
const useAuth = authStore();
const useSystemStore = systemStore();

const form = ref({ password: "", repeatPassword: "" });
const submitForm = () => {
  if (form.value.password != form.value.repeatPassword) {
    console.log("Password Do not match");
  } else {
    useSystemStore.loadingState = true;
    useAuth.updateUserPassword(form.value.password);
    form.value.password = "";
    form.value.repeatPassword = "";
  }
  console.log("Submitted");
};
</script>

<template>
  <section class="h-screen overflow-hidden">
    <Navbar />
    <div class="h-full overflow-hidden">
      <div class="h-full flex">
        <Sidebar />
        <div class="h-full w-full">
          <div class="overflow-y-auto h-full px-12">
            <div
              class="max-w-xl mx-auto my-8 bg-white shadow-xl border rounded-2xl py-10 px-10"
            >
              <div class="">
                <h2 class="text-2xl mb-8">Change Password</h2>
                <form @submit.prevent="submitForm">
                  <div class="field mb-4">
                    <div class="mb-1">New Password</div>
                    <input
                      type="password"
                      placeholder="New Password"
                      class="w-full h-10 bg-white text-lg border rounded-lg px-4 outline-none focus:border-primary-color"
                      required
                      v-model="form.password"
                    />
                  </div>
                  <div class="field mb-8">
                    <div class="mb-1">Confirm New Password</div>
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      class="w-full h-10 bg-white text-lg border rounded-lg px-4 outline-none focus:border-primary-color"
                      required
                      v-model="form.repeatPassword"
                    />
                  </div>
                  <div class="flex items-center justify-end">
                    <button
                      type="submit"
                      class="py-2 px-3 bg-primary-color text-white rounded-3xl"
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
