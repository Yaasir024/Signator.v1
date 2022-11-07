<script setup>
import { ref, reactive, computed, inject } from "vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
const data = inject("data");

const edit = ref(false);

const deleteSignature = () => {
  console.log('Delete Signature')
}
</script>
<template>
  <div
    class="py-3 px-4 text-base font-medium w-full border-b bg-white shadow-md mb-6 sticky top-0 z-30 flex items-center justify-between"
  >
    <div class="cursor-default">
      <span v-if="!edit">{{ data.title }}</span>
      <input
        type="text"
        placeholder="Title"
        v-model="data.title"
        class="border-b-2 border-black outline-none  pr-3 max-w-[200px] w-full"
        v-if="edit"
      />
    </div>
    <div class="flex items-center">
      <div class="mr-2 cursor-pointer" title="Rename" v-if="!edit" @click="edit = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
          ></path>
        </svg>
      </div>
      <div class="cursor-pointer" title="Delete" v-if="!edit" @click="deleteSignature()">
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
          ></path>
        </svg>
      </div>
      <div class="cursor-pointer" v-if="edit" @click="edit = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/></svg>
      </div>
    </div>
  </div>
</template>
