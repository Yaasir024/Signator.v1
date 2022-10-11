<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
const data = inject("data");

// Delete Addon
const deleteAddons = () => {
  delete data.addons.cta;
};
const showDetail = ref(true);
const toggleDetail = () => {
  showDetail.value = !showDetail.value;
};
</script>

<template>
  <!-- CTA -->
  <div class="mb-3 rounded-3xl shadow-lg border relative overflow-hidden">
    <div
      class="accordion flex items-center justify-between py-4 px-5 border-b cursor-pointer"
      @click="toggleDetail()"
    >
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.333 6.805l4.213 7.297-13.256 3.223c-.572.133-1.068.333-1.492.604l-.227-.393c.525-.293.929-.675 1.227-.993l9.535-9.738zm.332-2.626l-11.011 11.244c-.616.66-1.164.977-1.857.977-.244 0-.507-.04-.797-.117l2.646 4.585c.258-1.094.814-1.708 2.006-1.985l15.348-3.732-6.335-10.972zm.31 13.951l-.467 2.118c-.094.378-.391.674-.77.771l-2.951.774c-.365.095-.754-.012-1.018-.28l-1.574-1.712 1.605-.395.646.77c.176.177.433.248.675.186l1.598-.425c.252-.064.449-.261.511-.512l.161-.906 1.584-.389zm8.719-11.267l-2.684 1.613-.756-1.262 2.686-1.612.754 1.261zm-4.396-1.161l-1.335-.616 1.342-2.914 1.335.617-1.342 2.913zm5.619 6.157l-3.202-.174.081-1.469 3.204.175-.083 1.468z"
          />
        </svg>
        <span class="ml-3">Call To Action</span>
      </div>
      <!-- Close -->
      <div
        class="flex items-center justify-center cursor-pointer"
        @click="deleteAddons()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
          />
        </svg>
      </div>
    </div>
    <!-- Content -->
    <div
      class="overflow-hidden transition-all ease-in-out duration-300"
      :class="showDetail ? 'max-h-0' : 'max-h-[500px]'"
    >
      <div class="content py-7 px-5">
        <!-- Button URL -->
        <div class="flex items-center justify-between mt-4">
          <div class="w-[35%]">
            <span>Button Url</span>
          </div>
          <div class="w-[65%] pl-1">
            <input
              type="text"
              placeholder="Button url goes here"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-350"
              v-model="data.addons.cta.item.url"
            />
          </div>
        </div>
        <!-- Button Text -->
        <div class="flex items-center justify-between mt-4">
          <div class="w-[35%]">
            <span>Button Text</span>
          </div>
          <div class="w-[65%] pl-1">
            <input
              type="text"
              placeholder="Button text goes here"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-350"
              v-model="data.addons.cta.item.text"
            />
          </div>
        </div>
        <!-- Padding Top -->
        <div class="mt-6 mb-2">
          <div class="flex items-center justify-between">
            <span>Padding-Top</span>
            <span>{{ data.addons.cta.style.paddingTop }}px</span>
          </div>
          <input
            type="range"
            class=""
            min="5"
            max="20"
            v-model="data.addons.cta.style.paddingTop"
          />
        </div>
        <!-- Button Color -->
        <div class="flex items-center mb-5">
          <span class="w-[40%]">Button Color</span>

          <div
            class="relative w-9 h-9 rounded-full border"
            :style="{
              background: data.addons.cta.style.buttonColor,
            }"
          >
            <input
              type="color"
              class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
              v-model="data.addons.cta.style.buttonColor"
            />
          </div>
        </div>
        <!-- Text Color -->
        <div class="flex items-center mb-5">
          <span class="w-[40%]">Text Color</span>

          <div
            class="relative w-9 h-9 rounded-full border"
            :style="{
              background: data.addons.cta.style.textColor,
            }"
          >
            <input
              type="color"
              class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
              v-model="data.addons.cta.style.textColor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

