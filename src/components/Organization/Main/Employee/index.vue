<script setup>
import { ref, onMounted, computed } from "vue";

import Table from "@/components/Organization/Main/Employee/Table.vue";
import Checkbox from "@/components/Organization/Checkbox.vue";
</script>

<template>
  <div class="py-10 px-8">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-medium">Employees</h1>
      <div class="">
        <button class="py-1.5 px-4 bg-primary-color text-white text-lg">
          Add Employee
        </button>
      </div>
    </div>
    <Table />
  </div>
</template>
