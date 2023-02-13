<script setup>
import { ref, reactive, computed, inject } from "vue";
import Heading from "@/components/Editor/Heading.vue";
import { uid } from "@/composables/useGenerateUid";

import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
import { editorStore } from "@/stores/editor";

import signatureLayouts from "@/data/layouts.json";

import ProIcon from "@/components/ProTag/Icon.vue";

// Use Store
const useAuth = authStore();
const useSystemStore = systemStore();
const useEditorStore = editorStore();

// Signature data inject
// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});

const checkLayoutEligibiity = (d) => {
  if (
    useAuth.userState &&
    Object.keys(useSystemStore.userFullData).length != 0
  ) {
    return d.includes(useSystemStore.userFullData.subscriptionData.plan);
  }
};

const setLayout = (layout) => {
  if (checkLayoutEligibiity(layout.type)) {
    data.design.layout.layout = layout.name;
  }
};
</script>

<template>
  <div class="social pb-14">
    <div class="" v-if="true">
      <div class="mb-6">
        <div class="text-base font-medium mb-2">LAYOUTS</div>
        <div class="grid grid-cols-2 gap-x-2 gap-y-3">
          <div
            class="p-2 border rounded-lg min-h-[120px] flex flex-col items-center justify-center cursor-pointer hover:shadow transition-all ease-in duration-300"
            v-for="layout in signatureLayouts"
            :key="layout.id"
            :class="
              data.design.layout.layout === layout.name
                ? 'border-2 border-primary-color shadow-lg'
                : ''
            "
            @click="setLayout(layout)"
          >
            <ProIcon v-if="!checkLayoutEligibiity(layout.type)" />
            <img :src="'/images/layouts/' + layout.img" alt="" />
            <div class="">
              {{ layout.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
