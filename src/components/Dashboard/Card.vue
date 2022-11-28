<script setup>
import { useRouter } from "vue-router";

import { systemStore } from "@/stores/system";
import { editorStore } from "@/stores/editor";

import Preview from "@/components/Dashboard/Preview.vue";

const router = useRouter();

const useEditorStore = editorStore();
const useSystemStore = systemStore();

const props = defineProps(["data", "hasDraft"]);

const editDraft = () => {
  router.push({ path: "/editor" });
};
</script>

<template>
  <div class="card bg-white shadow-lg border rounded-lg px-4">
    <div class="heading pt-3 pb-2 px-2 border-b">
      <h1 class="text-lg font-medium">{{ data.title }}</h1>
    </div>
    <Preview :data="data" />
    <div class="pt-1 pb-2 px-5" v-if="hasDraft">
      This signature has a draft in progress -
      <span class="underline cursor-pointer text-primary-color"
      @click="editDraft()"
        >Edit draft</span
      >
      |
      <span
        class="underline cursor-pointer text-primary-color"
        @click="useEditorStore.data = {}"
        >Discard draft</span
      >
    </div>
    <div class="">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
