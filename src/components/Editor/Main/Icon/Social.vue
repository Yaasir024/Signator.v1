<script setup>
import socialData from "@/data/social";
const props = defineProps(["icon", "data"]);
const getColor = (social) => {
  let result = socialData.socialIcons.find((item) => item.name === social);
  return result.color;
};
</script>

<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    "
    :style="{
      height: data.size + 'px',
      width: data.size + 'px',
      borderRadius: data.roundness + '%',
      background: getColor(icon),
    }"
    :title="icon"
  >
    <img
      :src="'/icons/social/' + icon + '.svg'"
      class="h-[16px] w-[16px] fill-white"
      style="height: 14px; width: 14px"
      alt=""
    />
  </div>
</template>
