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
    <span v-for="social in data.items" :key="social.id">
      <a
        :href="social.url"
        target="_blank"
        style="padding-right: 4px; padding-bottom: 4px; display: inline-block"
      >
        <img
          :src="'/icons/addons/' + social.name + '_1' + '.png'"
          :alt="social.name"
          :style="{
            height: data.style.height + 'px',
          }"
        />
      </a>
    </span>
  </td>
</template>
