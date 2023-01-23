<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
import { useClickOutside } from "@/composables/useClickOutside";
import addonData from "@/data/addons";
const data = inject("data");

const props = defineProps(["addonType"]);

const greenMessage = computed(() => {
  return data.addons.find((item) => item.type == props.addonType);
});

// Delete Addon
const deleteAddons = () => {
  data.addons = data.addons.filter((item) => item.type != props.addonType);
};

const showDetail = ref(true);
const toggleDetail = () => {
  showDetail.value = !showDetail.value;
};
const greenMessageMenu = ref(false);
// Toggle Menu
const toggleGreenMessageMenu = () => {
  greenMessageMenu.value = !greenMessageMenu.value;
};
// Set Message
const setGreenMessage = (value) => {
  greenMessage.value.data.items.type = value;
  greenMessage.value.data.items.text = addonData.greenMessageData[value];
  // console.log(greenMessageData[value]);
  greenMessageMenu.value = false;
};
// Menu On Click Outside
const greenMessageMenuBar = ref(null);
useClickOutside(greenMessageMenuBar, () => {
  greenMessageMenu.value = false;
});
// Font
const greenMessageFontMenu = ref(false);
// Toggle Menu
const toggleFontGreenMessageMenu = () => {
  greenMessageFontMenu.value = !greenMessageFontMenu.value;
};
//
const setGreenMessageFont = (value) => {
  greenMessage.value.data.style.fontSize = value;
  greenMessageFontMenu.value = false;
};
//
const greenMessageFontMenuBar = ref(null);
useClickOutside(greenMessageFontMenuBar, () => {
  greenMessageFontMenu.value = false;
});
</script>

<template>
  <!-- Green Message -->
  <div
    class="rounded-3xl shadow-lg border relative overflow-hidden w-full"
    :class="showDetail ? 'mb-5' : 'mb-12'"
  >
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
            d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z"
          />
        </svg>
        <span class="ml-3">Green Message</span>
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
      :class="showDetail ? 'max-h-0' : 'max-h-[500px]'"
    >
      <div class="content py-7 px-5">
        <div class="">
          <!-- Green Message Type -->
          <div class="item flex items-center justify-between mb-5">
            <label class="w-[35%]">Type</label>
            <div class="relative max-w-[65%] w-full" ref="greenMessageMenuBar">
              <div
                class="w-full bg-canvas-color flex items-center justify-between py-2 px-4 border rounded-2xl cursor-pointer capitalize"
                @click="toggleGreenMessageMenu()"
              >
                <span v-if="greenMessage.data.items.type"
                  >Green Message {{ greenMessage.data.items.type }}</span
                >
                <span v-else>Choose Message</span>
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
                  v-if="greenMessageMenu"
                >
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessage('1')"
                  >
                    <span>Green Message 1</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessage('2')"
                  >
                    <span>Green Message 2</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessage('3')"
                  >
                    <span>Green Message 3</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessage('4')"
                  >
                    <span>Green Message 4</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessage('5')"
                  >
                    <span>Green Message 5</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessage('6')"
                  >
                    <span>Green Message 6</span>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <textarea
            maxlength="3000"
            rows="6"
            v-model="greenMessage.data.items.text"
            class="w-full border p-4 text-sm leading-4 bg-canvas-color rounded-2xl resize-none outline-none"
          ></textarea>
          <!-- Icons -->
          <div class="flex flex-wrap justify-center py-4 px-2">
            <div
              class="flex items-center justify-center m-1 w-[36px] h-[36px] border-2 rounded-lg cursor-pointer"
              @click="greenMessage.data.items.icon = ''"
              :class="
                greenMessage.data.items.icon == '' ? 'border-primary-color' : ''
              "
            >
              <img src="//images/greenMessage/none.svg" alt="" />
            </div>
            <div
              class="flex items-center justify-center m-1 w-[36px] h-[36px] border-2 rounded-lg cursor-pointer"
              @click="greenMessage.data.items.icon = '1.svg'"
              :class="
                greenMessage.data.items.icon == '1.svg'
                  ? 'border-primary-color'
                  : ''
              "
            >
              <img src="//images/greenMessage/1.svg" alt="" />
            </div>
            <div
              class="flex items-center justify-center m-1 w-[36px] h-[36px] border-2 rounded-lg cursor-pointer"
              @click="greenMessage.data.items.icon = '2.svg'"
              :class="
                greenMessage.data.items.icon == '2.svg'
                  ? 'border-primary-color'
                  : ''
              "
            >
              <img src="//images/greenMessage/2.svg" alt="" />
            </div>
            <div
              class="flex items-center justify-center m-1 w-[36px] h-[36px] border-2 rounded-lg cursor-pointer"
              @click="greenMessage.data.items.icon = '3.svg'"
              :class="
                greenMessage.data.items.icon == '3.svg'
                  ? 'border-primary-color'
                  : ''
              "
            >
              <img src="//images/greenMessage/3.svg" alt="" />
            </div>
            <div
              class="flex items-center justify-center m-1 w-[36px] h-[36px] border-2 rounded-lg cursor-pointer"
              @click="greenMessage.data.items.icon = '4.svg'"
              :class="
                greenMessage.data.items.icon == '4.svg'
                  ? 'border-primary-color'
                  : ''
              "
            >
              <img src="//images/greenMessage/4.svg" alt="" />
            </div>
            <div
              class="flex items-center justify-center m-1 w-[36px] h-[36px] border-2 rounded-lg cursor-pointer"
              @click="greenMessage.data.items.icon = '5.svg'"
              :class="
                greenMessage.data.items.icon == '5.svg'
                  ? 'border-primary-color'
                  : ''
              "
            >
              <img src="//images/greenMessage/5.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="styles my-5">
          <!-- Font Size -->
          <div class="item flex items-center justify-between mb-5">
            <label class="w-[35%]">Font Size</label>
            <div
              class="relative max-w-[65%] w-full"
              ref="greenMessageFontMenuBar"
            >
              <div
                class="w-full bg-canvas-color flex items-center justify-between py-2 px-4 border rounded-2xl cursor-pointer"
                @click="toggleFontGreenMessageMenu()"
              >
                {{ greenMessage.data.style.fontSize }}
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
                  v-if="greenMessageFontMenu"
                >
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessageFont('Medium')"
                  >
                    <span>Medium</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessageFont('Small')"
                  >
                    <span>Small</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setGreenMessageFont('X-small')"
                  >
                    <span>X-small</span>
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
                background: greenMessage.data.style.textColor,
              }"
            >
              <input
                type="color"
                class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                v-model="greenMessage.data.style.textColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
