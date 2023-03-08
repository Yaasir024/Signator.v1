<script setup>
import { templateStore } from "@/stores/Organization/templates";
import General from "@/components/Organization/Main/Templates/Fields/Sections/General.vue";
import Images from "@/components/Organization/Main/Templates/Fields/Sections/Images.vue";
import Design from "@/components/Organization/Main/Templates/Fields/Sections/Design.vue";
import Social from "@/components/Organization/Main/Templates/Fields/Sections/Social.vue";

const useTemplateStore = templateStore()
</script>
<template>
  <div class="w-full">
    <General v-if="useTemplateStore.currentEditorTab == 'details'"/>
    <Images v-if="useTemplateStore.currentEditorTab == 'images'"/>
    <Design v-if="useTemplateStore.currentEditorTab == 'design'"/>
    <Social v-if="useTemplateStore.currentEditorTab == 'social'"/>
  </div>
</template>
