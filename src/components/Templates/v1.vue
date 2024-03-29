<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { systemStore } from "@/stores/system";
import { editorStore } from "@/stores/editor";
import { dashboardStore } from "@/stores/dashboard";

import signatureTemplates from "@/data/templates.json";
import emptySignatureTemplate from "@/data/emptyTemplate.json";
import { uid } from "@/composables/useGenerateUid";


import ProIcon from "@/components/ProTag/Icon.vue";

const useSystemStore = systemStore();
const useEditorStore = editorStore();
const useDashboard = dashboardStore();

const route = useRoute();
const path = route.name;
const router = useRouter();

const middleIndex = Math.ceil(signatureTemplates.length / 2);

const templates = computed(() => {
  return {
    first: signatureTemplates.slice(0, middleIndex),
    second: signatureTemplates.slice(-middleIndex),
  };
});
const createEditorSession = (data) => {
  if (useSystemStore.isEligibleToCreate()) {
    data.uid = uid(16);
    useEditorStore.data = data;
    useEditorStore.showTemplatesSection = false;
    router.push({ path: "/editor" });
  } else {
    useSystemStore.addNotificationData({
      message: "Upgrade to use Template.",
      type: "error",
    });
  }
};

const showUpgradeError = () => {
  useSystemStore.addNotificationData({
    message: "Upgrade to use Template.",
    type: "error",
  });
};

const checkTempateEligibiity = (d) => {
  return d.includes(useSystemStore.userData.data.subscriptionData.plan);
};
</script>

<template>
  <div class="px-4">
    <div
      class="bg-white max-w-[780px] w-full mx-auto mt-[70px] rounded-2xl mb-24 pb-10 shadow-2xl"
    >
      <div
        class="py-8 px-2 text-3xl text-center bg-gray-300 mb-5 rounded-t-2xl overflow-hidden relative"
      >
        Choose your template

        <div
          class="absolute top-4 right-4 cursor-pointer"
          @click="useDashboard.showTemplatesSection = false"
          v-if="path == 'dashboard'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
            />
          </svg>
        </div>
      </div>
      <div class="px-5">
        <div
          class="flex flex-col xs:flex-row items-center justify-center xs:justify-between my-3"
        >
          <button
            class="py-1 px-4 mb-2 xs:mb-0 border-2 border-primary-color text-primary-color font-medium rounded-lg"
            @click="createEditorSession(emptySignatureTemplate)"
          >
            Start from scratch
          </button>
          <RouterLink to="/dashboard" v-if="path != 'dashboard'">
            <button
              class="py-1 px-4 bg-primary-color border border-primary-color text-white font-medium rounded-lg"
            >
              Go To Dashboard
            </button>
          </RouterLink>
        </div>

        <div class="bg-canvas-color w-full px-4 py-2 mt-8 rounded-xl">
          <div class="flex w-full flex-wrap">
            <div class="w-full md:w-[50%] px-3">
              <div
                class="w-full my-6"
                v-for="template in templates.first"
                :key="template.id"
              >
                <div
                  class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer overflow-hidden"
                >
                  <img
                    :src="'/images/templates/' + template.imgSrc"
                    alt=""
                    class=""
                  />
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
            <div class="w-full md:w-[50%] px-3">
              <div
                class="w-full my-4"
                v-for="template in templates.second"
                :key="template.id"
              >
                <div
                  class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer overflow-hidden"
                >
                  <img
                    :src="'/images/templates/' + template.imgSrc"
                    alt=""
                    class=""
                  />
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
