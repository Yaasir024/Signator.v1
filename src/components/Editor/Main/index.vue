<script setup>
import Header from "@/components/Editor/Main/Header.vue";
import Preview from "@/components/Editor/Main/Preview.vue";
import { inject } from "vue";
const data = inject("data");
</script>

<template>
  <main class="w-[calc(100%_-_450px)] h-screen flex flex-col">
    <div class="">
      <Header /> 
      <div class="relative h-[calc(100vh_-_50px)] overflow-hidden px-5">
        <Preview :data="data" />
      </div>
    </div>
  </main>
</template>
