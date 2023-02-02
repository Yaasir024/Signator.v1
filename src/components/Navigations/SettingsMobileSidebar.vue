<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const path = route.name;
</script>

<template>
  <div class="bg-white border-t">
    <ul class="flex px-0 sm:px-12 text-sm">
      <li
        class="flex-1 h-[50px] cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:text-primary-color"
        v-if="path != 'profile'"
      >
        <RouterLink to="/profile/account"> Profile </RouterLink>
      </li>
      <li
        class="flex-1 h-[50px] cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:text-primary-color"
        v-if="path != ''"
      >
        <RouterLink to="/profile/subscription"> Subscription </RouterLink>
      </li>
      <li
        class="flex-1 h-[50px] cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:text-primary-color"
        v-if="path != 'billing-history'"
      >
        <RouterLink to="/profile/billing-history"> Billing History </RouterLink>
      </li>
    </ul>
  </div>
</template>
