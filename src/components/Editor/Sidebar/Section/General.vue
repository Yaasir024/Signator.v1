<script setup>
import { ref, reactive, computed, inject } from "vue";

import { uid } from "@/composables/useGenerateUid";


import { editorStore } from "@/stores/editor";
import { systemStore } from "@/stores/system";

import Heading from "@/components/Editor/Heading.vue";
import ProTag from "@/components/ProTag.vue";


const useEditorStore = editorStore();
const useSystemStore = systemStore();

const data = computed(() => {
  return useEditorStore.data
})


// ADD CONTACT ITEM
const addNewContactItem = () => {
  data.value.contactInfo.customInfo.push({
    id: uid(6),
    field: "",
    value: "",
  });
};
// Delete Contact Item
const deleteContactItem = (id) => {
  data.value.contactInfo.customInfo = data.value.contactInfo.customInfo.filter(
    (item) => item.id != id
  );
};

const clearImage = () => {
  data.value.image.img = "";
};


</script>

<template>
  <div class="general pb-14" v-if="data">
    <div class="content max-w-[400px] mx-auto">
      <!-- Image Secion -->

      <div class="wrapper image-section flex items-center justify-center pb-3">
        <div class="image-preview w-[40%] text-secondary-color relative">
          <div
            class="relative flex flex-col items-center py-10 border-2 border-dashed rounded-md overflow-hidden cursor-pointer"
            v-if="!data.image.img"
            @click="useEditorStore.galleryModal = true"
          >
            <div class="icon block">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"
                />
              </svg>
            </div>
            <span class="inline-block mt-2">Choose Image</span>
          </div>
          <img
            :src="data.image.img"
            class="w-full h-full"
            v-if="data.image.img"
          />
          <div
            class="flex items-center justify-center absolute right-[-4px] top-[-4px] bg-red-600 text-white p-1 rounded-full cursor-pointer"
            v-if="data.image.img"
            @click="clearImage()"
          >
            <svg
              height="16"
              width="16"
              fill="currentColor"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="wrapper mt-4 pb-6 mb-10 border-b">
        <!-- Name -->
        <div class="form-item flex items-center justify-between my-6">
          <label>Name</label>
          <input
            type="text"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            v-model="data.name"
          />
        </div>
        <!-- Position -->
        <div class="form-item flex items-center justify-between my-6">
          <label>Position</label>
          <input
            type="text"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            v-model="data.position"
          />
        </div>
        <!-- Department -->
        <div class="form-item flex items-center justify-between my-6">
          <label class="">Department</label>
          <input
            type="text"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            v-model="data.department"
          />
        </div>
        <!-- Company -->
        <div class="form-item flex items-center justify-between my-6">
          <label class="">Company</label>
          <input
            type="text"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            v-model="data.company"
          />
        </div>
      </div>
      <!-- Contact Info Section -->
      <div class="wrapper contact">
        <Heading :title="'Contact Info'" />
        <div class="mt-2 mb-3">
          <!-- Phone -->
          <div class="form-item flex items-center justify-between my-3 px-4">
            <label>Phone</label>
            <input
              type="text"
              class="text-sm w-full max-w-[70%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="data.contactInfo.basicInfo.phone"
            />
          </div>
          <!-- Website -->
          <div class="form-item flex items-center justify-between my-3 px-4">
            <label>Website</label>
            <input
              type="text"
              class="text-sm w-full max-w-[70%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="data.contactInfo.basicInfo.website"
            />
          </div>
          <!-- Email -->
          <div class="form-item flex items-center justify-between my-3 px-4">
            <label>Email</label>
            <input
              type="text"
              class="text-sm w-full max-w-[70%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="data.contactInfo.basicInfo.email"
            />
          </div>
          <!-- Address -->
          <div class="form-item flex items-center justify-between my-3 px-4">
            <label>Address</label>
            <input
              type="text"
              class="text-sm w-full max-w-[70%] bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="data.contactInfo.basicInfo.address"
            />
          </div>

          <!-- CUSTOM FEILDS -->
          <div class="mt-8 pt-5 border-t" >
            <div class="flex items-center justify-between">
              <Heading :title="'Custom Fields'" />
              <ProTag v-if="!useSystemStore.checkFeatureQualification('customFields')"/>
            </div>

            <div
              class="field flex space-between mt-4 px-2 relative"
              v-for="item in data.contactInfo.customInfo"
              :key="item.id"
            >
              <div class="w-[40%] pr-1">
                <input
                  type="text"
                  placeholder="Field"
                  class="text-sm w-full bg-canvas-color rounded-3xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-3 px-4transition-all ease-in-out duration-300"
                  v-model="item.field"
                />
              </div>
              <div class="w-[60%] pl-1">
                <input
                  type="text"
                  class="text-sm w-full bg-canvas-color rounded-3xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
                  v-model="item.value"
                />
              </div>
              <div
                class="flex items-center justify-center absolute right-[-10px] top-3 cursor-pointer"
                @click="deleteContactItem(item.id)"
              >
                <svg
                  height="16"
                  width="16"
                  fill="currentColor"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                  />
                </svg>
              </div>
            </div>
            <!-- Add Button -->
            <div class="flex justify-end mt-6" v-if="useSystemStore.checkFeatureQualification('customFields')">
              <div
                class="flex items-center text-primary-color cursor-pointer"
                @click="addNewContactItem()"
              >
                <span class="mr-2">Add Field</span>
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
