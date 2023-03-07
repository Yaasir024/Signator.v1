<script setup>
import { ref, onMounted, computed } from "vue";
import SideMenu from "@/components/Organization/Main/Templates/Fields/SideMenu.vue";
import Sections from "@/components/Organization/Main/Templates/Fields/Sections/index.vue";
</script>

<template>
  <div class="relative h-full w-full flex">
    <div class="w-[75px] border-r-2 bg-canvas-color">
      <SideMenu />
    </div>
    <div class="w-full overflow-y-auto">
      <Sections />
    </div>
  </div>
</template>

<style scoped></style>
