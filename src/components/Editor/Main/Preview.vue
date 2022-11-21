<script setup>
import { ref, reactive, computed } from "vue";
import Layout01 from "@/components/Editor/Main/Layout/01.vue";
import Layout02 from "@/components/Editor/Main/Layout/02.vue";
import Layout03 from "@/components/Editor/Main/Layout/03.vue";
import Layout04 from "@/components/Editor/Main/Layout/04.vue";
import Layout05 from "@/components/Editor/Main/Layout/05.vue";
import Layout06 from "@/components/Editor/Main/Layout/06.vue";
const prop = defineProps(["data"]);

const layouts = {
  Layout01,
  Layout02,
  Layout03,
  Layout04,
  Layout05,
  Layout06,
};
</script>

<template>
  <div
    class="max-w-[615px] mx-auto overflow-hidden mt-11 my-4 bg-white shadow-lg border rounded-3xl"
  >
    <div class="flex flex-col flex-auto">
      <div class="header px-7 py-4 border-b bg-white shadow-md text-lg">Preview Signature</div>
      <div class="preview max-h-[450px] overflow-y-auto overflow-x-hidden">
        <div class="px-8 py-3">
          <div class="pb-1 mb-1 border-b">From:</div>
          <div class="pb-1 mb-1 border-b">To:</div>
          <div class="pb-1 mb-1 border-b">Subject:</div>
        </div>
        <div class="sig-preview pt-1 px-9 mb-10">
          <!-- <component
            :is="layouts[data.design.layout.layout]"
            class="tab"
            :data="data"
          ></component> -->
          {{data.addons}}
        </div>
        <!-- <div class="sig-preview pt-7 px-9 mb-10">
          <component
            :is="layouts[data.design.layout.layout]"
            class="tab"
            :data="data"
          ></component>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
}

.preview::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background: #F5F5F5; 
}

.preview::-webkit-scrollbar-thumb {
  background-color: darkgrey;    /* color of the scroll thumb */
  border-bottom-right-radius: 20px;       /* roundness of the scroll thumb */
  /* border: 1px solid slategray;  creates padding around scroll thumb */
}
</style>