<script setup>
import Header from "@/components/Organization/Header.vue";
import Sidebar from "@/components/Organization/Sidebar/index.vue";
import Main from "@/components/Organization/Main/index.vue";
</script>

<template>
  <Header />
  <div class="h-[calc(100vh_-_64px)] bg-white overflow-hidden">
    <section class="h-full w-full flex">
      <Sidebar />
      <Main />
    </section>
  </div>
</template>
