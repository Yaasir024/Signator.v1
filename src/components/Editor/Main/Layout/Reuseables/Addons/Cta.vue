<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <td
    style="margin: 0.1px; width: 100%"
    :style="{
      'padding-top': data.style.paddingTop + 'px',
    }"
  >
    <a :href="data.item.url" target="_blank">
      <div
        style="
          display: inline-block;
          padding: 0px 8px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          line-height: 36px;
          min-width: 100px;
        "
        :style="{
          background: data.style.buttonColor,
          color: data.style.textColor,
        }"
      >
        {{ data.item.text }}
      </div>
    </a>
  </td>
</template>
