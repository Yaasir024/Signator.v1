<script setup>
import Layout01 from "@/components/Editor/Main/Layout/01.vue";
import Layout02 from "@/components/Editor/Main/Layout/02.vue";
import Layout03 from "@/components/Editor/Main/Layout/03.vue";
import Layout04 from "@/components/Editor/Main/Layout/04.vue";
import Layout05 from "@/components/Editor/Main/Layout/05.vue";

const props = defineProps(["data"]);

const layouts = {
  Layout02,
  Layout03,
  Layout04,
  Layout05,
};
</script>

<template>
  <div class="w-full max-h-[300px] h-full flex flex-col py-1 px-4 overflow-hidden">
    <div class="">
      <component
        :is="layouts[data.design.layout.layout]"
        class="tab"
        :data="data"
      ></component>
    </div>
  </div>
</template>
