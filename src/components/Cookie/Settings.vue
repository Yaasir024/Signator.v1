<script setup>
import { ref, reactive, computed, onMounted } from "vue";

import "ant-design-vue/lib/switch/style/index.css";

import { systemStore } from "@/stores/system";
const useSystemStore = systemStore();

const cookiePermissions = ref({
  performance: false,
  functionality: false,
});

// Check if Preference Is Selected Added in Cookie
onMounted(() => {
  if(useSystemStore.getPrivacyPreferences().includes('performance')) {
    cookiePermissions.value.performance = true
  }
  if(useSystemStore.getPrivacyPreferences().includes('functionality')) {
    cookiePermissions.value.functionality = true
  }
})

const currentAccordionTab = ref("");

// 
const preferences = computed(() => {
  let data = ["necessary"];
  if (cookiePermissions.value.performance) {
    data.push("performance");
  }
  if (cookiePermissions.value.functionality) {
    data.push("functionality");
  }
  return data;
});

const acceptAll = () => {
  cookiePermissions.value.performance = true;
  cookiePermissions.value.functionality = true;
  useSystemStore.setprivacyPreferences(preferences.value)
};
</script>

<template>
  <div class="fixed top-[12%] w-full px-4 z-30">
    <section
      class="max-w-[550px] w-full mx-auto bg-white border shadow-xl rounded-lg"
    >
      <div class="flex items-center justify-between py-5 px-7 border-b">
        <h1 class="text-xl font-medium">Privacy Preference Center</h1>
        <div
          class="cursor-pointer"
          @click="useSystemStore.privacyPreferenceVisibility = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="20"
            height="20"
          >
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
        </div>
      </div>
      <div class="max-h-[420px] overflow-y-auto pt-5">
        <div class="px-8">
          <div class="">
            <span
              >Our website uses cookies to enhance your browsing experience and
              provide you with personalized content and advertisements. By
              clicking "Accept", you agree to our use of cookies in accordance
              with our privacy policy. You can also choose to manage your cookie
              preferences through the settings in your browser.</span
            >
            <div class="">
              <RouterLink to="/privacy-policy">
                <span class="text-primary-color underline"
                  >More Information</span
                >
              </RouterLink>
            </div>
            <div class="mt-6">
              <button
                class="text-white text-base font-medium bg-primary-color border border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 hover:scale-[1.02] transition-all duration-300 ease-in-out"
                @click="acceptAll()"
              >
                Allow all Cookies
              </button>
            </div>
          </div>
          <div class="mt-5 mb-2 py-2 rounded-md">
            <ul class="py-3">
              <li class="border pt-3">
                <div
                  class="flex items-center justify-between text-base px-2 pb-3 cursor-pointer"
                  @click="
                    currentAccordionTab == 'strictlyNecessary'
                      ? (currentAccordionTab = '')
                      : (currentAccordionTab = 'strictlyNecessary')
                  "
                >
                  <div class="flex items-center">
                    <div class="mr-2">
                      <span v-if="currentAccordionTab != 'strictlyNecessary'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                          />
                        </svg>
                      </span>
                      <span v-if="currentAccordionTab == 'strictlyNecessary'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span class="">Strictly Necesssary Cookies</span>
                  </div>
                  <span class="text-primary-color">Always Active</span>
                </div>
                <div
                  class="bg-canvas-color overflow-hidden transition-all ease-in-out duration-300"
                  :class="
                    currentAccordionTab != 'strictlyNecessary'
                      ? 'max-h-0 p-0'
                      : 'max-h-[500px] '
                  "
                >
                  <div class="px-3 py-4">
                    <span
                      >These cookies are essential for the proper functioning of
                      our website. They allow you to navigate the site, and use
                      its features, such as accessing secure areas, shopping
                      carts, and online billing. They do not gather any personal
                      information about you and cannot be turned off. By using
                      our website, you accept that these cookies will be placed
                      on your device.
                    </span>
                  </div>
                </div>
              </li>
              <li class="border pt-3">
                <div
                  class="flex items-center justify-between text-base px-2 pb-3 cursor-pointer relative"
                  @click="
                    currentAccordionTab == 'performance'
                      ? (currentAccordionTab = '')
                      : (currentAccordionTab = 'performance')
                  "
                >
                  <div class="flex items-center w-full">
                    <div class="mr-2">
                      <span v-if="currentAccordionTab != 'performance'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                          />
                        </svg>
                      </span>
                      <span v-if="currentAccordionTab == 'performance'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span class="">Performance Cookies</span>
                  </div>
                  <span class="text-primary-color absolute top-0 right-2 z-10"
                    ><a-switch v-model:checked="cookiePermissions.performance"
                  /></span>
                </div>
                <div
                  class="bg-canvas-color overflow-hidden transition-all ease-in-out duration-300"
                  :class="
                    currentAccordionTab != 'performance'
                      ? 'max-h-0 p-0'
                      : 'max-h-[500px] '
                  "
                >
                  <div class="px-3 py-4">
                    <span
                      >These cookies collect information about how you use our
                      website, such as which pages you visit and if you
                      encounter any errors. This data helps us to understand and
                      improve the user experience on our site. These cookies do
                      not collect any personally identifiable information. By
                      accepting these cookies, you are allowing us to enhance
                      the functionality and performance of our website.
                    </span>
                  </div>
                </div>
              </li>
              <li class="border pt-3">
                <div
                  class="flex items-center justify-between text-base px-2 pb-3 cursor-pointer relative"
                  @click="
                    currentAccordionTab == 'functionality'
                      ? (currentAccordionTab = '')
                      : (currentAccordionTab = 'functionality')
                  "
                >
                  <div class="flex items-center w-full">
                    <div class="mr-2">
                      <span v-if="currentAccordionTab != 'functionality'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                          />
                        </svg>
                      </span>
                      <span v-if="currentAccordionTab == 'functionality'">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span class="">Functionality Cookies</span>
                  </div>
                  <span class="text-primary-color absolute top-0 right-2 z-10"
                    ><a-switch
                      v-model:checked="cookiePermissions.functionality"
                  /></span>
                </div>
                <div
                  class="bg-canvas-color overflow-hidden transition-all ease-in-out duration-300"
                  :class="
                    currentAccordionTab != 'functionality'
                      ? 'max-h-0 p-0'
                      : 'max-h-[500px] '
                  "
                >
                  <div class="px-3 py-4">
                    <span
                      >These cookies are used to enhance the functionality of
                      our website by remembering your preferences and settings.
                      For example, they allow us to remember your language
                      preference or the items you have in your shopping cart.
                      These cookies are essential for providing you with a
                      smooth and personalized experience on our website. By
                      accepting these cookies, you can ensure that your browsing
                      experience on our site is optimized to your preferences.
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="px-5 flex items-center justify-end flex-col xs:flex-row pt-6 pb-8 border-t"
      >
        <div class="flex items-center flex-col xs:flex-row w-full xs:w-auto">
          <button
            class="text-white text-base font-medium bg-primary-color border border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            Reject All
          </button>
          <button
            class="text-white text-base font-medium bg-primary-color border border-primary-color rounded-md py-1.5 px-4 w-full xs:w-auto mb-2 xs:mb-0 xs:ml-3 hover:scale-[1.02] transition-all duration-300 ease-in-out"
            @click="useSystemStore.setprivacyPreferences(preferences)"
          >
          Save Choices
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ant-switch {
  background-color: rgba(0, 0, 0, 0.25) !important;
}
.ant-switch-checked {
  background-color: #1890ff !important;
}
</style>
