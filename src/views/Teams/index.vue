<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { teamDetailStore } from "@/stores/teams/create";
import { systemStore } from "@/stores/system";

import HeaderLayout from "@/components/Layout/HeaderOnly.vue";
import CreateTeam from "@/components/Teams/AllTeams/CreateTeam/index.vue";

const useTeamDetails = teamDetailStore();
const useSystem = systemStore();
</script>

<template>
  <div class="">
    <HeaderLayout v-if="!useTeamDetails.showCreateTeamTab">
      <div class="py-8 px-4">
        <div class="max-w-[1280px] mx-auto py-10">
          <div class="flex items-center justify-between px-6">
            <div class="text-xl font-medium">All Teams</div>
            <button
              class="px-4 py-1.5 bg-primary-color text-base text-white font-medium rounded-lg"
              @click="useTeamDetails.openCreateTeamTab()"
            >
              Create Team
            </button>
          </div>
          <div class="mt-6">
            <div class="flex flex-wrap">
              <div
                class="flex-25% px-4"
                v-for="team in useSystem.userData.data.teams"
                :key="team.uid"
              >
                <div
                  class="card bg-white shadow-lg rounded-lg py-4 px-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div class="flex flex-col items-center">
                    <div class="">
                      <img
                        :src="team.avatar"
                        :alt="team.name"
                        class="h-[120px] w-[120px] rounded-full"
                      />
                    </div>
                    <div class="text-base font-medium mt-4">
                      {{ team.name }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-25% px-4">
                <div class="card bg-white shadow-lg rounded-lg py-4 px-2">
                  <div class="flex flex-col items-center">
                    <div class="text-lg text-center">Create a Team</div>
                    <button
                      class="h-[40px] w-[40px] bg-primary-color text-base text-white rounded-full flex items-center justify-center mt-2"
                      @click="useTeamDetails.openCreateTeamTab()"
                    >
                      <svg
                        width="24"
                        height="24"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
    <CreateTeam v-if="useTeamDetails.showCreateTeamTab" />
  </div>
</template>
