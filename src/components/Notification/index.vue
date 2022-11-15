<script setup>
import { ref, reactive, computed } from "vue";
import notification from "@/data/notification";
</script>

<template>
  <div class="modal fixed max-w-[400px] w-full h-[65vh] z-50">
    <div class="bg-white shadow-lg border h-full">
      <div class="py-3 px-4 border-b">New Releases and Updates</div>
      <div class="" v-for="data in notification.data" :key="data.id">
        {{data}}
        {{data.title}}
    </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%) !important;
}
</style>
