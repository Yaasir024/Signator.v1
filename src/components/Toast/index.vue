<script setup>
import Error from "@/components/Toast/Error.vue";
import Success from "@/components/Toast/Success.vue";
import Default from "@/components/Toast/Default.vue";
import { systemStore } from "@/stores/system";
const useSystemStore = systemStore();
</script>

<template>
  <div class="toast">
    <div class="flex flex-col-reverse items-end" v-for="data in useSystemStore.toastData" :key="data.key">
      <Error v-if="data.type == 'Error'" />
      <Success v-if="data.type == 'Success'" />
      <Default v-if="data.type == 'Default'" />
    </div>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 15%;
  right: 20px;
}
</style>
