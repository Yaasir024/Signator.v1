<script setup>
const props = defineProps(["data", "color"]);
</script>
<template>
  <span style="display: inline-block; margin: 0px 5px"
    ><span :style="{ color: color }">
      <span v-if="data.design.details.label == 'full'">Email</span>
      <span v-if="data.design.details.label == 'initial'">E</span>
      <span v-if="data.design.details.label == 'icon'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          viewBox="0 0 512 512"
          style="display: inline-block"
        >
          <path
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          />
        </svg>
      </span>
    </span>
    {{ data.contactInfo.basicInfo.email }}</span
  >
</template>
