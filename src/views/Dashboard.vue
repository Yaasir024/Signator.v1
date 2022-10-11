<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
    <div class="min-h-screen bg-canvas-color">
      <Navbar />
      <main class="py-20">
        <section class="max-w-[1280px] mx-auto px-5">
          <div
            class="wrapper bg-white shadow-lg border rounded-xl pt-8 pb-12 px-7"
          >
            <div class="">
              <div class="flex items-center justify-between">
                <div class="text-2xl font-medium">Dashboard</div>
              </div>
              <div class="flex items-center justify-between px-2">
                <div class="text-primary-color">1/1 Signatures</div>
                <button
                  class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
                >
                  New Signature
                </button>
              </div>
              <div class="flex justify-center flex-wrap mt-10">
                <div
                  class="card m-2 h-[220px] w-[350px] bg-white shadow-lg border rounded-3xl"
                >
                  <div
                    class="w-full h-full px-6 text-center flex flex-col items-center justify-center"
                  >
                    <p class="text-base">
                      Upgrade your account to unlock Pro Features and create more
                      signatures..
                    </p>
                    <button
                      class="mt-3 py-2 px-4 bg-primary-color text-white font-medium rounded-xl"
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  