<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button class="flex items-center py-[8px] hover:text-primary-color transition-all duration-300 ease-in-out">
    <div class="mr-2">
        <slot></slot>
    </div>
    <span class="text-base">{{ text }}</span>
  </button>
</template>
