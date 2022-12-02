<script setup>
import Menu from "@/components/Editor/MobileView/Tools/Menu.vue";
import Section from "@/components/Editor/Sidebar/Section/index.vue";
</script>

<template>
  <div
    class="max-w-[600px] mx-auto mt-12 mb-32 bg-white rounded-2xl shadow-2xl overflow-hidden"
  >
    <Menu />
    <div class="max-w-[400px] mx-auto">
      <Section />
    </div>
  </div>
</template>
