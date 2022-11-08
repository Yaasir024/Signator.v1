<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
import Heading from "@/components/Editor/Heading.vue";
import SocialIcon from "@/components/SocialIcon.vue";
import { uid } from "@/composables/useGenerateUid";
import socialData from "@/data/social";

const data = inject("data");

const getUrl = (social) => {
  let result = socialData.socialIcons.find((item) => item.name === social);
  return result.url;
};
const socialSearchQuery = ref("");
// FILTERED SOCIAL MEDIA
const filteredSocialData = computed(() => {
  const query = ref(socialSearchQuery.value.toLowerCase());
  if (socialSearchQuery.value === "") {
    return socialData.socialIcons;
  }
  return socialData.socialIcons.filter((item) => {
    return Object.values(item).some((word) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
// Add New Social Item
const addNewSocialItem = (social) => {
  if (!data.socialInfo.some((e) => e.name === social)) {
    data.socialInfo.push({
      id: uid(6),
      name: social,
      url: "",
    });
    socialSearchQuery.value = "";
  }
};
// Delete Social Item
const deleteSocialItem = (id) => {
  data.socialInfo = data.socialInfo.filter((item) => item.id != id);
};
</script>

<template>
  <div class="social pb-14">
    <div class="my-3 mb-10" v-if="data.socialInfo.length >= 1">
      <div
        class="field flex items-center justify-between mt-4 px-2 relative"
        v-for="social in data.socialInfo"
        :key="social.id"
      >
        <SocialIcon :icon="social.name" />
        <div class="w-[85%] pl-1">
          <input
            type="text"
            :placeholder="getUrl(social.name)"
            class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
            v-model="social.url"
          />
        </div>
        <div
          class="flex items-center justify-center absolute right-[-10px] top-3 cursor-pointer"
          @click="deleteSocialItem(social.id)"
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
    <div class="search">
      <input
        type="text"
        placeholder="Search"
        class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
        v-model="socialSearchQuery"
      />
    </div>
    <div class="social-icons flex flex-wrap my-8">
      <div
        class="m-1"
        v-for="icon in filteredSocialData"
        :key="icon.id"
        @click="addNewSocialItem(icon.name)"
      >
        <SocialIcon :icon="icon.name" />
      </div>
    </div>
  </div>
</template>
