<script setup>
import { ref, onMounted, computed } from "vue";

import { templateStore } from "@/stores/teams/dashboard/templates";

const useTemplates = templateStore();
</script>

<template>
  <div class="">
    <button
      class="flex flex-col items-center justify-center h-[74px] w-full px-1 hover:text-gray-500 transition-all ease-in-out duration-400"
      :class="useTemplates.currentEditorTab == 'details' ? 'bg-white' : ''"
      @click="useTemplates.currentEditorTab = 'details'"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z"
        ></path>
      </svg>
  
      <span>Details</span>
    </button>
    <button
      class="flex flex-col items-center justify-center h-[74px] w-full px-1 hover:text-gray-500 transition-all ease-in-out duration-400"
      :class="useTemplates.currentEditorTab == 'images' ? 'bg-white' : ''"
      @click="useTemplates.currentEditorTab = 'images'"
      v-if="false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z"
        />
      </svg>
      <span>Images</span>
    </button>
    <button
      class="flex flex-col items-center justify-center h-[74px] w-full px-1 hover:text-gray-500 transition-all ease-in-out duration-400"
      :class="useTemplates.currentEditorTab == 'social' ? 'bg-white' : ''"
      @click="useTemplates.currentEditorTab = 'social'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        ></path>
      </svg>
      <span>Social</span>
    </button>
    <button
      class="flex flex-col items-center justify-center h-[74px] w-full px-1 hover:text-gray-500 transition-all ease-in-out duration-400"
      :class="useTemplates.currentEditorTab == 'design' ? 'bg-white' : ''"
      @click="useTemplates.currentEditorTab = 'design'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="26"
        height="26"
        fill="currentColor"
      >
        <rect width="20" height="20" fill="none"></rect>
        <path
          d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <circle cx="128" cy="76" r="16"></circle>
        <circle cx="83" cy="102" r="16"></circle>
        <circle cx="83" cy="154" r="16"></circle>
        <circle cx="173" cy="102" r="16"></circle>
      </svg>
      <span>Design</span>
    </button>
  </div>
</template>
