<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { templateStore } from "@/stores/teams/dashboard/templates";

import Details from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Fields/Details/index.vue";

const useTemplates = templateStore();
</script>

<template>
    <div class="w-full">
      <Details v-if="useTemplates.currentEditorTab == 'details'"/>
    </div>
  </template>