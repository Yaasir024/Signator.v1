<script setup>
const props = defineProps(['title'])
</script>
<template>
    <div class="w-full bg-white rounded-xl shadow-xl border">
    <div class="px-3 py-2 text-base font-medium border-b">{{title}}</div>
    <div class="px-5 pt-4 pb-8">
      <article>
        <ol class="font-light text-sm">
            <slot name="steps"></slot>
          
        </ol>
      </article>
    </div>
  </div>
</template>
