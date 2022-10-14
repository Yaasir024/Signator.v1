<script setup>
import { ref, reactive, computed, } from "vue";
import Layout01 from "@/components/Editor/Main/Layout/01.vue";
import Layout02 from "@/components/Editor/Main/Layout/02.vue";
import Layout03 from "@/components/Editor/Main/Layout/03.vue";
import Layout04 from "@/components/Editor/Main/Layout/04.vue";
import Layout05 from "@/components/Editor/Main/Layout/05.vue";
const prop = defineProps(["data"]);

const layouts = {
  Layout02,
  Layout03,
  Layout04,
  Layout05
}

</script>

<template>
  <div class="max-w-[650px] mx-auto my-4 bg-white shadow-lg border rounded-3xl">
    <div class="">
      <div class="header px-7 py-4 border-b text-lg">Preview Signature</div>
      <div class="preview">
        <div class="sig-preview pt-7 px-9 mb-10">
          <component :is="layouts[data.design.layout.layout]" class="tab" :data="data"></component>
        </div>
      </div>
    </div>
  </div>
</template>
