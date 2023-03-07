<script setup>
import { ref, onMounted, computed } from "vue";

import { useClickOutside } from "@/composables/useClickOutside";

import { templateStore } from "@/stores/Organization/templates";

import Fields from "@/components/Organization/Main/Templates/Fields/index.vue";
import LayoutResolver from "@/components/Organization/Layouts/LayoutResolver.vue";

const useTemplateStore = templateStore();
const data = computed(() => {
  return useTemplateStore.editTemplateData;
});

const menu = ref(null);
const menuVisibility = ref(false);
useClickOutside(menu, () => {
  menuVisibility.value = false;
});

// RENAME
const renameInputActive = ref(false);

const renameTemplate = () => {
  document.getElementById("renameInput").disabled = false;
  document.getElementById("renameInput").focus();
  menuVisibility.value = false;
  renameInputActive.value = true;
};

const closeRename = () => {
  document.getElementById("renameInput").disabled = true;
  document.getElementById("renameInput").blur();
  renameInputActive.value = false;
};

const deleteTemplate = () => {
  menuVisibility.value = false;
  useTemplateStore.showSidePanel = false;
};

const cancel = () => {
  useTemplateStore.showSidePanel = false;
};

const saveChanges = () => {
  useTemplateStore.showSidePanel = false;
};
</script>

<template>
  <section class="fixed top-0 right-0 h-full w-[550px] bg-white shadow-xl z-50">
    AAAA{{ useTemplateStore.editTemplateData }}
    <input type="text" v-model="useTemplateStore.editTemplateData.name" class="bg-red-400 h-4">
    <div class="h-full w-full flex flex-col" v-if="false">
      <div
        class="h-[64px] border-b flex items-center justify-between px-4 shrink-0"
      >
        <div
          class="max-w-[250px] flex items-center border rounded-md overflow-hidden"
          :class="renameInputActive ? 'border-gray-200' : 'border-transparent'"
        >
          <input
            type="text"
            id="renameInput"
            placeholder="Title"
            v-model="data.title"
            class="w-full px-4 py-1 outline-none text-base disabled:bg-transparent"
            disabled
          />
          <!--  -->
          <div
            class="cursor-pointer p-0.5 mr-1"
            v-if="renameInputActive"
            @click="closeRename()"
          >
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path
                d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
        <div class="relative" ref="menu">
          <button class="" @click="menuVisibility = !menuVisibility">
            <svg
              height="24"
              width="24"
              fill="currentColor"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm2.502 8.495c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z"
              />
            </svg>
          </button>
          <transition name="menu">
            <div
              class="absolute top-[30px] right-[-5px] z-50 w-[150px] min-h-[50px] py-1.5 bg-white shadow-xl border rounded-b-md"
              v-if="menuVisibility"
            >
              <ul class="">
                <li
                  class="py-1 px-3 cursor-pointer hover:bg-canvas-color flex items-center border-b"
                  @click="renameTemplate()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    data-v-7cce0a8e=""
                  >
                    <path
                      d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
                    ></path>
                  </svg>
                  <span class="ml-2 text-base"> Rename </span>
                </li>
                <li
                  class="py-1 px-3 cursor-pointer hover:bg-canvas-color flex items-center"
                  @click="useTemplateStore.deleteTemplate()"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <span class="ml-2 text-base"> Delete </span>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="h-[calc(100vh_-_64px_-_64px)] bg-white flex flex-col">
        <div class="h-[40%] border-b overflow-auto">
          <div class="px-2 py-1.5">
            <!-- <LayoutResolver :data="data" /> -->
          </div>
          {{ useTemplateStore.editTemplateData }}
        </div>
        <div class="h-[60%]">
          <Fields />
        </div>
      </div>
      <div
        class="h-[64px] border-t flex items-center justify-between px-6 shrink-0"
      >
        <button class="text-base py-1.5 px-4 text-red-600" @click="cancel()">
          Cancel
        </button>
        <button
          class="text-base py-1.5 px-4 text-white bg-primary-color"
          @click="useTemplateStore.saveTemplate()"
        >
          Save Changes
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Menu Animation */
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top right;
}

.menu-enter-from,
.menu-leave-to {
  transform: scale(0);
}
</style>
