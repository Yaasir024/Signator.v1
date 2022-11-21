<script setup>
import { ref, reactive, computed, toRef, toRefs, inject } from "vue";
const bata = inject('bata')

const part = computed(() => {
    return bata.find(x => x.part == 'side')
})
</script>

<template>
    <div class="bg-green-600 text-white py-8 px-14">
        AAAAAAAAAAAA
        {{bata}}
        <input type="text" v-model="part.age" class="bg-canvas-color text-red-600">
    </div>
</template>