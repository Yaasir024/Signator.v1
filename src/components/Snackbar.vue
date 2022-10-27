<script setup>
import { ref, reactive} from "vue";
import { systemStore } from "@/stores/system";
const type = ref('error')
const useSystemStore = systemStore();
</script>
<template>
  <div class="snackbar">
    <div class="message">{{useSystemStore.notificationData.message}}</div>
    <div class="action">
      <button @click="useSystemStore.addNotificationData()">ok</button>
    </div>
  </div>
</template>
<style scoped>
.snackbar {
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -12%) !important;
  min-width: 350px;
  max-width: 600px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  border-radius: 4px;
  pointer-events: auto;
  background: #363636;
  color: #fff;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  /* padding: 0px 24px; */
}
.snackbar .message {
  padding: 8px 16px;
  font-weight: 400;
}
.snackbar .action {
  margin-left: auto;
  padding: 8px;
  padding-left: 0;
}
.snackbar .action button {
  font-weight: 600;
  text-transform: uppercase;
  padding: 7px 15px;
  cursor: pointer;
  background: #363636;
  color: #48c78e;
  transition: all .3s ease;
}
.snackbar .action button:hover{
  background: #292929;
}
.snackbar .action .error {
  color: #ffe08a;
}
</style>
