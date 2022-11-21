<script setup>
import Test2 from "@/components/Test2.vue";
import { ref, reactive, computed, toRef, toRefs, provide } from "vue";

const props = defineProps(['data'])
const datas = toRef(props, 'data')
const {data: data2} = toRefs(props)

const dita = ref([
    {
        age: 1,
        part:'up'
    },
    {
        age: 2,
        part:'down'
    },
    {
        age: 3,
        part:'side'
    }
])
const part = computed(() => {
    return dita.value.find(x => x.part == 'side')
})
provide(/* key */ 'bata', /* value */ dita.value)
</script>

<template>
    {{dita}} <br>
    /Part/ <br>
    {{part}} <br>
    <div class="">
        <input type="text" v-model="part.age" class="bg-canvas-color text-red-600">
    </div>
    <!-- <input type="text" v-model="" class="bg-canvas-color"> -->
    
    <!-- <input type="text" v-model="data" class="bg-canvas-color"> -->
    <Test2 />
</template>