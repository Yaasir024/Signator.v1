<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <span v-for="social in data.addons.social.items" :key="social.id">
    <a
      :href="social.url"
      target="_blank"
      style="padding-right: 4px; padding-bottom: 4px; display: inline-block"
    >
      <img
        :src="'/icons/addons/' + social.name + '_1' + '.png'"
        :alt="social.name"
        :style="{
          height: data.addons.social.style.height + 'px',
        }"
      />
    </a>
  </span>
</template>
