<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";

import { systemStore } from "@/stores/system";

import { useClickOutside } from "@/composables/useClickOutside";
import Heading from "@/components/Editor/Heading.vue";

import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();

// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});

const useSystemStore = systemStore();

// Font Menu
const fontMenu = ref(false);
// Toggle Font Menu
const toggleFontMenu = () => {
  fontMenu.value = !fontMenu.value;
};
// Set Font
const setFont = (font) => {
  data.value.design.layout.fontFamily = font;
  fontMenu.value = false;
};
// FontMenu On Click Outside
const fontMenuBar = ref(null);
useClickOutside(fontMenuBar, () => {
  fontMenu.value = false;
});
</script>

<template>
  <!-- DESIGN -->
  <div class="design pb-14">
    <!-- Layout -->
    <div class="layout pb-4 border-b">
      <div class="mb-2">
        <Heading :title="'Layout'" />
      </div>
      <!-- Font Family -->
      <div class="item flex items-center justify-between mb-5">
        <label>Font Family</label>
        <div class="relative max-w-[60%] w-full" ref="fontMenuBar">
          <div
            class="w-full bg-canvas-color flex items-center justify-between py-2 px-4 border rounded-2xl cursor-pointer"
            :style="{
              'font-family': data.design.layout.fontFamily,
            }"
            @click="toggleFontMenu"
          >
            {{ data.design.layout.fontFamily }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21l-12-18h24z" />
            </svg>
          </div>
          <transition name="menu">
            <div
              class="absolute top-[45px] left-0 z-30 w-full bg-white shadow border rounded-b-2xl overflow-hidden"
              v-if="fontMenu"
            >
              <div
                class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                style="font-family: Arial"
                @click="setFont('Arial')"
              >
                <span>Arial</span>
              </div>
              <div
                class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                style="font-family: Arial Black"
                @click="setFont('Arial Black')"
              >
                <span>Arial Black</span>
              </div>
              <div
                class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                style="font-family: cursive"
                @click="setFont('cursive')"
              >
                <span>Cursive</span>
              </div>
              <div
                class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                style="font-family: Sans Serif"
                @click="setFont('Sans Serif')"
              >
                <span>Sans Serif</span>
              </div>
              <div
                class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                style="font-family: Verdana"
                @click="setFont('Verdana')"
              >
                <span>Verdana</span>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- Text Color -->
      <div class="flex items-center mb-5">
        <span class="w-[40%]">Text Color</span>

        <div
          class="relative w-9 h-9 rounded-full border"
          :style="{ background: data.design.layout.textColor }"
        >
          <input
            type="color"
            class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
            v-model="data.design.layout.textColor"
          />
        </div>
      </div>
      <!-- Template Color -->
      <div class="flex items-center mb-5">
        <span class="w-[40%]">Template Color</span>

        <div
          class="relative w-9 h-9 rounded-full border"
          :style="{
            background: data.design.layout.templateColor,
          }"
        >
          <input
            type="color"
            class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
            v-model="data.design.layout.templateColor"
          />
        </div>
      </div>
      <!-- Font Size -->
      <div class="mb-5">
        <div class="flex items-center justify-between">
          <span>Font Size</span>
          <span>{{ data.design.layout.fontSize }}px</span>
        </div>
        <input
          type="range"
          class=""
          min="14"
          max="21"
          v-model="data.design.layout.fontSize"
        />
      </div>
    </div>
    <!-- Image -->
    <div class="image mt-10 pb-4 border-b">
      <div class="mb-2">
        <Heading :title="'Image'" />
      </div>
      <!-- Image Width -->
      <div class="mb-5">
        <div class="flex items-center justify-between">
          <span>Image Width</span>
          <span>{{ data.design.image.width }}px</span>
        </div>
        <input
          type="range"
          class=""
          min="50"
          max="200"
          v-model="data.design.image.width"
        />
      </div>
      <!-- Image Shape -->
      <div class="mb-5">
        <div class="flex items-center justify-between">
          <span>Image Shape</span>
          <span>{{ data.design.image.roundness }}%</span>
        </div>
        <input
          type="range"
          class=""
          min="0"
          max="50"
          step="5"
          v-model="data.design.image.roundness"
        />
      </div>
    </div>
    <!-- Details -->
    <div
      class="social-icon mt-8 pb-4 border-b"
      v-if="useSystemStore.userFullData.subscriptionData.plan == 'pro'"
    >
      <div class="mb-2">
        <Heading :title="'Details'" />
      </div>
      <!-- Label -->
      <div class="flex items-center mb-5">
        <span class="w-[40%]">Label</span>

        <div class="relative w-[55%]">
          <ul class="flex items-center">
            <li
              class="h-[40px] flex items-center justify-center flex-1 border transition-all ease-in-out duration-300 p-2 rounded-l-xl cursor-pointer"
              :class="
                data.design.details.label == 'full'
                  ? 'bg-primary-color text-white border-r-0'
                  : 'text-primary-color'
              "
              @click="data.design.details.label = 'full'"
            >
              Phone
            </li>
            <li
              class="h-[40px] flex items-center justify-center flex-1 border border-l-0 transition-all ease-in-out duration-300 p-2 cursor-pointer"
              :class="
                data.design.details.label == 'initial'
                  ? 'bg-primary-color text-white border-r-0'
                  : 'text-primary-color'
              "
              @click="data.design.details.label = 'initial'"
            >
              P
            </li>
            <li
              class="h-[40px] flex items-center justify-center flex-1 border border-l-0 transition-all ease-in-out duration-300 p-2 cursor-pointer"
              :class="
                data.design.details.label == 'icon'
                  ? 'bg-primary-color text-white border-r-0'
                  : 'text-primary-color'
              "
              @click="data.design.details.label = 'icon'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </li>
            <li
              class="h-[40px] flex items-center justify-center flex-1 border border-l-0 transition-all ease-in-out duration-300 p-2 rounded-r-xl cursor-pointer"
              :class="
                data.design.details.label == 'none'
                  ? 'bg-primary-color text-white'
                  : 'text-primary-color'
              "
              @click="data.design.details.label = 'none'"
            >
              None
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Social Icon -->
    <div class="social-icon mt-8 pb-6">
      <div class="mb-2">
        <Heading :title="'Social Icon'" />
      </div>

      <!-- Icon Width -->
      <div class="mb-5">
        <div class="flex items-center justify-between">
          <span>Icon Size</span>
          <span>{{ data.design.socialIcon.size }}px</span>
        </div>
        <input
          type="range"
          class=""
          min="25"
          max="35"
          v-model="data.design.socialIcon.size"
        />
      </div>
      <!-- Icon Shape -->
      <div
        class="mb-5"
        v-if="
          useSystemStore.userFullData.subscriptionData.plan ==
          'pro'
        "
      >
        <div class="flex items-center justify-between">
          <span>Icon Shape</span>
          <span>{{ data.design.socialIcon.roundness }}%</span>
        </div>
        <input
          type="range"
          class=""
          min="0"
          max="50"
          step="2"
          v-model="data.design.socialIcon.roundness"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Menu Animation */
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top left;
}

.menu-enter-from,
.menu-leave-to {
  transform: scale(0);
}
</style>
