<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { detailsStore } from "@/stores/teams/dashboard/details";

import { useRoute } from "vue-router";

import Header from "@/components/Teams/Dashboard/Header.vue";
import Sidebar from "@/components/Teams/Dashboard/Sidebar/index.vue";
import Main from "@/components/Teams/Dashboard/Main/index.vue";

const useDetails = detailsStore();
const route = useRoute();
</script>

<template>
  <div class="" v-if="useDetails.teamData.status">
    <Header />
    <div class="h-[calc(100vh_-_64px)] bg-white overflow-hidden">
      <section class="h-full w-full flex">
        <Sidebar />
        <Main />
      </section>
    </div>
  </div>
</template>
