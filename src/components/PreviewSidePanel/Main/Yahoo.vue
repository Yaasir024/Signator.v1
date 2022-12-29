<script setup>
const emits = defineEmits(["copy"]);
</script>

<template>
  <article>
    <h2 class="text-xl font-medium mt-8">
      How do I add my new email signature to Yahoo?
    </h2>
    <ol class="font-light text-sm my-2 px-3">
      <li class="item">Create an email signature with Signator editor.</li>
      <li class="item">
        Click on
        <span class="text-primary-color cursor-pointer" @click="$emit('copy')"
          >Copy to clipboard.</span
        >
      </li>
      <li class="item">Go to <span class="text-primary-color">Gmail</span></li>
      <li class="item">
        Click <strong>Settings</strong> in the top right, then
        <strong>More Settings > Writing emails</strong>.
      </li>
      <li class="item">
        Click checkbox button opposite your email and paste your signature using
        <strong>(Ctrl+V or Command+V)</strong> into the textarea.
      </li>
      <li class="item">
        At the bottom of the page, click
        <strong>Save Changes</strong>.
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
