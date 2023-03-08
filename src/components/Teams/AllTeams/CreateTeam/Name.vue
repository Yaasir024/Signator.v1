<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { teamDetailStore } from "@/stores/teams/create";

const useTeamDetails = teamDetailStore();
const next = () => {
  if (useTeamDetails.newTeamData.name != "") {
    useTeamDetails.nextCreateTab("avatar");
  }
};
</script>

<template>
  <div class="h-full w-full px-[40px] pt-[25px]">
    <div class="max-w-[360px] mx-auto">
      <form @submit.prevent="next()" class="">
        <p class="text-xl font-light text-primary-color mb-[40px]">
          What's your team's name?
        </p>
        <div class="">
          <input
            type="text"
            placeholder="Team name"
            v-model="useTeamDetails.newTeamData.name"
            class="py-1 px-5 border rounded-2xl outline-none border-primary-color w-full"
          />
        </div>
        <div class="flex justify-end mt-[30px]">
          <button
            class="py-1 px-4 bg-primary-color text-base text-white rounded-2xl"
            :class="
              useTeamDetails.newTeamData.name == ''
                ? 'bg-canvas-color cursor-not-allowed'
                : 'bg-primary-color cursor-pointer'
            "
          >
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
