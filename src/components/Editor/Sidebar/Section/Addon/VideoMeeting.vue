<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";

import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
// const data = inject("data");
const data = computed(() => {
  return useEditorStore.data;
});

const props = defineProps(["addonType"]);

const videoMeeting = computed(() => {
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
// Add video meeting
const addVideoMeetingAddon = (name) => {
  videoMeeting.value.data.items.name = name;
};
</script>

<template>
  <div
    class="rounded-3xl shadow-lg border relative overflow-hidden"
    :class="showDetail ? 'mb-5' : 'mb-12'"
  >
    <div
      class="accordion flex items-center justify-between py-4 px-5 cursor-pointer w-full"
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
            d="M15 3c1.104 0 2 .896 2 2v4l7-4v14l-7-4v4c0 1.104-.896 2-2 2h-13c-1.104 0-2-.896-2-2v-14c0-1.104.896-2 2-2h13zm0 17c.552 0 1-.448 1-1v-14c0-.551-.448-1-1-1h-13c-.551 0-1 .449-1 1v14c0 .552.449 1 1 1h13zm2-9.848v3.696l6 3.429v-10.554l-6 3.429z"
          />
        </svg>
        <span class="ml-3">Video Meeting</span>
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
        <div class="flex flex-wrap">
          <!-- Zoom -->
          <div class="flex flex-50% p-2" @click="addVideoMeetingAddon('zoom')">
            <div
              class="w-full flex items-center border py-2 px-3 rounded-3xl cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z"
                />
              </svg>
              <span class="ml-2">Zoom</span>
            </div>
          </div>
          <!-- Skype -->
          <div class="flex flex-50% p-2" @click="addVideoMeetingAddon('skype')">
            <div
              class="w-full flex items-center border py-2 px-3 rounded-3xl cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
              >
                <path
                  d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
                />
              </svg>
              <span class="ml-2">Skype</span>
            </div>
          </div>
          <!-- Google Meet -->
          <div
            class="flex flex-66.66% p-2"
            @click="addVideoMeetingAddon('google-meet')"
          >
            <div
              class="w-full flex items-center border py-2 px-3 rounded-3xl cursor-pointer"
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="16"
                height="16"
              >
                <path
                  d="M2 18L2 32 12 32 12 18zM39 9v4.31l-10 9V16H14V6h22C37.66 6 39 7.34 39 9zM29 27.69l10 9V41c0 1.66-1.34 3-3 3H14V34h15V27.69zM12 34v10H5c-1.657 0-3-1.343-3-3v-7H12zM12 6L12 16 2 16zM29 25L39 16 39 34zM49 9.25v31.5c0 .87-1.03 1.33-1.67.75L41 35.8V14.2l6.33-5.7C47.97 7.92 49 8.38 49 9.25z"
                />
              </svg>
              <span class="ml-2">Google Meet</span>
            </div>
          </div>
        </div>

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
              v-model="videoMeeting.data.items.url"
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
              v-model="videoMeeting.data.items.text"
            />
          </div>
        </div>

        <!-- Height -->
        <div class="mt-6 mb-2">
          <div class="flex items-center justify-between">
            <span>Height</span>
            <span>{{ videoMeeting.data.style.height }}px</span>
          </div>
          <input
            type="range"
            class=""
            min="20"
            max="50"
            v-model="videoMeeting.data.style.height"
          />
        </div>
        <!-- Padding Top -->
        <div class="mb-2">
          <div class="flex items-center justify-between">
            <span>Padding-Top</span>
            <span>{{ videoMeeting.data.style.paddingTop }}px</span>
          </div>
          <input
            type="range"
            class=""
            min="5"
            max="20"
            v-model="videoMeeting.data.style.paddingTop"
          />
        </div>
      </div>
    </div>
  </div>
</template>
