<script setup>
import socialData from "@/data/social";
const props = defineProps(["icon"]);

const getColor = (social) => {
  let result = socialData.socialIcons.find((item) => item.name === social);
  return result.color;
};
</script>

<template>
  <div
    class="w-[35px] h-[35px] flex items-center justify-center rounded-lg cursor-pointer"
    :class="icon"
    :title="icon"
    :style="{ background: getColor(icon) }"
  >
    <img
      :src="'/icons/social/' + icon + '.svg'"
      class="h-[16px] w-[16px] fill-white"
      alt=""
    />
  </div>
</template>
