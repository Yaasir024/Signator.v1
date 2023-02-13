<script setup>
import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>
