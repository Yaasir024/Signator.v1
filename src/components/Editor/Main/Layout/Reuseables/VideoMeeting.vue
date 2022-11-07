<script setup>
import IconVideoMeeting from "@/components/Editor/Main/Icon/VideoMeeting.vue";
const props = defineProps(["data"]);
</script>
<template>
  <a :href="data.addons.videoMeeting.items.url" target="_blank">
    <IconVideoMeeting
      :type="data.addons.videoMeeting.items.name"
      :text="data.addons.videoMeeting.items.text"
    />
  </a>
</template>
