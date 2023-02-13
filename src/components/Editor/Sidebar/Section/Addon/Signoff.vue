<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
import { useClickOutside } from "@/composables/useClickOutside";

import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});

// Delete Addon
const deleteAddons = () => {
  data.signoff = {};
};
const showSignoff = ref(true);
const toggleSignoffDetail = () => {
  showSignoff.value = !showSignoff.value;
};
// Font Menu
const signoffFontMenu = ref(false);
// Toggle Font Menu
const toggleSignoffFontMenu = () => {
  signoffFontMenu.value = !signoffFontMenu.value;
};
// Set Font
const setSignoffFont = (font) => {
  data.signoff.style.fontFamily = font;
  signoffFontMenu.value = false;
};
// FontMenu On Click Outside
const signoffFontMenuBar = ref(null);
useClickOutside(signoffFontMenuBar, () => {
  signoffFontMenu.value = false;
});
</script>

<template>
  <!-- Sign Off -->
  <div
    class="rounded-3xl shadow-lg border relative overflow-hidden"
    :class="showSignoff ? 'mb-5' : 'mb-12'"
  >
    <div
      class="accordion flex items-center justify-between py-4 px-5 border-b cursor-pointer"
      @click="toggleSignoffDetail()"
    >
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.473 9.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-19.946 16.867h4v-1h-4v1z"
          />
        </svg>
        <span class="ml-3">SignOff</span>
      </div>
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
    <div
      class="overflow-hidden transition-all ease-in-out duration-300"
      :class="showSignoff ? 'max-h-0' : 'max-h-[500px]'"
    >
      <div class="content py-7 px-5">
        <div class="options mb-2">
          <div class="flex flex-wrap">
            <div class="flex items-center flex-50% p-1 text-lg cursor-pointer">
              <input
                type="radio"
                id="best-regards"
                value="Best Regards,"
                v-model="data.signoff.value"
              />
              <label for="best-regards" class="ml-1">Best Regards,</label>
            </div>
            <div class="flex items-center flex-50% p-1 text-lg cursor-pointer">
              <input
                type="radio"
                id="best"
                value="Best,"
                v-model="data.signoff.value"
              />
              <label for="best" class="ml-1">Best,</label>
            </div>
            <div class="flex items-center flex-50% p-1 text-lg cursor-pointer">
              <input
                type="radio"
                id="best-wishes"
                value="Best Wishes,"
                v-model="data.signoff.value"
              />
              <label for="best-wishes" class="ml-1">Best Wishes,</label>
            </div>
            <div class="flex items-center flex-50% p-1 text-lg cursor-pointer">
              <input
                type="radio"
                id="regards"
                value="Regards,"
                v-model="data.signoff.value"
              />
              <label for="regards" class="ml-1">Regards,</label>
            </div>
            <div class="flex items-center flex-50% p-1 text-lg cursor-pointer">
              <input
                type="radio"
                id="thanks"
                value="Thanks,"
                v-model="data.signoff.value"
              />
              <label for="thanks" class="ml-1">Thanks,</label>
            </div>
            <div class="flex items-center flex-50% p-1 text-lg cursor-pointer">
              <input
                type="radio"
                id="sincerely"
                value="Sincerely,"
                v-model="data.signoff.value"
              />
              <label for="sincerely" class="ml-1">Sincerely,</label>
            </div>
          </div>
        </div>
        <div class="styles my-5">
          <!-- Font Family -->
          <div class="item flex items-center justify-between mb-5">
            <label class="w-[35%]">Font Family</label>
            <div class="relative max-w-[65%] w-full" ref="signoffFontMenuBar">
              <div
                class="w-full bg-canvas-color flex items-center justify-between py-2 px-4 border rounded-2xl cursor-pointer"
                :style="{
                  'font-family': data.signoff.style.fontFamily,
                }"
                @click="toggleSignoffFontMenu()"
              >
                {{ data.signoff.style.fontFamily }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21l-12-18h24z" />
                </svg>
              </div>
              <transition name="menu">
                <div
                  class="absolute top-[45px] left-0 z-30 w-full bg-white shadow border rounded-b-2xl overflow-hidden"
                  v-if="signoffFontMenu"
                >
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    style="font-family: Arial"
                    @click="setSignoffFont('Arial')"
                  >
                    <span>Arial</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    style="font-family: Arial Black"
                    @click="setSignoffFont('Arial Black')"
                  >
                    <span>Arial Black</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    style="font-family: cursive"
                    @click="setSignoffFont('cursive')"
                  >
                    <span>Cursive</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    style="font-family: Sans Serif"
                    @click="setSignoffFont('Sans Serif')"
                  >
                    <span>Sans Serif</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    style="font-family: Verdana"
                    @click="setSignoffFont('Verdana')"
                  >
                    <span>Verdana</span>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <!-- Text Color -->
          <div class="flex items-center mb-5">
            <span class="w-[40%]">Text Color</span>

            <div
              class="relative w-9 h-9 rounded-full border"
              :style="{
                background: data.signoff.style.color,
              }"
            >
              <input
                type="color"
                class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                v-model="data.signoff.style.color"
              />
            </div>
          </div>
          <!-- Font Size -->
          <div class="mb-5">
            <div class="flex items-center justify-between">
              <span>Font Size</span>
              <span>{{ data.signoff.style.fontSize }}px</span>
            </div>
            <input
              type="range"
              class=""
              min="13"
              max="20"
              v-model="data.signoff.style.fontSize"
            />
          </div>
          <!-- Alignment -->
          <div class="mb-5 flex items-center justify-between">
            <p>Alignment</p>
            <div class="h-[45px] w-[150px]">
              <div class="flex my-1 bg-white border rounded-md shadow-lg">
                <button
                  class="flex-33.33% flex items-center justify-center h-[35px] border-r hover:text-primary-color transition-all duration-200 ease-in-out"
                  :class="
                    data.signoff.style.alignment == 'left'
                      ? 'text-primary-color'
                      : ''
                  "
                  @click="data.signoff.style.alignment = 'left'"
                >
                  <span
                    ><svg
                      clip-rule="evenodd"
                      height="20"
                      width="20"
                      fill="currentColor"
                      fill-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m15 17.75c0-.414-.336-.75-.75-.75h-11.5c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75zm7-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                        fill-rule="nonzero"
                      /></svg
                  ></span>
                </button>
                <button
                  class="flex-33.33% flex items-center justify-center h-[35px] border-r hover:text-primary-color transition-all duration-200 ease-in-out"
                  :class="
                    data.signoff.style.alignment == 'center'
                      ? 'text-primary-color'
                      : ''
                  "
                  @click="data.signoff.style.alignment = 'center'"
                >
                  <span
                    ><svg
                      clip-rule="evenodd"
                      height="20"
                      width="20"
                      fill="currentColor"
                      fill-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                        fill-rule="nonzero"
                      /></svg
                  ></span>
                </button>
                <button
                  class="flex-33.33% flex items-center justify-center h-[35px] border-r hover:text-primary-color transition-all duration-200 ease-in-out"
                  :class="
                    data.signoff.style.alignment == 'end'
                      ? 'text-primary-color'
                      : ''
                  "
                  @click="data.signoff.style.alignment = 'end'"
                >
                  <span
                    ><svg
                      clip-rule="evenodd"
                      height="20"
                      width="20"
                      fill="currentColor"
                      fill-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m7 17.75c0-.414.336-.75.75-.75h13.5c.414 0 .75.336.75.75s-.336.75-.75.75h-13.5c-.414 0-.75-.336-.75-.75zm-5-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm9-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-7-4c0-.414.336-.75.75-.75h16.5c.414 0 .75.336.75.75s-.336.75-.75.75h-16.5c-.414 0-.75-.336-.75-.75z"
                        fill-rule="nonzero"
                      /></svg
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
