<script setup>
import { systemStore } from "@/stores/system";

import Navbar from "@/components/Navigations/Navbar.vue";
import Sidebar from "@/components/Navigations/SidebarSetting.vue";
import MobileSidebar from "@/components/Navigations/SettingsMobileSidebar.vue";

const useSystemStore = systemStore();
</script>

<template>
  <div>
    <Navbar />
    <section class="h-[calc(100vh_-_68px)] overflow-hidden">
      <div class="h-full overflow-hidden">
        <MobileSidebar class="block md:hidden" />
        <div class="h-full flex">
          <Sidebar class="hidden md:block" />
          <div class="h-full w-full" v-if="useSystemStore.userData.status">
            <div class="overflow-y-auto h-full px-12">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
