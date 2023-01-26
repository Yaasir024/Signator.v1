<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button
    class="text-white text-base font-medium bg-primary-color border rounded-2xl py-1.5 px-4 hover:scale-[1.02] transition-all duration-300 ease-in-out"
  >
    {{ text }}
  </button>
</template>

<style scoped>

</style>
