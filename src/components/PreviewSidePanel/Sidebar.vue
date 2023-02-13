<script setup>
import { ref, reactive, computed, inject } from "vue";

const currentTab = inject("currentTab");
</script>

<template>
  <div class="w-[50px] sm:w-[160px] bg-canvas-color h-full flex flex-col p-1">
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
      <div class="ml-2 text-base hidden sm:block">Gmail</div>
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
      <div class="ml-2 text-base hidden sm:block">Outlook</div>
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
      <div class="ml-2 text-base hidden sm:block">Yahoo</div>
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
      <div class="ml-2 text-base hidden sm:block">Apple Mail</div>
    </button>
    <button
      class="flex items-center h-[40px] px-2 transition-all ease-in-out duration-300"
      :class="
        currentTab == 'html'
          ? 'border-2 border-primary-color bg-white'
          : 'border-0'
      "
      @click="currentTab = 'html'"
    >
      <!-- <img src="/icons/mails/apple.png" alt="" class="w-[20px]" /> -->
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z"/></svg>
      <div class="ml-2 text-base hidden sm:block">HTML</div>
    </button>
  </div>
</template>
