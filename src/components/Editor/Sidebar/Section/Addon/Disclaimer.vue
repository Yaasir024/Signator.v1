<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";

import { useClickOutside } from "@/composables/useClickOutside";
import addonData from "@/data/addons";

import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});

const props = defineProps(["addonType"]);

const disclaimer = computed(() => {
  return data.value.addons.find((item) => item.type == props.addonType);
});

// Delete Addon
const deleteAddons = () => {
  data.value.addons = data.value.addons.filter((item) => item.type != props.addonType);
};
const showDetail = ref(true);
const toggleDetail = () => {
  showDetail.value = !showDetail.value;
};

/*  Disclaimer ADDON  */
const disclaimerMenu = ref(false);
// Toggle Menu
const toggleDisclaimerMenu = () => {
  disclaimerMenu.value = !disclaimerMenu.value;
};

// Set
const setDisclaimer = (value) => {
  disclaimer.value.data.type = value;
  disclaimer.value.data.text = addonData.disclaimerData[value];
  // console.log(data.value.addons.disclaimer.text )
  // console.log(disclaimerData[value]);
  disclaimerMenu.value = false;
};
// Type Menu On Click Outside
const disclaimerMenuBar = ref(null);
useClickOutside(disclaimerMenuBar, () => {
  disclaimerMenu.value = false;
});
//

// Disclaimer Font
const disclaimerFontMenu = ref(false);
// Toggle Menu
const toggleFontDisclaimerMenu = () => {
  disclaimerFontMenu.value = !disclaimerFontMenu.value;
};
//
const setDisclaimerFont = (value) => {
  disclaimer.value.data.style.fontSize = value;
  disclaimerFontMenu.value = false;
};
//
const disclaimerFontMenuBar = ref(null);
useClickOutside(disclaimerFontMenuBar, () => {
  disclaimerFontMenu.value = false;
});
</script>

<template>
  <!-- Discalimer -->
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
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M10.052 19.001l.051.002.051.003.05.004.051.006.05.007.049.008.049.01.049.01.048.012.048.013.047.014.046.015.047.016.045.018.045.018.045.02.044.02.043.022.043.022.043.024.041.025.041.025.04.027.04.027.039.028.038.03.037.03.037.031.036.032.035.032.034.034.034.034.032.035.032.036.031.037.03.037.03.038.028.039.027.04.027.04.025.041.025.041.024.043.022.042.022.044.02.044.02.045.018.045.018.045.016.047.015.046.014.047.013.048.012.048.01.049.01.049.008.049.007.05.006.051.004.05.003.051.002.051.001.052v1h1v2h-13v-2h1v-1l.001-.052.002-.051.003-.051.004-.05.006-.051.007-.05.008-.049.01-.049.01-.049.012-.048.013-.048.014-.047.015-.046.016-.047.018-.045.018-.045.02-.045.02-.044.022-.044.022-.042.024-.043.025-.041.025-.041.027-.04.027-.04.028-.039.03-.038.03-.037.031-.037.032-.036.032-.035.034-.034.034-.034.035-.032.036-.032.037-.031.037-.03.038-.03.039-.028.04-.027.04-.027.041-.025.041-.025.043-.024.043-.022.043-.022.044-.02.045-.02.045-.018.045-.018.047-.016.046-.015.047-.014.048-.013.048-.012.049-.01.049-.01.049-.008.05-.007.051-.006.05-.004.051-.003.051-.002.052-.001h7l.052.001zm-7.039 1.999h-.013v1h7v-1h-6.987zm9.356-20.999l.05.001.05.003.049.005.049.005.049.007.049.007.048.009.048.011.048.011.047.012.047.014.046.014.046.016.046.017.045.018.045.019.044.021.044.021.043.022.043.024.042.025.041.025.041.027.041.028.039.029.039.029.039.031.038.032.037.033.036.034.036.035 4.949 4.949.035.036.034.036.033.038.032.037.031.039.03.039.029.04.027.04.027.042.026.041.024.042.024.043.022.043.022.044.02.044.019.045.018.045.017.046.016.046.015.046.013.047.012.047.012.048.01.048.009.048.007.049.007.048.005.049.005.05.003.049.001.05.001.05-.001.061-.003.061-.004.06-.006.06-.008.059-.01.058-.011.058-.013.057-.015.056-.016.056-.018.055-.019.054-.02.053-.023.053-.023.051-.025.051-.027.05-.027.05-.029.048-.031.047-.031.046-.033.046-.034.044-.036.044-.036.042-.038.041-.038.041-.04.039-.041.038-.041.037-.043.035-.044.035-.044.033-.046.032-.046.031-.047.029-.049.029-.048.027-.05.025-.05.024-.051.023-.052.021-.052.02-.053.019-.054.017-.054.016-.054.014-.056.012-.055.011-.056.009-.057.008-.057.006-.057.005-.057.003-.058.001-.058-.001-.059-.002-.058-.004-.059-.006-.059-.008-.059-.009-.059-.012-.06-.013-.059-.015-1.219 1.22 2.099 1.947 1.696 1.57 1.33 1.229 1.003.924.714.656.463.424.249.227.075.068.05.051.049.052.047.053.045.054.045.055.042.056.041.056.04.057.038.058.037.059.035.059.034.06.032.061.031.061.028.062.028.063.026.063.024.064.023.064.02.065.02.065.018.066.016.066.014.067.013.067.011.067.009.068.008.067.006.069.005.068.002.069.001.069-.001.073-.003.072-.005.072-.006.071-.009.071-.011.07-.012.07-.014.069-.016.069-.017.068-.02.068-.021.066-.022.067-.025.065-.026.065-.027.064-.029.063-.031.062-.032.061-.034.061-.035.06-.036.059-.038.057-.04.057-.041.056-.042.055-.043.054-.045.052-.046.052-.047.05-.049.05-.05.048-.05.047-.052.045-.054.045-.054.043-.055.042-.057.04-.057.039-.058.038-.06.036-.06.035-.061.034-.063.031-.063.031-.063.028-.065.028-.066.025-.066.024-.067.023-.068.02-.068.019-.069.017-.07.016-.071.013-.071.012-.071.01-.073.008-.072.006-.074.005-.073.002h-.074l-.075-.001-.075-.004-.063-.005-.062-.006-.062-.007-.062-.009-.062-.011-.061-.012-.061-.013-.061-.015-.06-.017-.06-.018-.06-.019-.059-.021-.059-.022-.059-.024-.058-.025-.058-.026-.057-.028-.057-.03-.056-.031-.056-.032-.056-.033-.055-.035-.054-.037-.054-.037-.054-.039-.053-.041-.052-.042-.052-.043-.051-.044-.051-.046-.05-.047-.049-.049-.042-.044-.075-.082-.241-.269-.349-.392-.437-.495-1.071-1.216-1.213-1.38-1.213-1.381-1.068-1.218-1.133-1.292-1.313 1.312.015.061.013.061.011.061.009.06.007.061.006.06.003.059.002.06.001.059-.002.059-.003.058-.005.058-.006.058-.009.057-.009.056-.012.056-.012.056-.015.055-.016.054-.017.054-.019.053-.02.052-.022.052-.023.051-.025.05-.026.049-.027.049-.028.048-.03.046-.031.047-.032.045-.034.044-.035.043-.035.042-.037.042-.039.04-.039.039-.04.038-.041.037-.043.036-.043.035-.045.033-.045.033-.046.031-.047.029-.048.029-.049.027-.05.026-.051.024-.051.023-.053.022-.053.02-.053.019-.055.017-.055.016-.056.014-.056.013-.057.011-.058.009-.058.008-.059.006-.059.004-.06.003-.06.001-.05-.001-.05-.002-.05-.003-.05-.004-.049-.005-.049-.007-.048-.008-.049-.009-.048-.01-.047-.011-.047-.013-.047-.014-.047-.014-.046-.016-.045-.017-.045-.018-.045-.019-.044-.021-.044-.021-.043-.022-.043-.024-.042-.025-.041-.025-.041-.027-.041-.028-.039-.029-.04-.029-.038-.031-.038-.032-.037-.033-.036-.034-.036-.035-4.949-4.948-.004-.004-.035-.036-.033-.036-.033-.038-.032-.038-.031-.038-.029-.039-.029-.04-.028-.041-.026-.041-.026-.041-.024-.042-.023-.043-.023-.043-.021-.043-.02-.045-.019-.044-.018-.045-.017-.046-.015-.045-.015-.047-.013-.046-.013-.047-.011-.048-.01-.047-.009-.048-.008-.049-.006-.048-.005-.049-.005-.049-.003-.05-.001-.049-.001-.05.001-.05.001-.049.003-.05.004-.049.006-.049.006-.049.008-.048.009-.048.01-.048.011-.047.012-.047.014-.047.014-.047.016-.046.017-.045.018-.045.019-.045.02-.044.021-.044.023-.043.023-.043.025-.042.025-.042.027-.041.028-.04.029-.04.029-.04.031-.038.032-.038.033-.038.034-.036.035-.036.051-.049.052-.047.054-.045.054-.042.055-.041.056-.038.058-.036.058-.034.058-.032.06-.029.06-.028.061-.025.061-.023.062-.021.062-.019.063-.017.063-.015.063-.013.063-.01.064-.009.064-.006.063-.005.064-.002.064-.001.063.002.064.004.063.005.063.008.063.009.062.012.062.013.061.016 5.679-5.679-.016-.062-.013-.063-.012-.063-.01-.063-.007-.064-.006-.064-.003-.064-.002-.064.001-.064.003-.064.004-.064.007-.063.009-.064.011-.063.013-.063.015-.063.017-.063.019-.062.021-.061.023-.061.025-.06.028-.06.029-.059.032-.058.033-.057.036-.057.038-.055.04-.055.042-.053.044-.053.046-.051.048-.05.036-.035.036-.034.037-.033.038-.032.039-.031.039-.03.04-.029.04-.028.041-.027.042-.025.042-.025.043-.024.043-.022.044-.022.044-.02.045-.019.045-.018.046-.017.046-.016.046-.015.047-.013.047-.013.048-.011.048-.01.048-.009.049-.008.049-.007.049-.005.049-.005.05-.003.05-.001.05-.001.05.001zm-5.349 8.712l3.536 3.537 1.773-1.774 1.107 1.211 2.532 2.775 1.432 1.57 1.345 1.478.594.654.518.571.421.466.308.343.028.032.029.032.031.031.033.029.034.029.035.027.037.026.038.024.038.023.04.02.04.018.041.016.041.013.042.01.021.004.021.003.021.002.021.002.027.001.026.001.025-.001.025-.001.024-.003.024-.002.024-.004.023-.004.044-.011.041-.012.04-.015.037-.016.035-.017.033-.018.03-.019.029-.019.025-.019.024-.019.021-.018.018-.017.029-.028.027-.029.026-.031.023-.031.023-.032.02-.033.018-.034.017-.035.015-.035.013-.035.011-.037.009-.036.008-.037.005-.037.003-.038.001-.037-.001-.038-.003-.039-.005-.038-.007-.037-.009-.037-.011-.037-.014-.037-.015-.036-.016-.035-.019-.035-.021-.034-.022-.034-.025-.034-.026-.032-.028-.033-.03-.031-.078-.07-.041-.034-.024-.02-.016-.015-.189-.174-.217-.202-.242-.226-.265-.25-.591-.559-.656-.625-.705-.674-.735-.705-.748-.719-.744-.717-1.405-1.356-1.177-1.138-1.11-1.076 1.634-1.635-3.537-3.536-3.882 3.884zm-1.415 1.415l-1.411.003-.001.001 4.947 4.946.001-1.413-3.535-3.537h-.001zm6.714-6.716l-.002.003 3.536 3.536.002-.002 1.412-.002-4.948-4.948v1.413z"
          />
        </svg>
        <span class="ml-3">Disclaimer</span>
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
          <!-- Disclaimer Type -->
          <div class="item flex items-center justify-between mb-5">
            <label class="w-[35%]">Type</label>
            <div class="relative max-w-[65%] w-full" ref="disclaimerMenuBar">
              <div
                class="w-full bg-canvas-color flex items-center justify-between py-2 px-4 border rounded-2xl cursor-pointer capitalize"
                @click="toggleDisclaimerMenu()"
              >
                {{ disclaimer.data.type || "Select Type" }}
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
                  v-if="disclaimerMenu"
                >
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimer('confidentiality')"
                  >
                    <span>Confidentiality</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimer('GDPR')"
                  >
                    <span>GDPR</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimer('Non-binding')"
                  >
                    <span>Non-binding</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimer('Personal Opinion')"
                  >
                    <span>Personal Opinion</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimer('security')"
                  >
                    <span>Security</span>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <textarea
            maxlength="3000"
            rows="9"
            v-model="disclaimer.data.text"
            class="w-full border p-4 text-sm leading-4 bg-canvas-color rounded-2xl resize-none outline-none"
          ></textarea>
        </div>
        <div class="styles my-5">
          <!-- Font Size -->
          <div class="item flex items-center justify-between mb-5">
            <label class="w-[35%]">Font Size</label>
            <div
              class="relative max-w-[65%] w-full"
              ref="disclaimerFontMenuBar"
            >
              <div
                class="w-full bg-canvas-color flex items-center justify-between py-2 px-4 border rounded-2xl cursor-pointer"
                @click="toggleFontDisclaimerMenu()"
              >
                {{ disclaimer.data.style.fontSize }}
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
                  v-if="disclaimerFontMenu"
                >
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimerFont('Medium')"
                  >
                    <span>Medium</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimerFont('Small')"
                  >
                    <span>Small</span>
                  </div>
                  <div
                    class="py-1 px-4 border-b cursor-pointer hover:bg-canvas-color"
                    @click="setDisclaimerFont('X-small')"
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
                background: disclaimer.data.style.textColor,
              }"
            >
              <input
                type="color"
                class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                v-model="disclaimer.data.style.textColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
