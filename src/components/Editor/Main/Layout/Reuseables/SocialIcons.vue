<script setup>
import IconSocial from "@/components/Editor/Main/Icon/Social.vue";
const props = defineProps(["data", "type"]);
</script>
<template>
  <span v-if="type == 'horizontal'">
    <span
      v-for="social in data.socialInfo"
      :key="social.id"
      style="padding-right: 6px; padding-bottom: 4px; display: inline-block"
    >
      <a :href="social.url" target="_blank">
        <IconSocial :icon="social.name" :data="data.design.socialIcon" />
      </a>
    </span>
  </span>
  <span v-if="type == 'vertical'">
    
    <span
      v-for="social in data.socialInfo"
      :key="social.id"
      style="padding-bottom: 4px; display: block"
    >
      <a :href="social.url" target="_blank">
        <IconSocial :icon="social.name" :data="data.design.socialIcon" />
      </a>
    </span>
  </span>
</template>
