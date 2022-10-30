<script setup>
import { ref, reactive, computed, inject } from "vue";
const currentTab = inject("currentTab");
</script>

<template>
  <div class="max-w-[50px] w-full h-full py-4">
    <button
      class="flex items-center justify-center h-[40px] w-[40px] mb-1 bg-white rounded-full border transition-all ease-in-out duration-300"
      :class="
        currentTab == 'gmail' ? 'border-2 border-primary-color' : 'border-white'
      "
      @click="currentTab = 'gmail'"
    >
      <img src="/icons/mails/gmail.png" alt="" class="w-[20px]" />
    </button>
    <button
      class="flex items-center justify-center h-[40px] w-[40px] mb-1 bg-white rounded-full border transition-all ease-in-out duration-300"
      :class="
        currentTab == 'outlook'
          ? 'border-2 border-primary-color'
          : 'border-white'
      "
      @click="currentTab = 'outlook'"
    >
      <img src="/icons/mails/outlook.png" alt="" class="w-[20px]" />
    </button>
    <button
      class="flex items-center justify-center h-[40px] w-[40px] mb-1 bg-white rounded-full border transition-all ease-in-out duration-300"
      :class="
        currentTab == 'yahoo' ? 'border-2 border-primary-color' : 'border-white'
      "
      @click="currentTab = 'yahoo'"
    >
      <img src="/icons/mails/yahoo.png" alt="" class="w-[20px]" />
    </button>
    <button
      class="flex items-center justify-center h-[40px] w-[40px] mb-1 bg-white rounded-full border transition-all ease-in-out duration-300"
      :class="
        currentTab == 'apple' ? 'border-2 border-primary-color' : 'border-white'
      "
      @click="currentTab = 'apple'"
    >
      <img src="/icons/mails/apple.png" alt="" class="w-[20px]" />
    </button>
  </div>
</template>
