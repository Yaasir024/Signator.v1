<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { teamDetailStore } from "@/stores/teams/create";

const useTeamDetails = teamDetailStore();

const readImage = async (e) => {
  let files = e.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  console.log(files[0])
  reader.onload = (e) => {
    useTeamDetails.newTeamData.avatar.src = e.target.result;
  };
};
const clearImage = () => {
  useTeamDetails.newTeamData.avatar.src = "";
};

const next = () => {
  useTeamDetails.nextCreateTab("industry");
};
</script>

<template>
  <div class="h-full w-full px-[40px] pt-[25px]">
    <div class="max-w-[360px] mx-auto">
      <form @submit.prevent="next()" class="">
        <p class="text-xl font-light text-primary-color mb-[40px]">
          Add Your Team Avatar(Optional)
        </p>
        <div
          class="wrapper image-section flex items-center justify-center pb-3"
        >
          <div class="image-preview text-secondary-color relative">
            <div
              class="relative flex flex-col items-center py-10 border-2 border-dashed h-[135px] w-[135px] rounded-full overflow-hidden cursor-pointer"
              v-if="!useTeamDetails.newTeamData.avatar.src"
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
              <span class="inline-block mt-2">Choose Avatar</span>
              <input
                type="file"
                accept="image/*"
                @change="readImage"
                class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                title=""
              />
            </div>
            <img :src="useTeamDetails.newTeamData.avatar.src" class="h-[135px] w-[135px] rounded-full" v-if="useTeamDetails.newTeamData.avatar.src" />
            <div
              class="flex items-center justify-center absolute right-[-4px] top-[-4px] bg-red-600 text-white p-1 rounded-full cursor-pointer"
              v-if="useTeamDetails.newTeamData.avatar.src"
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
        <div class="flex justify-end mt-[30px]">
          <button
            class="py-1 px-4 bg-primary-color text-base text-white rounded-2xl"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
