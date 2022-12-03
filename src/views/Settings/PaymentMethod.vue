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
              class="max-w-xl mx-auto my-8 bg-white shadow-xl border rounded-2xl py-10 px-10"
            >
              <div class="">
                <h2 class="text-2xl mb-5">Payment Method</h2>
                <div class="">
                  <h1 class="text-lg">No Payment Method Yet!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
