<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <td style="padding-right: 5px; width: 100%; padding-top: 10px">
    <span style="display: flex; align-items: center">
      <span style="margin-right: 6px">
        <img :src="'//images/greenMessage/' + data.items.icon" alt="" />
      </span>
      <span
        :style="{
          'font-size': data.style.fontSize,
          color: data.style.textColor,
        }"
        >{{ data.items.text }}</span
      >
    </span>
  </td>
</template>
