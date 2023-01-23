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
          <div class="overflow-y-auto h-full px-6 sm:px-12">
            <div
              class="max-w-[720px] mx-auto my-8 bg-white shadow-xl border rounded-xl py-10 px-7 sm:px-10"
            >
              <div class="">
                <h2 class="text-2xl mb-5">Billing History</h2>
                <div class="">
                  <h1 class="text-lg">No Invoices Yet!</h1>
                </div>
                <div class="">
                  <div
                    class="flex cursor-pointer gap-[16px] py-6 px-8 sm:px-8 my-2 bg-canvas-color shadow-lg rounded-2xl text-base hover:text-primary-color transition-all duration-200 ease-in-out"
                  >
                    <div class="left flex">
                      <span class="">12ab3dgfgjj445</span>
                      <span class="">Dec 24, 2022</span>
                    </div>
                    <div class="right flex">
                      <span class="">Basic Plan</span>
                      <span class="font-medium">$520.50</span>
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

<style scoped>
.left {
  align-items: center;
  flex-basis: 60%;
  gap: 16px;
}
.left span {
  flex: 1;
}
.right {
  align-items: center;
  flex-basis: 40%;
  gap: 16px;
}
.right span {
  flex: 1;
}
</style>
