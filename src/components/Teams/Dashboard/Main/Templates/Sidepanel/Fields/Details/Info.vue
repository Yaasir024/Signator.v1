<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { templateStore } from "@/stores/teams/dashboard/templates";

import { uid } from "@/composables/useGenerateUid";
import { useClickOutside } from "@/composables/useClickOutside";

import Button from "@/components/Teams/Dashboard/Main/Templates/Sidepanel/Fields/Details/FieldButton.vue";

const useTemplates = templateStore();

const data = computed(() => {
  return useTemplates.editTemplateData;
});

const showDropdown = ref(false);

const dropdown = ref(null);
useClickOutside(dropdown, () => {
  showDropdown.value = false;
});

// Add Field
const addField = (field) => {
  showDropdown.value = false;
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
  showDropdown.value = false;
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
</script>

<template>
  <div class="">
    <div class="flex flex-wrap mb-2 border-b" v-if="checkAllFields()">
      <Button
        name="name"
        @close="deleteField('name')"
        v-if="checkField('name')"
      />
      <Button
        name="position"
        @close="deleteField('position')"
        v-if="checkField('position')"
      />
      <Button
        name="department"
        @close="deleteField('department')"
        v-if="checkField('department')"
      />
      <Button
        name="email"
        @close="deleteField('email')"
        v-if="checkField('email')"
      />
      <Button
        name="phone"
        @close="deleteField('phone')"
        v-if="checkField('phone')"
      />
      <Button
        name="address"
        @close="deleteField('address')"
        v-if="checkField('address')"
      />
    </div>
    <div class="flex items-center justify-between pt-4" v-if="data.customInfo.length != 0">
      <h1 class="text-lg font-medium">Custom Fields</h1>
    </div>
    <div class="flex flex-wrap">
      <button
        class="flex items-center justify-between bg-canvas-color py-1 px-1.5 rounded-md my-1.5 mx-1"
        v-for="field in data.customInfo"
        :key="field.id"
      >
        <input
          placeholder="Field"
          type="text"
          v-model="field.field"
          class="bg-transparent outline-none focus:border border-primary-color px-1 py-0.5"
        />
        <span class="ml-2" @click="deleteCustomField(field.id)">
          <svg
            width="16"
            height="16"
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
        </span>
      </button>
    </div>
    <!-- <Button name="name" @close="deleteField('name')" /> -->
    <div class="mt-4">
      <div class="dropdown w-full relative" ref="dropdown">
        <div
          class="py-1 px-5 border rounded-2xl border-primary-color text-primary-color flex items-center justify-between cursor-pointer"
          @click="showDropdown = !showDropdown"
        >
          <p>
            <span class="">Add Field</span>
          </p>
          <span class="">
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
                d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
              />
            </svg>
          </span>
        </div>
        <transition name="dropdown">
          <div
            class="w-full absolute top-[35px] left-0 bg-white border shadow-md rounded-b-lg z-50 max-h-[150px] overflow-y-auto"
            v-if="showDropdown"
          >
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addField('name')"
              v-if="!checkField('name')"
            >
              <span class="text-base capitalize">Name</span>
            </div>
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addField('position')"
              v-if="!checkField('position')"
            >
              <span class="text-base capitalize">position</span>
            </div>
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addField('department')"
              v-if="!checkField('department')"
            >
              <span class="text-base capitalize">department</span>
            </div>
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addField('email')"
              v-if="!checkField('email')"
            >
              <span class="text-base capitalize">email</span>
            </div>
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addField('phone')"
              v-if="!checkField('phone')"
            >
              <span class="text-base capitalize">phone</span>
            </div>
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addField('address')"
              v-if="!checkField('address')"
            >
              <span class="text-base capitalize">address</span>
            </div>
            <div
              class="px-5 py-0.5 font-light border-b cursor-pointer hover:bg-primary-color/20"
              @click="addCustomField()"
            >
              <span class="text-base capitalize">Custom Field</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
