<script setup>
import videoMeeting from "@/components/Editor/Main/Layout/Reuseables/Addons/VideoMeeting.vue";
import social from "@/components/Editor/Main/Layout/Reuseables/Addons/Social.vue";
import disclaimer from "@/components/Editor/Main/Layout/Reuseables/Addons/Disclaimer.vue";
import greenMessage from "@/components/Editor/Main/Layout/Reuseables/Addons/GreenMessage.vue";
import cta from "@/components/Editor/Main/Layout/Reuseables/Addons/Cta.vue";
const props = defineProps(["addonData"]);

const addonComponents = {
  //   signoff,
  disclaimer,
  social,
  greenMessage,
  videoMeeting,
  cta,
};
</script>

<template>
  <tr class="" v-for="addon in addonData" :key="addon.type">
    <component :is="addonComponents[addon.type]" :data="addon.data"></component>
  </tr>
</template>
