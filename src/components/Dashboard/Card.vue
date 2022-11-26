<script setup>
import Preview from "@/components/Dashboard/Preview.vue";
import { systemStore } from "@/stores/system";
const useSystemStore = systemStore();
const props = defineProps(["data", "hasDraft", "type"]);
</script>

<template>
  <div class="card bg-white shadow-lg border rounded-lg px-4">
    <div class="heading pt-3 pb-2 px-2 border-b">
      <h1 class="text-lg font-medium">{{ data.title }}</h1>
    </div>
    <Preview :data="data" />
    <div class="pt-1 pb-2 px-5" v-if="hasDraft && type == 'published'">
      This signature has a draft in progress -
      <span class="underline cursor-pointer text-primary-color"
        >Edit draft</span
      >
      |
      <span
        class="underline cursor-pointer text-primary-color"
        @click="useSystemStore.discardDraft(data.uid)"
        >Discard draft</span
      >
    </div>
    <div class="">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
