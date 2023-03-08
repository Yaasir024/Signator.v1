<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { teamDetailStore } from "@/stores/teams/create";

// COMPOSABLES
import { uid } from "@/composables/useGenerateUid";
// DATA
import socialIcons from "@/data/social/icons.json";
// COMPONENTS
import SocialIcon from "@/components/SocialIcon.vue";

const useTeamDetails = teamDetailStore();

const socialSearchQuery = ref("");
// FILTERED SOCIAL MEDIA
const filteredSocialData = computed(() => {
  const query = ref(socialSearchQuery.value.toLowerCase());
  if (socialSearchQuery.value === "") {
    return socialIcons;
  }
  return socialIcons.filter((item) => {
    return Object.values(item).some((word) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
// Add New Social Item
const addNewSocialItem = (social) => {
  if (!useTeamDetails.newTeamData.social.some((e) => e.name === social)) {
    useTeamDetails.newTeamData.social.push({
      id: uid(6),
      name: social,
      url: "",
    });
    socialSearchQuery.value = "";
  }
};
// Delete Social Item
const deleteSocialItem = (id) => {
  useTeamDetails.newTeamData.social = useTeamDetails.newTeamData.social.filter(
    (item) => item.id != id
  );
};

const next = () => {
  if (useTeamDetails.newTeamData.name != "") {
    useTeamDetails.saveTeamData();
  }
};
</script>

<template>
  <div class="h-full w-full px-[40px] pt-[25px]">
    <div class="max-w-[360px] mx-auto">
      <form @submit.prevent="next()" class="">
        <p class="text-xl font-light text-primary-color mb-[40px]">
          Add your Team's social media links.
        </p>
        <div class="social pb-14">
          <div
            class="my-2 mb-10"
            v-if="useTeamDetails.newTeamData.social.length >= 1"
          >
            <div
              class="field flex items-center justify-between mt-4 px-2 relative"
              v-for="social in useTeamDetails.newTeamData.social"
              :key="social.id"
            >
              <SocialIcon :icon="social.name" />
              <div class="relative w-[85%] pl-1">
                <input
                  type="text"
                  :placeholder="social.name"
                  class="py-1 px-5 border rounded-2xl outline-none border-primary-color w-full"
                  v-model="social.url"
                />
                <div
                  class="flex items-center justify-center absolute right-[7px] top-[7px] cursor-pointer"
                  @click="deleteSocialItem(social.id)"
                >
                  <svg
                    height="16"
                    width="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="search">
            <input
              type="text"
              placeholder="Search"
              class="text-sm w-full bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="socialSearchQuery"
            />
          </div>
          <div class="social-icons flex flex-wrap my-8">
            <div
              class="m-[0.2rem]"
              v-for="icon in filteredSocialData"
              :key="icon.id"
              @click="addNewSocialItem(icon.name)"
            >
              <SocialIcon :icon="icon.name" />
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-[30px]">
          <button
            class="py-1 px-4 bg-primary-color text-base text-white rounded-2xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
