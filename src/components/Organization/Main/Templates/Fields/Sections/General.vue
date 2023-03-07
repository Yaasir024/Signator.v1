<script setup>
import { ref, onMounted, computed } from "vue";

import { uid } from "@/composables/useGenerateUid";
import { useClickOutside } from "@/composables/useClickOutside";
// STORE
import { templateStore } from "@/stores/Organization/templates";

const useTemplateStore = templateStore();

const data = computed(() => {
  return useTemplateStore.editTemplateData;
});

const menu = ref(null);
const menuVisibility = ref(false);
useClickOutside(menu, () => {
  menuVisibility.value = false;
});

// Add Field
const addField = (field) => {
  menuVisibility.value = false;
  console.log(field);
  data.value[field] = "";
};
// Delete
const deleteField = (field) => {
  delete data.value[field];
};
// Check
const checkField = (field) => {
  if (field in data.value) {
    return true;
  } else {
    return false;
  }
};

// ADD Custom Info
const addCustomField = () => {
  menuVisibility.value = false;
  data.value.customInfo.push({
    id: uid(6),
    field: "",
    value: "",
  });
};
// Delete Custom Info
const deleteCustomField = (id) => {
  data.value.customInfo = data.value.customInfo.filter((item) => item.id != id);
};
const checkAllFields = () => {
  if (
    !checkField("name") &&
    !checkField("position") &&
    !checkField("department") &&
    !checkField("email") &&
    !checkField("address") &&
    !checkField("phone")
  ) {
    return false;
  } else {
    return true;
  }
};

const checkCustomInfo = () => {
  // if(data.value.customInfo.length != 0) {
  //   return true
  // }else {
  //   return false
  // }
  return false;
};
</script>

<template>
  <div class="pb-10">
    <div
      class="px-4 py-2 border-b sticky top-0 left-0 bg-white z-10 shadow flex items-center justify-between"
    >
      <span class="text-lg">DETAILS</span>
      <div class="relative" ref="menu">
        <button
          class="p-1.5 hover:bg-canvas-color rounded-full transition-all duration-300 ease-in-out"
          @click="menuVisibility = !menuVisibility"
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
              d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <transition name="menu">
          <div
            class="absolute top-[50px] right-[-1px] z-50 w-[150px] min-h-[50px] py-1.5 bg-white shadow-xl border rounded-b-md"
            v-if="menuVisibility"
          >
            <ul class="">
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addField('name')"
                v-if="!checkField('name')"
              >
                Name
              </li>
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addField('position')"
                v-if="!checkField('position')"
              >
                Position
              </li>
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addField('department')"
                v-if="!checkField('department')"
              >
                Department
              </li>
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addField('email')"
                v-if="!checkField('email')"
              >
                Email
              </li>
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addField('phone')"
                v-if="!checkField('phone')"
              >
                Phone
              </li>
              <li
                class="py-0.5 px-3 cursor-pointer hover:bg-canvas-color"
                @click="addField('address')"
                v-if="!checkField('address')"
              >
                Address
              </li>
            </ul>
            <div
              class="mt-1 py-1 px-3 cursor-pointer hover:bg-canvas-color border-t-2"
              @click="addCustomField()"
            >
              Custom Feilds
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="py-5 px-10">
      <div class="mb-5 pb-5 border-b-2" v-if="checkAllFields()">
        <div
          class="form-item flex items-center justify-between my-4"
          v-if="checkField('name')"
        >
          <label class="text-base">Name</label>
          <div class="flex items-center max-w-[65%] w-full">
            <input
              type="text"
              v-model="data.name"
              placeholder="Placeholder Text e.g Jon Smith"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            />
            <button class="ml-1 text-red-400" @click="deleteField('name')">
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
            </button>
          </div>
        </div>
        <div
          class="form-item flex items-center justify-between my-4"
          v-if="checkField('position')"
        >
          <label class="text-base">Position</label>
          <div class="flex items-center max-w-[65%] w-full">
            <input
              type="text"
              v-model="data.position"
              placeholder="Placeholder e.g Frontend"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            />
            <button class="ml-1 text-red-400" @click="deleteField('position')">
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
            </button>
          </div>
        </div>
        <div
          class="form-item flex items-center justify-between my-4"
          v-if="checkField('department')"
        >
          <label class="text-base">Department</label>
          <div class="flex items-center max-w-[65%] w-full">
            <input
              type="text"
              v-model="data.department"
              placeholder="Placeholder e.g Dev"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            />
            <button
              class="ml-1 text-red-400"
              @click="deleteField('department')"
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
            </button>
          </div>
        </div>
        <div
          class="form-item flex items-center justify-between my-4"
          v-if="checkField('email')"
        >
          <label class="text-base">Email</label>
          <div class="flex items-center max-w-[65%] w-full">
            <input
              type="text"
              v-model="data.email"
              placeholder="Placeholder"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            />
            <button class="ml-1 text-red-400" @click="deleteField('email')">
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
            </button>
          </div>
        </div>
        <div
          class="form-item flex items-center justify-between my-4"
          v-if="checkField('phone')"
        >
          <label class="text-base">Phone</label>
          <div class="flex items-center max-w-[65%] w-full">
            <input
              type="text"
              v-model="data.phone"
              placeholder="Placeholder e.g +111-111-111"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            />
            <button class="ml-1 text-red-400" @click="deleteField('phone')">
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
            </button>
          </div>
        </div>
        <div
          class="form-item flex items-center justify-between my-4"
          v-if="checkField('address')"
        >
          <label class="text-base">Address</label>
          <div class="flex items-center max-w-[65%] w-full">
            <input
              type="text"
              v-model="data.address"
              placeholder="Placeholder Text"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            />
            <button class="ml-1 text-red-400" @click="deleteField('address')">
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
            </button>
          </div>
        </div>
      </div>
      <!-- Custom -->
      <div class="" v-if="checkCustomInfo()">
        <div class="flex items-center justify-between">
          <h1 class="text-lg font-medium">Custom Fields</h1>
        </div>
        <div
          class="field flex space-between mt-4 px-2 relative"
          v-for="item in data.customInfo"
          :key="item.id"
        >
          <div class="w-[40%] pr-1">
            <input
              type="text"
              placeholder="Field"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-3 px-4transition-all ease-in-out duration-300"
              v-model="item.field"
            />
          </div>
          <div class="w-[60%] pl-1">
            <input
              type="text"
              placeholder="Placeholder"
              class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="item.value"
            />
          </div>
          <button class="ml-1 text-red-400" @click="deleteCustomField(item.id)">
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
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center pt-8"
      v-if="!checkAllFields() && !checkCustomInfo()"
    >
      <h1 class="text-xl font-medium">No Fields Created</h1>
    </div>
  </div>
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
