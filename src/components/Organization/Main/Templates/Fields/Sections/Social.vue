<script setup>
import { ref, onMounted, computed } from "vue";

// STORE
import { templateStore } from "@/stores/Organization/templates";

// COMPOSABLES
import { uid } from "@/composables/useGenerateUid";

// DATA
import socialIcons from "@/data/social/icons.json";

// COMPONENTS
import SocialIcon from "@/components/SocialIcon.vue";

const useTemplateStore = templateStore();

const data = computed(() => {
  return useTemplateStore.editTemplateData;
});

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
  if (!data.value.socialInfo.some((e) => e.name === social)) {
    data.value.socialInfo.push({
      id: uid(6),
      name: social,
      url: "",
    });
    socialSearchQuery.value = "";
  }
};
// Delete Social Item
const deleteSocialItem = (id) => {
  data.value.socialInfo = data.value.socialInfo.filter((item) => item.id != id);
};
</script>

<template>
  <div class="">
    <div
      class="px-2 py-2 text-lg border-b sticky top-0 left-0 bg-white z-10 shadow"
    >
      SOCIAL
    </div>
    <div class="py-5 px-10">
      <!-- SOCIAL -->
      <div class="social pb-14">
        <div class="my-3 mb-10" v-if="data.socialInfo.length >= 1">
          <div
            class="field flex items-center justify-between mt-4 px-2 relative"
            v-for="social in data.socialInfo"
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
  </div>
</template>
