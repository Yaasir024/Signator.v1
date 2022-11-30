<script setup>
import { ref, reactive, computed, inject } from "vue";

const currentTab = inject("currentTab");
</script>

<template>
  <div class="w-[160px] bg-canvas-color h-full flex flex-col p-1">
    <button
      class="flex items-center h-[40px] px-2 transition-all ease-in-out duration-300"
      :class="
        currentTab == 'gmail'
          ? 'border-2 border-primary-color bg-white'
          : 'border-0'
      "
      @click="currentTab = 'gmail'"
    >
      <img src="/icons/mails/gmail.png" alt="" class="w-[20px]" />
      <div class="ml-2 text-base">Gmail</div>
    </button>
    <button
      class="flex items-center h-[40px] px-2 transition-all ease-in-out duration-300"
      :class="
        currentTab == 'outlook'
          ? 'border-2 border-primary-color bg-white'
          : 'border-0'
      "
      @click="currentTab = 'outlook'"
    >
      <img src="/icons/mails/outlook.png" alt="" class="w-[20px]" />
      <div class="ml-2 text-base">Outlook</div>
    </button>
    <button
      class="flex items-center h-[40px] px-2 transition-all ease-in-out duration-300"
      :class="
        currentTab == 'yahoo'
          ? 'border-2 border-primary-color bg-white'
          : 'border-0'
      "
      @click="currentTab = 'yahoo'"
    >
      <img src="/icons/mails/yahoo.png" alt="" class="w-[20px]" />
      <div class="ml-2 text-base">Yahoo</div>
    </button>
    <button
      class="flex items-center h-[40px] px-2 transition-all ease-in-out duration-300"
      :class="
        currentTab == 'apple'
          ? 'border-2 border-primary-color bg-white'
          : 'border-0'
      "
      @click="currentTab = 'apple'"
    >
      <img src="/icons/mails/apple.png" alt="" class="w-[20px]" />
      <div class="ml-2 text-base">Apple Mail</div>
    </button>
  </div>
</template>
