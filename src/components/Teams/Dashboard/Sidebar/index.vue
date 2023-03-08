<script setup>
import { detailsStore } from "@/stores/teams/dashboard/details";
import Links from "@/components/Teams/Dashboard/Sidebar/Links.vue";
const useDetails = detailsStore();
</script>

<template>
  <aside class="sidebar static top-0 h-screen">
    <div
      class="w-[230px] bg-canvas-color shadow-xl border-r h-full flex flex-col overflow-hidden"
    >
      <div
        class="px-5 py-4 border-b flex items-center justify-between cursor-pointer"
      >
        <div class="flex items-center w-[175px]">
          <img
            :src="useDetails.teamData.data.avatar.src"
            :alt="useDetails.teamData.data.name"
            class="h-[40px] w-[40px] rounded-full mr-2"
          />
          <span
            class="text-base whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {{ useDetails.teamData.data.name }}</span
          >
        </div>
        <div class="">
          <svg
            fill="currentColor"
            class="w-[24px] h-[24px]"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
      <!-- {{ useDetails.teamData.data }} -->
      <div class="px-5 mt-12">
        <div class="pb-2 border-b-2">
          <Links
            text="Employees"
            @click="useDetails.currentSection = 'employees'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-5.995-3h-5v2h5v-2z"
              />
            </svg>
          </Links>
          <Links
            text="Templates"
            @click="useDetails.currentSection = 'templates'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[18px] h-[18px]"
            >
              <path
                d="M0 0v24h24v-24h-24zm11 22h-9v-16h9v16zm11 0h-9v-7h9v7zm0-9h-9v-7h9v7z"
              ></path>
            </svg>
          </Links>
          <Links text="Groups" @click="useDetails.currentSection = 'groups'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[18px] h-[18px]"
            >
              <path
                d="M0 0v24h24v-24h-24zm11 22h-9v-16h9v16zm11 0h-9v-7h9v7zm0-9h-9v-7h9v7z"
              ></path>
            </svg>
          </Links>
          <Links
            text="Company Details"
            @click="useDetails.currentSection = 'companyDetails'"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[18px] h-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21 22h2v2h-22v-2h2v-22h18v22zm-10-3h-2v4h2v-4zm4 0h-2v4h2v-4zm4-17h-14v20h2v-5h10v5h2v-20zm-12 11h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"
              />
            </svg>
          </Links>
        </div>
        <div class="pt-2">
          <Links text="Campaign">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 15v-10h-5.033c-2.743 0-4.967 2.239-4.967 5 0 2.762 2.224 5 4.967 5h5.033zm-8-5c0-1.654 1.331-3 2.967-3h3.033v6h-3.033c-1.636 0-2.967-1.346-2.967-3zm22-10v20c-4.839-3.008-8.836-4.491-12-5v-2.014c3.042.438 6.393 1.624 10 3.548v-13.064c-3.622 1.941-6.912 3.099-10 3.544v-2.014c3.124-.498 7.036-1.915 12-5zm-11.993 22.475c-.52-.424-.902-.994-1.095-1.637l-1.151-3.827h-6.146l1.905 5.883c.214.659.828 1.106 1.522 1.106h4.46c.358 0 .677-.225.797-.562.12-.337.015-.713-.263-.939l-.029-.024zm-4.674-.475l-.982-3h1.933l.927 3h-1.878z"
              />
            </svg>
          </Links>
          <Links text="Support">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8.975 16.383l-2.608-1.485c.403-.884.633-1.863.633-2.898s-.23-2.014-.633-2.897l2.608-1.485c.65 1.325 1.025 2.809 1.025 4.382s-.375 3.057-1.025 4.383zm-18.975-4.383c0-1.573.375-3.057 1.025-4.383l2.608 1.485c-.403.884-.633 1.863-.633 2.898s.23 2.014.633 2.897l-2.608 1.485c-.65-1.325-1.025-2.809-1.025-4.382zm5 0c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm9.397-8.968l-1.485 2.608c-.888-.407-1.872-.64-2.912-.64s-2.024.233-2.912.64l-1.485-2.608c1.329-.654 2.818-1.032 4.397-1.032s3.068.378 4.397 1.032zm-8.794 17.936l1.485-2.608c.888.407 1.872.64 2.912.64s2.024-.233 2.912-.64l1.485 2.608c-1.329.654-2.818 1.032-4.397 1.032s-3.068-.378-4.397-1.032z"
              />
            </svg>
          </Links>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
button.active {
  background: linear-gradient(92deg, rgb(135 206 235) -229%, transparent 94%);
}
</style>
