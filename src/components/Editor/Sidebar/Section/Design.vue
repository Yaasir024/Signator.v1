<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
import { useClickOutside } from "@/composables/useClickOutside";
import Heading from "@/components/Editor/Heading.vue";
const data = inject("data");

// Font Menu
const fontMenu = ref(false);
// Toggle Font Menu
const toggleFontMenu = () => {
  fontMenu.value = !fontMenu.value;
};
// Set Font
const setFont = (font) => {
  data.design.layout.fontFamily = font;
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
    <div class="layout pb-7 border-b">
      <Heading :title="'Layout'" />
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
          class="relative w-9 h-9 rounded-full bg-red-400 border"
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
          class="relative w-9 h-9 rounded-full bg-red-400 border"
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
          max="32"
          v-model="data.design.layout.fontSize"
        />
      </div>
    </div>
    <!-- Image -->
    <div class="image mt-10 pb-6">
      <Heading :title="'Image'" />
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
    <!-- Social Icon -->
    <div class="social-icon mt-10 pb-6">
      <Heading :title="'Social Icon'" />

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
      <div class="mb-5">
        <div class="flex items-center justify-between">
          <span>Icon Shape</span>
          <span>{{ data.design.socialIcon.roundness }}%</span>
        </div>
        <input
          type="range"
          class=""
          min="0"
          max="50"
          step="25"
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
