<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
        <div class="py-14 px-5">

            <div class="max-w-[900px] mx-auto bg-white rounded-lg shadow-lg border flex">
              <div class="left w-[500px] pt-10 pb-8 px-5 border-r ">
                <div class="text-center">
                    <div class="">
                        <span class="text-4xl font-semibold">$4</span>
                        <sub class="text-lg font-semibold bottom-[-0.1em]">/mo</sub>
                    </div>
                    <div class="">billed annually</div>
                </div>
                <div class="mt-5 pl-4">
                    <ul class="text-base font-normal leading-8">
                        <li class="feature relative pl-5">
                            Premium templates
                        </li>
                        <li class="feature relative pl-5">
                            All premium addons
                        </li>
                        <li class="feature relative pl-5">
                            No Signator Watermark
                        </li>
                        <li class="feature relative pl-5">
                            Banner Feature
                        </li>
                        <li class="feature relative pl-5">
                            More Designs and Stying options
                        </li>
                    </ul>
                </div>
              </div>
              <div class="w-full bg-red-200"></div>
            </div>
        </div>
    </main>
  </div>
</template>


<style scoped>
.feature::before {
    display: block;
    position: absolute;
    content: url(/icons/check.svg);
    left: -4px;
}
</style>