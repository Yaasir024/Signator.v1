<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { teamDetailStore } from "@/stores/teams/create";

import HeaderLayout from "@/components/Layout/HeaderOnly.vue";
import Name from "@/components/Teams/AllTeams/CreateTeam/Name.vue";
import Avatar from "@/components/Teams/AllTeams/CreateTeam/Avatar.vue";
import Industry from "@/components/Teams/AllTeams/CreateTeam/Industry.vue";
import Contact from "@/components/Teams/AllTeams/CreateTeam/Contact.vue";
import Social from "@/components/Teams/AllTeams/CreateTeam/Social.vue";

const useTeamDetails = teamDetailStore();
</script>

<template>
  <section class="bg-white">
    <header class="flex items-center h-[64px] px-[40px]">
      <div class="">
        <img src="/images/logo.svg" alt="" class="h-[40px]" />
      </div>
    </header>
    {{ useTeamDetails.newTeamData }}
    <div class="h-[calc(100vh_-_64px)]">
      <Name v-if="useTeamDetails.createTeamTab == 'name'" />
      <Avatar v-if="useTeamDetails.createTeamTab == 'avatar'" />
      <Industry v-if="useTeamDetails.createTeamTab == 'industry'" />
      <Contact v-if="useTeamDetails.createTeamTab == 'contact'" />
      <Social v-if="useTeamDetails.createTeamTab == 'social'" />
    </div>
  </section>
</template>
