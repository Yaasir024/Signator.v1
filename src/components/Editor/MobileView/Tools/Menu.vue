<script setup>
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
const setNavValue = (value) => {
  useEditorStore.currentEditorNav = value;
};
</script>

<template>
  <ul class="flex">
    <!-- General -->
    <li class="flex-1">
      <button
        class="flex flex-col items-center justify-center h-[65px] w-full border-r-2 px-1 hover:text-gray-500 transition-all ease-in-out duration-300"
        :class="useEditorStore.currentEditorNav === 'general' ? 'bg-canvas-color' : ' border-b-2'"
        @click="setNavValue('general')"
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z"
          />
        </svg>
        <span class="hidden sm:block">General</span>
      </button>
    </li>
    <!-- Social -->
    <li class="flex-1">
      <button
        class="flex flex-col items-center justify-center h-[65px] w-full border-r-2 px-1 hover:text-gray-500 transition-all ease-in-out duration-300"
        :class="useEditorStore.currentEditorNav === 'social' ? 'bg-canvas-color' : ' border-b-2'"
        @click="setNavValue('social')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
          />
        </svg>
        <span class="hidden sm:block">Social</span>
      </button>
    </li>
    <!-- Addons -->
    <li class="flex-1">
      <button
        class="flex flex-col items-center justify-center h-[65px] w-full border-r-2 px-1 hover:text-gray-500 transition-all ease-in-out duration-300"
        :class="useEditorStore.currentEditorNav === 'addons' ? 'bg-canvas-color' : ' border-b-2'"
        @click="setNavValue('addons')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M14.852 6h-.004c.485-.627 1.072-1.547 1.072-2.744 0-1.572-1.499-3.256-3.731-3.256-2.23 0-3.729 1.684-3.729 3.256 0 1.195.587 2.117 1.072 2.744h-6.531999999999999v6.528c0 .974.438 1.736 1.172 2.04.709.293 1.547.078 2.186-.562 1.246-1.298 2.642-.131 2.642 1.183 0 1.29-1.396 2.484-2.644 1.184-.638-.639-1.476-.854-2.185-.561-.733.303-1.171 1.066-1.171 2.04v6.148h18v-18h-6.148zm-9.852 16v-4.151999999999999c.627.485 1.547 1.072 2.744 1.072 1.572 0 3.256-1.499 3.256-3.73 0-2.23-1.684-3.729-3.256-3.729-1.195 0-2.117.587-2.744 1.072v-4.5329999999999995h4.528c.974 0 1.736-.438 2.04-1.171.293-.71.078-1.548-.562-2.187-1.298-1.245-.131-2.642 1.183-2.642 1.29 0 2.484 1.397 1.184 2.644-.639.638-.854 1.476-.561 2.185.303.733 1.066 1.171 2.04 1.171h4.148v14h-14z"
          />
        </svg>
        <span class="hidden sm:block">Addons</span>
      </button>
    </li>
    <!-- Design -->
    <li class="flex-1">
      <button
        class="flex flex-col items-center justify-center h-[65px] w-full border-r-2 px-1 hover:text-gray-500 transition-all ease-in-out duration-300"
        :class="useEditorStore.currentEditorNav === 'design' ? 'bg-canvas-color' : ' border-b-2'"
        @click="setNavValue('design')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="26"
          height="26"
          fill="currentColor"
        >
          <rect width="20" height="20" fill="none" />
          <path
            d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <circle cx="128" cy="76" r="16" />
          <circle cx="83" cy="102" r="16" />
          <circle cx="83" cy="154" r="16" />
          <circle cx="173" cy="102" r="16" />
        </svg>
        <span class="hidden sm:block">Design</span>
      </button>
    </li>
    <!-- Layout -->
    <li class="flex-1">
      <button
        class="flex flex-col items-center justify-center h-[65px] w-full px-1 hover:text-gray-500 transition-all ease-in-out duration-400"
        :class="useEditorStore.currentEditorNav === 'layout' ? 'bg-canvas-color' : ' border-b-2'"
        @click="setNavValue('layout')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 0v24h24v-24h-24zm11 22h-9v-16h9v16zm11 0h-9v-7h9v7zm0-9h-9v-7h9v7z"
          />
        </svg>
        <span class="hidden sm:block">Layout</span>
      </button>
    </li>
  </ul>
</template>
