<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { detailsStore } from "@/stores/teams/dashboard/details";

import Employees from "@/components/Organization/Main/Employee/index.vue";
import CompanyDetails from "@/components/Organization/Main/CompanyDetails/index.vue";
import Groups from "@/components/Organization/Main/Groups/index.vue";
import Templates from "@/components/Teams/Dashboard/Main/Templates/index.vue";

const useDetails = detailsStore();
</script>

<template>
  <main class="w-full h-full overflow-y-auto">
    <!-- <Employees v-if="useDetails.currentSection == 'employees'"/> -->
    <!-- <CompanyDetails v-if="useDetails.currentSection == 'companyDetails'" /> -->
    <!-- <Groups v-if="useDetails.currentSection == 'groups'" /> -->
    <Templates v-if="useDetails.currentSection == 'templates'" />
  </main>
</template>
