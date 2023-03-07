<script setup>
import { dashboardStore } from "@/stores/Organization/dashboard";

import Employees from "@/components/Organization/Main/Employee/index.vue";
import CompanyDetails from "@/components/Organization/Main/CompanyDetails/index.vue";
import Groups from "@/components/Organization/Main/Groups/index.vue";
import Templates from "@/components/Organization/Main/Templates/index.vue";

const useDashboardStore = dashboardStore();
</script>

<template>
  <main class="w-full h-full overflow-y-auto">
    {{ useDashboardStore.currentSection }}
    <Employees v-if="useDashboardStore.currentSection == 'employees'"/>
    <CompanyDetails v-if="useDashboardStore.currentSection == 'companyDetails'" />
    <Groups v-if="useDashboardStore.currentSection == 'groups'" />
    <Templates v-if="useDashboardStore.currentSection == 'templates'" />
  </main>
</template>
