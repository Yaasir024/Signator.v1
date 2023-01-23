<script setup>
import { ref, reactive, computed, inject } from "vue";
import Heading from "@/components/Editor/Heading.vue";
import { uid } from "@/composables/useGenerateUid";
import templatesData from "@/data/templates";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
const data = inject("data");

const freeLayouts = computed(() => {
  return templatesData.layouts.filter((layout) => layout.type == "free");
});
const proLayouts = computed(() => {
  return templatesData.layouts.filter((layout) => layout.type == "pro");
});
</script>

<template>
  <div class="social pb-14">
    <div class="" v-if="true">
      <div class="mb-6">
        <div class="text-base font-medium mb-2">LAYOUTS</div>
        <div class="grid grid-cols-2 gap-x-2 gap-y-3">
          <div
            class="p-2 border rounded-lg min-h-[120px] flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all ease-in duration-200"
            v-for="layout in templatesData.layouts"
            :key="layout.id"
            :class="
              data.design.layout.layout === layout.name
                ? 'border-2 border-primary-color'
                : ''
            "
            @click="data.design.layout.layout = layout.name"
          >
            <img :src="'/../assets/images/layouts/' + layout.img" alt="" />
            <div class="">
              {{ layout.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" v-if="false">
      <div class="mb-6">
        <div class="text-base font-medium mb-2">FREE LAYOUTS</div>
        <div class="grid grid-cols-2">
          <div
            class="p-2 border rounded-lg min-h-[150px] flex flex-col items-center justify-between"
            v-for="layout in freeLayouts"
            :key="layout.id"
            :class="
              data.design.layout.layout === layout.name
                ? 'border-2 border-primary-color'
                : ''
            "
          >
            <img src="/../assets/images/layouts/01.png" alt="" />
            <div class="">
              {{ layout.name }}
            </div>
          </div>
        </div>
      </div>
      {{ data.design.layout.layout }}
      <div class="mb-6">
        <div class="text-base font-medium mb-2">PRO LAYOUTS</div>
        <div class="grid grid-cols-2 gap-2">
          <div
            class="p-2 border rounded-lg min-h-[150px] flex flex-col items-center justify-between cursor-pointer hover:shadow-lg transition-all ease-in duration-300"
            v-for="layout in proLayouts"
            :key="layout.id"
            :class="
              data.design.layout.layout == layout.name
                ? 'border-2 border-ptimary-color'
                : ''
            "
          >
            <img src="/../assets/images/layouts/01.png" alt="" />
            <div class="flex items-center">
              <span class="mr-2 text-base">{{ layout.name }}</span>
              {{ layout }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
