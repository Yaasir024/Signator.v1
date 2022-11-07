<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <span style="display: flex; align-items: center">
    <span style="margin-right: 6px">
      <img
        :src="'/images/greenMessage/' + data.addons.greenMessage.items.icon"
        alt=""
      />
    </span>
    <span
      :style="{
        'font-size': data.addons.greenMessage.style.fontSize,
        color: data.addons.greenMessage.style.textColor,
      }"
      >{{ data.addons.greenMessage.items.text }}</span
    >
  </span>
</template>
