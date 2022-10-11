<script setup>
const props = defineProps(["icon", "data"]);
</script>

<template>
  <div
    style="display:flex; align-items: center; justify-content: center; cursor:pointer"
    :style=" {height: data.size + 'px', width: data.size + 'px', borderRadius: data.roundness + '%'} "
    :class="icon"
    :title="icon"
  >
    <img
      :src="'/icons/social/' + icon + '.svg'"
      class="h-[16px] w-[16px] fill-white"
      style="height: 14px; width: 14px;"
      alt=""
    />
  </div>
</template>
