<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <td
    style="margin: 0.1px; width: 100%; line-height: 1.3"
    :style="{
      'font-size': data.style.fontSize,
      color: data.style.textColor,
    }"
  >
    {{ data.text }}
  </td>
</template>
