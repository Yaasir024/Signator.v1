<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useClickOutside } from "@/composables/useClickOutside";
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
const useAuth = authStore();
const useSystemStore = systemStore();

const route = useRoute();
const routeName = route.name;

// MOBILE NAV
const showNav = ref(false);
const toggleNav = () => {
  showNav.value = !showNav.value;
};
const closeNavOnRoute = () => {
  showNav.value = false;
};
const mobileNav = ref(null);
useClickOutside(mobileNav, () => {
  showNav.value = false;
});

// Notification Nav
const notificationNav = ref(false);
const toggleNotificationNav = () => {
  notificationNav.value = !notificationNav.value;
};

const notificationMenu = ref(null);
useClickOutside(notificationMenu, () => {
  notificationNav.value = false;
});
// Account Nav
const accountNav = ref(false);
const toggleAccountNav = () => {
  accountNav.value = !accountNav.value;
};

const accountsMenu = ref(null);
useClickOutside(accountsMenu, () => {
  accountNav.value = false;
});

const signOut = () => {
  useSystemStore.loadingState = true;
  closeNavOnRoute();
  accountNav.value = false;
  setTimeout(() => {
    useAuth.logout();
  }, "1000");
};
</script>

<template>
  <nav
    class="bg-white border-b md:border-none py-3 px-6 md:px-[60px] lg:px-[140px] flex items-center justify-between sticky top-0 z-20"
  >
    <RouterLink to="/">
      <img src="/images/logo.svg" alt="" class="h-[40px]" />
    </RouterLink>
    <div class="hidden md:flex items-center">
      <RouterLink
        to="/"
        class="py-2 px-4 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
      >
        Features
      </RouterLink>
      <RouterLink
        to="/pricing"
        class="py-2 px-4 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
      >
        Pricing
      </RouterLink>
      <RouterLink
        to="/templates"
        class="py-2 px-4 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
      >
        Template
      </RouterLink>
    </div>
    <div class="hidden md:flex items-center" v-if="!useAuth.userState">
      <RouterLink to="/login">
        <button
          class="py-2 px-4 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
        >
          Login
        </button>
      </RouterLink>
      <RouterLink to="/signup" class="ml-2">
        <button
          class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
        >
          Create Account
        </button>
      </RouterLink>
    </div>
    <div class="hidden md:flex items-center" v-if="useAuth.userState">
      <RouterLink to="/dashboard" v-if="routeName != 'dashboard'">
        <button
          class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
        >
          Go To Dashboard
        </button>
      </RouterLink>
      <div class="ml-3 relative" ref="notificationMenu">
        <div
          class="px-2 transition-all duration-300 ease-in-out cursor-pointer"
          @click="toggleNotificationNav"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path
              d="M11.5,4 C12.3284271,4 13,4.67157288 13,5.5 L13,6.208 L13.1928659,6.26644975 C15.4021227,6.9794161 17,9.05310592 17,11.5 L17,14.381966 C17,15.0636597 17.5141144,15.4674835 17.7236068,15.5527864 C18.6312256,16.0112457 19,16.8789673 19,17.618034 L19,18 C18.999914,18.5522512 18.5522511,18.9999525 18,19.000086 L13.9499027,19.0004345 L13.9499027,19.0004345 C13.7180997,20.1413382 12.7093254,21 11.5,21 C10.2906746,21 9.28190033,20.1413382 9.05009729,19.0004345 L5,19.000086 C4.44774885,18.9999525 4.00008604,18.5522512 4,18 L4,17.618034 L4,17.618034 C4,16.8017489 4.4304466,16.0508527 5.12384427,15.6363588 C5.70794809,15.3546774 6,14.9365465 6,14.381966 L6,11.5 C6,8.98221115 7.69181046,6.85956581 10.0006454,6.20685 L10,5.5 C10,4.67157288 10.6715729,4 11.5,4 Z M12.9143985,19.000703 L10.0856015,19.000703 C10.2917181,19.5829319 10.8471533,20 11.5,20 C12.1528467,20 12.7082819,19.5829319 12.9143985,19.000703 Z M11.5,5 C11.2238576,5 11,5.22385763 11,5.5 L11.000297,7.02743156 C8.7501788,7.27601865 7,9.18362124 7,11.5 L7,14.381966 C7,15.1982511 6.5695534,15.9491473 5.87615573,16.3636412 L5.7609788,16.4232259 C5.47658468,16.5798721 5,16.9239115 5,17.618034 L5,18 L18,18 L18,17.618034 C18,16.9215546 17.5177307,16.5793152 17.2763932,16.4472136 C16.5953522,16.1302643 16,15.3188477 16,14.381966 L16,11.5 C16,9.18396594 14.2503421,7.2765864 12.0007074,7.02754265 L12,5.5 C12,5.22385763 11.7761424,5 11.5,5 Z"
            ></path>
          </svg>
        </div>
        <transition name="navPopup">
          <div
            class="absolute top-[40px] right-[-120px] z-50 w-[300px] h-[350px] py-4 bg-white rounded-xl shadow-lg border"
            v-if="notificationNav"
          >
            <div class="mb-2 border-b pb-2">
              <div class="text-center font-medium text-lg">Notifications</div>
            </div>
            <div class=""></div>
          </div>
        </transition>
      </div>
      <div class="relative" ref="accountsMenu">
        <div class="cursor-pointer text-gray-400" @click="toggleAccountNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"
            />
          </svg>
        </div>
        <transition name="navPopup">
          <div
            class="absolute top-[40px] right-0 z-50 w-[260px] py-4 bg-white shadow-xl border rounded-xl"
            v-if="accountNav"
          >
            <div class="flex items-center border-b pb-3 px-5">
              <div class="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="font-medium leading-4">Falana Yaasir</p>
                <p class="leading-3">meerat@usai.com</p>
              </div>
            </div>
            <div class="">
              <div class="py-3 px-5">
                <RouterLink to="/settings/account-setting">
                  <div class="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path
                          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
                        />
                      </svg>
                    </div>
                    <div class="ml-2">Account Settings</div>
                  </div>
                </RouterLink>
              </div>
              <div class="py-2 px-5">
                <div
                  class="flex items-center cursor-pointer"
                  @click="signOut()"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z"
                      />
                    </svg>
                  </div>
                  <div class="ml-2">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div
      class="flex md:hidden items-center justify-center cursor-pointer"
      @click="toggleNav"
      ref="mobileNav"
    >
      <svg
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        height="26"
        width="26"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          fill-rule="nonzero"
        />
      </svg>
    </div>
  </nav>

  <!-- Mobile Nav -->
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#ffffff83] backdrop-blur z-30"
    v-if="showNav"
  ></div>
  <transition name="nav">
    <template v-if="showNav" ref="mobileNav">
      <nav
        class="mobile-nav pb-10 bg-white shadow-lg border-l fixed top-0 right-0 w-[300px] h-screen z-50"
      >
        <div class="px-5 py-4 border-b flex items-center justify-between">
          <div class="flex items-center">
            <div class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"
                />
              </svg>
            </div>
            <div class="ml-3">
              <p class="font-medium leading-4">Falana Yaasir</p>
              <p class="leading-3">meerat@usai.com</p>
            </div>
          </div>
          <button class="cursor-pointer" @click="toggleNav">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M4 18L18 4l2 2L6 20z"></path>
              <path fill="currentColor" d="M6 4l14 14-2 2L4 6z"></path>
            </svg>
          </button>
        </div>
        <ul class="px-5 py-5 border-b">
          <li>
            <RouterLink
              to="/"
              class="block py-2 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
            >
              Features
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/pricing"
              class="block py-2 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
            >
              Pricing
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/templates"
              class="block py-2 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
            >
              Template
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/dashboard"
              class="block py-2 text-lg hover:text-primary-color transition-all duration-300 ease-in-out"
            >
              Dashboard
            </RouterLink>
          </li>
        </ul>
        <div class="px-5 py-5 border-b" v-if="useAuth.userState">
          <div class="py-3">
            <RouterLink to="/settings/account-setting">
              <div
                class="flex items-center hover:text-primary-color transition-all duration-300 ease-in-out"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path
                      d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
                    />
                  </svg>
                </div>
                <div class="ml-2 text-lg">Account Settings</div>
              </div>
            </RouterLink>
          </div>
          <div class="py-2">
            <div
              class="flex items-center cursor-pointer hover:text-primary-color transition-all duration-300 ease-in-out"
              @click="signOut()"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z"
                  />
                </svg>
              </div>
              <div class="ml-2 text-lg">Logout</div>
            </div>
          </div>
        </div>
      </nav>
    </template>
  </transition>
</template>

<style scoped>
/* Nav Animation */
.nav-enter-active,
.nav-leave-active {
  transition: 0.32s ease all;
}
.nav-enter-from,
.nav-leave-to {
  transform: translateX(100%);
}
.navPopup-enter-active,
.navPopup-leave-active {
  transition: 0.3s ease all;
}
.navPopup-enter-from,
.navPopup-leave-to {
  transform: scale(0);
  transform-origin: top;
}
</style>
