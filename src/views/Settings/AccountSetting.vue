<script setup>
import Navbar from "@/components/Navigations/Navbar.vue";
import Sidebar from "@/components/SidebarSetting.vue";
</script>

<template>
  <section class="text-lg h-screen overflow-hidden">
    <Navbar />
    <div class="h-full overflow-hidden">
      <div class="h-full flex">
        <Sidebar />
        <div class="h-full w-full">
          <div class="overflow-y-auto min-h-screen px-12">
            <div class="py-6">
              <h1 class="text-4xl font-semibold">Account Settings</h1>
              <p class="">View and Update your account details and profiles.</p>
            </div>
            <div class="max-w-3xl mx-auto bg-white shadow-2xl h-24 w-full">
              <div class="bg-red-200 px-4 py-6">
                <h2>Basic Information</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
