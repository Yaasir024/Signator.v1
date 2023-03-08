<script setup>
import { ref, onMounted, computed } from "vue";

import { uid } from "@/composables/useGenerateUid";

import { organizationDetailStore } from "@/stores/Organization/organizationDetails";
import { dashboardStore } from "@/stores/Organization/dashboard";

import socialIcons from "@/data/social/icons.json";

import SocialIcon from "@/components/SocialIcon.vue";

const useDashboardStore = dashboardStore();
const useOrganizationDetail = organizationDetailStore();

const data = computed(() => {
  return useOrganizationDetail.organizationData.data;
});

// Company Logo

const readImage = async (e) => {
  let files = e.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (e) => {
    data.value.logo = e.target.result;
  };
};
const clearImage = () => {
  data.value.logo = "";
};

// ADD Custom Info
const addNewContactItem = () => {
  data.value.customInfo.push({
    id: uid(6),
    field: "",
    value: "",
  });
};
// Delete Custom Info
const deleteContactItem = (id) => {
  data.value.customInfo = data.value.customInfo.filter((item) => item.id != id);
};

const getUrl = (social) => {
  let result = socialIcons.find((item) => item.name === social);
  return result.url;
};
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
  if (!data.value.social.some((e) => e.name === social)) {
    data.value.social.push({
      id: uid(6),
      name: social,
      url: "",
    });
    socialSearchQuery.value = "";
  }
};
// Delete Social Item
const deleteSocialItem = (id) => {
  data.value.social = data.value.social.filter((item) => item.id != id);
};

const save = () => {
  console.log(data.value);
};
</script>

<template>
  <section class="relative">
    {{ data }}
    <div
      class="max-w-[450px] px-[25px] mx-auto border-t-2 border-x-2 border-dashed shadow-md"
    >
      <h1 class="text-lg font-medium my-6">Company Social Links</h1>
      <div class="pb-6 mb-10 border-b">
        <div
          class="wrapper image-section flex items-center justify-center pb-3"
        >
          <div class="image-preview w-[40%] text-secondary-color relative">
            <div
              class="relative flex flex-col items-center py-10 border-2 border-dashed rounded-md overflow-hidden cursor-pointer"
              v-if="!data.logo"
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
              <span class="inline-block mt-2">Choose Logo</span>
              <input
                type="file"
                accept="image/*"
                @change="readImage"
                class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                title=""
              />
            </div>
            <img
              :src="data.logo"
              class="w-full h-full"
              v-if="data.logo"
            />
            <div
              class="flex items-center justify-center absolute right-[-4px] top-[-4px] bg-red-600 text-white p-1 rounded-full cursor-pointer"
              v-if="data.logo"
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
        <div class="form-item flex items-center justify-between my-6">
          <label class="text-base">Company Name</label
          ><input
            type="text"
            v-model="data.name"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
          />
        </div>
        <div class="form-item flex items-center justify-between my-6">
          <label class="text-base">Company Address</label
          ><input
            type="text"
            v-model="data.address"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
          />
        </div>
        <div class="form-item flex items-center justify-between my-6">
          <label class="text-base">Company Phone</label
          ><input
            type="text"
            v-model="data.phone"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
          />
        </div>
        <div class="form-item flex items-center justify-between my-6">
          <label class="text-base">Company Website</label
          ><input
            type="text"
            v-model="data.website"
            class="text-sm w-full max-w-[60%] bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
          />
        </div>
      </div>
      <!-- CUSTOM FEILDS -->
      <div class="pb-6 mb-10 border-b">
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
              class="text-sm w-full bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-3 px-4transition-all ease-in-out duration-300"
              v-model="item.field"
            />
          </div>
          <div class="w-[60%] pl-1">
            <input
              type="text"
              class="text-sm w-full bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
              v-model="item.value"
            />
          </div>
          <div
            class="flex items-center justify-center absolute right-[-10px] top-3 cursor-pointer"
            @click="deleteContactItem(item.id)"
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
        <!-- Add Button -->
        <div class="flex justify-end mt-6">
          <div
            class="flex items-center text-primary-color cursor-pointer"
            @click="addNewContactItem()"
          >
            <span class="mr-2">Add Field</span>
            <svg
              width="24"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- SOCIAL -->
      <div class="social pb-14">
        <h1 class="text-lg font-medium mb-6">Company Social Links</h1>
        <div class="my-3 mb-10" >
          <div
            class="field flex items-center justify-between mt-4 px-2 relative"
            v-for="social in data.social"
            :key="social.id"
          >
            <SocialIcon :icon="social.name" />
            <div class="relative w-[85%] pl-1">
              <input
                type="text"
                :placeholder="getUrl(social.name)"
                class="text-sm w-full bg-canvas-color rounded-lg border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
                v-model="social.url"
              />
              <div
                class="flex items-center justify-center absolute right-[6px] top-3 cursor-pointer"
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
    </div>
  </section>
  <div
    class="absolute bottom-0 left-0 shadow-md z-30 w-full bg-white flex items-center justify-end py-5 border-t"
  >
    <button class="text-base font-medium mr-5">Cancel</button>
    <button
      class="text-base font-medium py-1.5 px-4 bg-primary-color text-white rounded-md shadow-sm"
      @click="useDashboardStore.saveTeamData()"
    >
      Save Changes
    </button>
  </div>
</template>
