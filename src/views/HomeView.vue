<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";

const useAuth = authStore();

</script>

<template>
  <main class="">
    <Navbar />
    <div class="text-center text-4xl py-16">
      HOME PAGE
      
    </div>
  </main>
</template>

<style scoped>

</style>
