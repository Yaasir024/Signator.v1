<script setup>
import IconVideoMeeting from "@/components/Editor/Main/Icon/VideoMeeting.vue";
const props = defineProps(["data"]);
</script>

<template>
  <!-- Video Meeting
  {{ data }} -->
  <td
    style="margin: 0.1px; width: 100%; font-size: 16px"
    :style="{
      'padding-top': data.style.paddingTop + 'px',
    }"
  >
  <a :href="data.items.url" target="_blank">
    <IconVideoMeeting
      :type="data.items.name"
      :text="data.items.text"
    />
  </a>
  </td>
</template>
