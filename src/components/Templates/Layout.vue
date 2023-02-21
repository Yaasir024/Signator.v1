<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
import { editorStore } from "@/stores/editor";

import { uid } from "@/composables/useGenerateUid";
import { checkViewWidth } from "@/composables/useCheckViewWidth";


import ProIcon from "@/components/ProTag/Icon.vue";

const router = useRouter();
const useAuth = authStore();
const useSystemStore = systemStore();
const useEditorStore = editorStore();

const props = defineProps(["data"]);

const middleIndex = Math.ceil(props.data.length / 2);
const secondIndex = Math.ceil(props.data.length / 3);
const thirdIndex = Math.ceil(props.data.length / 3) * 2;

const templates = computed(() => {
  return {
    byThree: {
      first: props.data.slice(0, secondIndex),
      second: props.data.slice(secondIndex, thirdIndex),
      third: props.data.slice(thirdIndex, -1),
    },
    byTwo: {
      first: props.data.slice(0, middleIndex),
      second: props.data.slice(-middleIndex),
    },
  };
});
const mobile = ref(false);
const checkScreen = () => {
  if (window.innerWidth <= 920) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
};
onMounted(() => {
  window.addEventListener("resize", checkScreen);
});

const createEditorSession = (data) => {
  if (useSystemStore.isEligibleToCreate()) {
    data.uid = uid(16);
    useEditorStore.data = data;
    router.push({ path: "/editor" });
  } else {
    useSystemStore.addNotificationData({
      message: "Upgrade to use Template.",
      type: "error",
    });
  }
};
// I
const showUpgradeError = () => {
  useSystemStore.addNotificationData({
    message: "Upgrade to use Template.",
    type: "error",
  });
};
// Check if user can use template
const checkTempateEligibiity = (d) => {
  if (useAuth.userState && useSystemStore.userData.status) {
    return d.includes(useSystemStore.userData.data.subscriptionData.plan);
  }
};
</script>

<template>
  <div class="max-w-[1080px] mx-auto flex w-full flex-wrap" v-if="!mobile">
    <div class="w-[33.33%] px-3 md:pr-5">
      <div
        class="w-full my-6"
        v-for="template in templates.byThree.first"
        :key="template.id"
      >
        <div
          class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
        >
          <img :src="'/images/templates/' + template.imgSrc" alt="" class="" />
          <ProIcon v-if="!checkTempateEligibiity(template.type)"/>

          <div
            class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
          >
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-if="checkTempateEligibiity(template.type)"
              @click="createEditorSession(template.data)"
            >
              Customize This Template
            </button>
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-else
              @click="showUpgradeError()"
            >
              Upgrade To Pro to Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[33.33%] px-3 md:pl-5">
      <div
        class="w-full my-4"
        v-for="template in templates.byThree.second"
        :key="template.id"
      >
        <div
          class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
        >
          <img :src="'/images/templates/' + template.imgSrc" alt="" class="" />
          <ProIcon v-if="!checkTempateEligibiity(template.type)"/>

          <div
            class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
          >
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-if="checkTempateEligibiity(template.type)"
              @click="createEditorSession(template.data)"
            >
              Customize This Template
            </button>
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-else
              @click="showUpgradeError()"
            >
              Upgrade To Pro to Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[33.33%] px-3 md:pl-5">
      <div
        class="w-full my-4"
        v-for="template in templates.byThree.third"
        :key="template.id"
      >
        <div
          class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
        >
          <img :src="'/images/templates/' + template.imgSrc" alt="" class="" />
          <ProIcon v-if="!checkTempateEligibiity(template.type)"/>

          <div
            class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
          >
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-if="checkTempateEligibiity(template.type)"
              @click="createEditorSession(template.data)"
            >
              Customize This Template
            </button>
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-else
              @click="showUpgradeError()"
            >
              Upgrade To Pro to Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- MOBILE -->
  <div
    class="max-w-[460px] sm:max-w-[860px] mx-auto flex w-full flex-wrap"
    v-if="mobile"
  >
    <div class="w-full sm:w-[50%] px-3">
      <div
        class="w-full my-6"
        v-for="template in templates.byTwo.first"
        :key="template.id"
      >
        <div
          class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
        >
          <img :src="'/images/templates/' + template.imgSrc" alt="" class="" />
          <ProIcon v-if="!checkTempateEligibiity(template.type)"/>

          <div
            class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
          >
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-if="checkTempateEligibiity(template.type)"
              @click="createEditorSession(template.data)"
            >
              Customize This Template
            </button>
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-else
              @click="showUpgradeError()"
            >
              Upgrade To Pro to Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-[50%] px-3">
      <div
        class="w-full my-4"
        v-for="template in templates.byTwo.second"
        :key="template.id"
      >
        <div
          class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
        >
          <img :src="'/images/templates/' + template.imgSrc" alt="" class="" />
          <ProIcon v-if="!checkTempateEligibiity(template.type)"/>

          <div
            class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
          >
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-if="checkTempateEligibiity(template.type)"
              @click="createEditorSession(template.data)"
            >
              Customize This Template
            </button>
            <button
              class="bg-primary-color text-white text-base font-medium py-2 px-3 rounded-2xl"
              v-else
              @click="showUpgradeError()"
            >
              Upgrade To Pro to Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card:hover .overlay {
  transition: all 0.3s ease;
  opacity: 1;
}
.filter-link.active {
  color: #000000;
  font-weight: 500;
}
.filter-link.active:before {
  content: "";
  position: absolute;
  width: 22px;
  height: 2px;
  background: #ffffffb3;
  left: 0;
  bottom: 0;
}
</style>