<script setup>
const props = defineProps(["checked"]);
const emits = defineEmits(["clicked"]);
</script>

<template>
  <span
    class="checkbox"
    :class="checked ? 'checked' : ''"
    @click="$emit('clicked')"
  >
    <svg
      v-if="checked"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="#ffffff"
      viewBox="0 0 24 24"
    >
      <path
        d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"
      />
    </svg>
  </span>
</template>

<style scoped>
.checkbox {
  cursor: pointer;
  display: block;
  height: 20px;
  width: 20px;
  border: 2px solid #87ceeb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox svg {
  display: none;
}
.checkbox.checked {
  background: #87ceeb;
}
.checkbox.checked svg {
  display: block;
}
</style>
