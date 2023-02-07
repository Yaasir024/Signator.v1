<script setup>
import { ref, reactive, computed, inject } from "vue";

import { editorStore } from "@/stores/editor";

import axios from "axios";
import { useDebouncedRefHistory, useStorage } from "@vueuse/core";

import { useClickOutside } from "@/composables/useClickOutside";

const data = inject("data");
const useEditorStore = editorStore();

const toolMenuVisibility = ref(false);

const toolMenu = ref(null);
useClickOutside(toolMenu, () => {
  toolMenuVisibility.value = false
});

// RENAME
const rename = () => {
  document.getElementById("renameInput").disabled = false;
  document.getElementById("renameInput").focus();
  toolMenuVisibility.value = false;
  renameInputActive.value = true;
};

const closeRename = () => {
  document.getElementById("renameInput").disabled = true;
  document.getElementById("renameInput").blur();
  renameInputActive.value = false;
};

const renameInputActive = ref(false);
</script>

<template>
  <div
    class="h-[50px] w-full bg-white shadow-lg border-b flex items-center justify-between px-6"
  >
    <RouterLink to="/">
      <div class="home flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="16"
          height="16"
        >
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
        <span class="ml-1 text-base">Home</span>
      </div>
    </RouterLink>
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
      <div class="cursor-pointer p-0.5 mr-1" v-if="renameInputActive" @click="closeRename()">
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
    <div class="relative" ref="toolMenu">
      <div
        class="cursor-pointer p-1 rounded-full transition-all duration-200 ease-in"
        @click="toolMenuVisibility = !toolMenuVisibility"
        :class="toolMenuVisibility ? 'bg-white shadow-md border' : ''"
      >
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
        >
          <path
            d="m13 16.75c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm2.195-5.992 2.746 2.999c.142.154.342.243.552.243s.41-.088.553-.242l2.757-2.999c.132-.144.197-.326.197-.507 0-.684-.841-1.008-1.303-.508l-2.202 2.397-2.194-2.396c-.46-.503-1.303-.175-1.303.507 0 .18.065.362.197.506zm-2.195.992c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75z"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <transition name="toolMenu">
        <div
          class="absolute top-[40px] right-[-15px] z-50 w-[180px] py-1.5 px-2 bg-white shadow-xl border rounded-md"
          v-if="toolMenuVisibility"
          
        >
          <ul class="py-1 px-1 text-base">
            <li
              class="hover:bg-gray-200 transition-all duration-300 ease-in-out"
            >
              <div
                class="cursor-pointer flex items-center px-1 py-2 border-b-2"
                @click="useEditorStore.addSignature()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"
                  />
                </svg>
                <span class="ml-2">Save</span>
              </div>
            </li>
            <li
              class="hover:bg-gray-200 transition-all duration-300 ease-in-out"
            >
              <div
                class="cursor-pointer flex items-center px-1 py-2"
                @click="rename()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
                  />
                </svg>
                <span class="ml-2">Rename</span>
              </div>
            </li>
            <li
              class="hover:bg-gray-200 transition-all duration-300 ease-in-out"
              v-if="false"
            >
              <div
                class="cursor-pointer flex items-center px-1 py-2 text-red-600"
              >
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"
                  />
                </svg>
                <span class="ml-2">Delete</span>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* TOOL MENU ANIMATION */
.toolMenu-enter-active,
.toolMenu-leave-active {
  transition: 0.3s ease all;
}
.toolMenu-enter-from,
.toolMenu-leave-to {
  transform: scale(0);
  transform-origin: top;
}
</style>
