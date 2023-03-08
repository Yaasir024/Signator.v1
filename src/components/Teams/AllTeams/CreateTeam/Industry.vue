<script setup>
import { ref, reactive, onMounted, computed } from "vue";

import { teamDetailStore } from "@/stores/teams/create";

import { useClickOutside } from "@/composables/useClickOutside";

const useTeamDetails = teamDetailStore();

const showDropdown = ref(false);

const dropdownData = [
  {
    id: "01",
    name: "Software and Internet",
  },
  {
    id: "02",
    name: "Marketing and Sales",
  },
  {
    id: "03",
    name: "E-commerce",
  },
  {
    id: "04",
    name: "HR and Recruiting Services",
  },
  {
    id: "05",
    name: "Non-Profit",
  },
  {
    id: "06",
    name: "Healthcare",
  },
  {
    id: "07",
    name: "Education",
  },
  {
    id: "08",
    name: "Logistics and Transport",
  },
  {
    id: "09",
    name: "Content Creators",
  },
  {
    id: "10",
    name: "Consulting",
  },
  {
    id: "11",
    name: "Financial Services",
  },
];

const addIndustry = (i) => {
  useTeamDetails.newTeamData.industry = i;
  showDropdown.value = false;
};

const next = () => {
  if (useTeamDetails.newTeamData.industry != "") {
    useTeamDetails.nextCreateTab("contact");
  }
};

const dropdown = ref(null);
useClickOutside(dropdown, () => {
  showDropdown.value = false;
});
</script>

<template>
  <div class="h-full w-full px-[40px] pt-[25px]">
    <div class="max-w-[360px] mx-auto">
      <form @submit.prevent="next()" class="">
        <p class="text-xl font-light text-primary-color mb-[40px]">
          Select one category that best describes your team's industry
        </p>
        <div class="">
          <div class="dropdown w-full relative" ref="dropdown">
            <div
              class="py-1 px-5 border rounded-2xl border-primary-color text-primary-color flex items-center justify-between cursor-pointer"
              @click="showDropdown = true"
            >
              <p>
                <span
                  class="capitalize"
                  v-if="useTeamDetails.newTeamData.industry"
                  >{{ useTeamDetails.newTeamData.industry }}</span
                >
                <span class="" v-else>Industry</span>
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
                class="w-full absolute top-[35px] left-0 bg-white border shadow-md rounded-b-lg z-30 max-h-[300px] overflow-y-auto"
                v-if="showDropdown"
              >
                <div
                  class="px-5 py-0.5 font-light border-b cursor-pointer"
                  v-for="data in dropdownData"
                  :key="data.id"
                  @click="addIndustry(data.name)"
                >
                  <span class="text-base">{{ data.name }}</span>
                </div>
                <div
                  class="px-5 py-0.5 font-light"
                  @click="addIndustry('others')"
                >
                  <span class="text-base">Others</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="flex justify-end mt-[30px]">
          <button
            class="py-1 px-4 bg-primary-color text-base text-white rounded-2xl"
            :class="
              useTeamDetails.newTeamData.industry == ''
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

<style scoped>
/* Menu Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: scale(0);
}
</style>
