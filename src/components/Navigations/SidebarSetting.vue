<script setup>
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
const useAuth = authStore();
const useSystemStore = systemStore();
</script>


<template>
  <div class="static top-0 h-screen">
    <div class="bg-white shadow-xl border-r h-full w-[220px] border-t">
      <div class="">
        <div class="flex flex-col items-center max-w-[220px] px-7 py-6 mb-2" v-if="useAuth.userData">
          <div class="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"
              />
            </svg>
          </div>
          <div class="">{{useAuth.userData.displayName}}</div>
          <div class="">{{ useAuth.userData.email }}</div>
        </div>
        <div class="h-full">
          <ul class="px-4 flex flex-col text-base">
            <RouterLink to="/profile/account">
              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
              >
                Profile
              </li>
            </RouterLink>
            <RouterLink to="/profile/subscription">

              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
              >
                Subscription
              </li>
            </RouterLink>

            <RouterLink to="/profile/billing-history">
              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
              >
                Billing History
              </li>
            </RouterLink>
            <RouterLink to="/profile/payment-method">
              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color border-b"
              >
                Payment Method
              </li>
            </RouterLink>
            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
