<script setup>
import { ref, reactive, computed } from "vue";
import { inject } from "vue";
import { uid } from "@/composables/useGenerateUid";
import { useClickOutside } from "@/composables/useClickOutside";
import addonData from "@/data/addons";
import socialData from "@/data/social";
const data = inject("data");

const props = defineProps(["addonType"]);

const social = computed(() => {
  return data.addons.find((item) => item.type == props.addonType);
});

const getUrl = (social) => {
  let result = socialData.socialIcons.find((item) => item.name === social);
  return result.url;
};

// Delete Addon
const deleteAddons = () => {
  data.addons = data.addons.filter((item) => item.type != props.addonType);
};
const showSocial = ref(true);
const toggleSocialDetail = () => {
  showSocial.value = !showSocial.value;
};
/*  SOCIAL ADDON  */
// Add Social Addon
const addSocialAddon = (name) => {
  console.log(social.value.data.items);
  if (!social.value.data.items.some((e) => e.name === name)) {
    social.value.data.items.push({
      id: uid(6),
      name: name,
      url: "",
    });
  }
};
// Delete Social Addon
const deleteSocialAddon = (id) => {
  social.value.data.items = social.value.data.items.filter(
    (item) => item.id != id
  );
};
</script>

<template>
  <!-- Social -->
  <div
    class="rounded-3xl shadow-lg border relative overflow-hidden w-full"
    :class="showSocial ? 'mb-5' : 'mb-12'"
  >
    <div
      class="accordion flex items-center justify-between py-4 px-5 border-b cursor-pointer"
      @click="toggleSocialDetail()"
    >
    <div class="flex items-center">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"
            />
          </svg>
          <span class="ml-3">Social</span>
        </div>
      <div
        class="flex items-center justify-center cursor-pointer"
        @click="deleteAddons()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
          />
        </svg>
      </div>
    </div>
    <div
      class="overflow-hidden transition-all ease-in-out duration-300"
      :class="showSocial ? 'max-h-0' : 'max-h-[999px]'"
    >
      <div class="content py-7 px-5">
        <div class="">
          <div
            class="field flex items-center justify-between mt-4 relative"
            v-for="social in social.data.items"
            :key="social.id"
          >
            <div class="w-[40%] pr-1">
              <img
                :src="'/icons/addons/' + social.name + '_1' + '.png'"
                alt=""
                class="w-full"
              />
            </div>
            <div class="w-[60%] pl-1">
              <input
                type="text"
                :placeholder="getUrl(social.name)"
                class="text-sm w-full bg-canvas-color rounded-2xl border outline-none focus:border-primary-color focus:bg-white overflow-hidden py-2 px-4 transition-all ease-in-out duration-300"
                v-model="social.url"
              />
            </div>
            <div
              class="flex items-center justify-center absolute right-[-16px] top-3 cursor-pointer"
              @click="deleteSocialAddon(social.id)"
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
        <div class="icons my-6">
          <div class="flex flex-wrap">
            <div
              class="max-w-[33.3333%] p-1 cursor-pointer"
              v-for="icon in socialData.addonsSocial"
              :key="icon.id"
              @click="addSocialAddon(icon.name)"
            >
              <img
                :src="'/icons/addons/' + icon.name + '_1' + '.png'"
                class="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="styles my-5">
          <!-- Height -->
          <div class="mb-2">
            <div class="flex items-center justify-between">
              <span>Height</span>
              <span>{{ social.data.style.height }}px</span>
            </div>
            <input
              type="range"
              class=""
              min="20"
              max="50"
              v-model="social.data.style.height"
            />
          </div>
          <!-- Padding Top -->
          <div class="mb-2">
            <div class="flex items-center justify-between">
              <span>Padding-Top</span>
              <span>{{ social.data.style.paddingTop }}px</span>
            </div>
            <input
              type="range"
              class=""
              min="5"
              max="20"
              v-model="social.data.style.paddingTop"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
