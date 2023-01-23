<script setup>
import Navbar from "@/components/Navigations/Navbar.vue";
import Sidebar from "@/components/Navigations/SidebarSetting.vue";
import MobileSidebar from "@/components/Navigations/SettingsMobileSidebar.vue";
</script>

<template>
  <section class="h-screen overflow-hidden">
    <Navbar />
    <div class="h-full overflow-hidden">
      <MobileSidebar class="block md:hidden" />
      <div class="h-full flex">
        <Sidebar class="hidden md:block" />
        <div class="h-full w-full">
          <div class="overflow-y-auto h-full px-12">
            <div
              class="max-w-xl mx-auto mt-10 bg-white shadow-xl border rounded-2xl py-10 px-10"
            >
              <div class="">
                <h2 class="text-2xl mb-5">Subscription</h2>
                <div class="bg-canvas-color p-6 rounded-2xl">
                  <div class="flex items-center justify-between">
                    <div class="">
                      <h1 class="text-xl font-medium">Basic Plan</h1>
                      <p class="text-base">4 Signatures</p>
                    </div>
                    <div class="">
                      <div class="">
                        <span class="text-xl">$537</span>
                        <sub class="text-base bottom-[-0.1em]"
                          >/monthly</sub
                        >
                      </div>
                    </div>
                  </div>

                  <!--  -->
                  <div class="">
                    <div class="text-base">
                        <span class="text-primary-color">Start Date:  </span>
                        <span>Jan 03, 2022</span>
                    </div>
                    <div class="text-base">
                        <span class="text-primary-color">Expiry Date:  </span>
                        <span>Jan 03, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
