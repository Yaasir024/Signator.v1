<script setup>
import { ref, computed } from "vue";
import SettingsLayout from "@/components/Layout/Settings.vue";
import Sidebar from "@/components/Navigations/SidebarSetting.vue";
import MobileSidebar from "@/components/Navigations/SettingsMobileSidebar.vue";
import Overlay from "@/components/Overlay.vue";
import PasswordModal from "@/components/Settings/PasswordModal.vue";
import NameModal from "@/components/Settings/NameModal.vue";
import { authStore } from "@/stores/auth";
const useAuth = authStore();

const passwordModal = ref(false);
const nameModal = ref(false);

const deleteAccount = () => {
  console.log("Delete Accpunt");
};
</script>

<template>
  <SettingsLayout>
    <div class="text-base">
      <div class="py-6 text-center">
        <h1 class="text-4xl font-semibold">Profile</h1>
        <p class="">View and Update your account details and profiles.</p>
      </div>
      <div
        class="max-w-3xl mx-auto w-full bg-white shadow-xl border rounded-2xl py-10 px-10"
      >
        <div class="text-lg font-medium mb-4">
          <h2>Basic Information</h2>
        </div>
        <div class="">
          <div class="flex items-center py-3 border-b-2">
            <div class="w-[160px]">Email</div>
            <div class="w-full" v-if="useAuth.userData.email">
              {{ useAuth.userData.email }}
            </div>
            <div class=""></div>
          </div>
          <div class="flex items-center py-3 border-b-2">
            <div class="w-[160px]">Name</div>
            <div class="w-full">
              {{ useAuth.userData.displayName }}
            </div>
            <div class="">
              <button class="cursor-pointer" @click="nameModal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center py-4 border-b-2">
            <div class="w-[160px]">Password</div>
            <div class="w-full text-base">••••••••</div>
            <div class="">
              <button class="cursor-pointer" @click="passwordModal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="max-w-3xl mx-auto mt-10 w-full bg-white shadow-xl border rounded-2xl py-5 px-10"
        v-if="false"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-7 7.586l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm2-10.586h-4v1h4v-1z"
                />
              </svg>
            </div>
            <div class="ml-2">Delete Your Account and Data</div>
          </div>
          <button
            class="bg-[#ff6b6b] text-white py-1 px-3 rounded-xl"
            @click="deleteAccount()"
          >
            Delete My Account
          </button>
        </div>
      </div>
      <div class="">
        <transition name="fade">
          <PasswordModal
            @close-password-modal="passwordModal = false"
            v-if="passwordModal"
          />
        </transition>
        <transition name="fade">
          <NameModal @close-name-modal="nameModal = false" v-if="nameModal" />
        </transition>
        <transition name="fade">
          <Overlay v-if="passwordModal || nameModal" />
        </transition>
      </div>
    </div>
  </SettingsLayout>
</template>

<style scoped>
.fade-enter-active {
  transition: 0.3s ease all;
}
.fade-leave-active {
  transition: 0.4s ease all;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modalPopup-enter-active,
.modalPopup-leave-active {
  transition: all 0.3s ease;
}
.modalPopup-enter-from,
.modalPopup-leave-to {
  transform: scale(0.2);
  transform-origin: top;
}
</style>
