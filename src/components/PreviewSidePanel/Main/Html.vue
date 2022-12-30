<script setup>

const emits = defineEmits(['copy'])


</script>

<template>
  <article>
    <h2 class="text-xl font-medium mt-8">
        How do I set my HTML email signature code?
    </h2>
    <ol class="font-light text-sm my-2 px-3">
      <li class="item">
        Click on
        <span class="text-primary-color cursor-pointer" @click="$emit('copy')"
          >Copy to clipboard.</span
        >
      </li>
      <li class="item">
        Paste the signature where you want to use it.
      </li>
    </ol>
  </article>
</template>

<style scoped>
.item {
  padding-left: 15px;
  counter-increment: item;
  position: relative;
  line-height: 22.8px;
}
.item strong {
  font-weight: 600;
}
.item::before {
  position: absolute;
  left: 0;
  width: 12px;
  content: counter(item) ".";
}
</style>
