<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
</script>

<template>
  <section class="min-h-screen">
    <Navbar />
    <main class="">
      <div class="hero bg-white py-20 px-6 border-t w-full">
        <div class="max-w-[820px] mx-auto text-center">
          <h1 class="text-4xl font-medium">Welcome, How can we help?</h1>
          <div class="search-container w-[400px] mx-auto h-[60px] mt-8 bg-white rounded-xl shadow-2xl flex items-center justify-center">
            <div class="w-[95%] h-[calc(60px_-_20px)] flex items-center justify-center">
                <div class="w-[80%] h-full flex items-center px-2 bg-canvas-color rounded-xl">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                    <input type="text" placeholder="Search for question" class="w-full outline-none px-2 h-full bg-canvas-color">
                </div>
                <div class="btn w-[20%] h-[40px] flex items-center justify-center cursor-pointer text-base">
                    SEARCH
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
