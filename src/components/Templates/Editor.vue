<script setup>
import { ref, reactive, computed } from "vue";
import templateData from "@/data/templates";

const middleIndex = Math.ceil(templateData.templates.length / 2);

// const templates = ref({
//   first: templateData.templates.slice(0, middleIndex)
// });
const templates = computed(() => {
  return {
    first: templateData.templates.slice(0, middleIndex),
    second: templateData.templates.slice(-middleIndex),
  };
});

const user = ref("pro");
</script>

<template>
  <div class="bg-[#ffffff83] backdrop-blur-[4px] h-screen overflow-y-auto px-6">
    {{ templates.second.length }}
    {{ middleIndex }}
    {{ templateData.templates.length }}
    <!-- {{templateData.templates}} -->
    <div
      class="bg-white h-full max-w-[780px] w-full mx-auto mt-[70px] rounded-2xl mb-12 shadow-xl"
    >
      <div
        class="py-5 px-2 text-2xl text-center bg-canvas-color mb-5 rounded-t-2xl overflow-hidden"
      >
        Choose your template
      </div>
      <div class="px-3">
        <div class="flex items-center justify-between">
          <button
            class="py-1 px-4 border border-primary-color text-primary-color font-medium rounded-lg"
          >
            Go To Dashboard
          </button>
          <RouterLink to="/dashboard">
            <button
              class="py-1 px-4 bg-primary-color border border-primary-color text-white font-medium rounded-lg"
            >
              Go To Dashboard
            </button>
          </RouterLink>
        </div>

        <div class="bg-canvas-color w-full px-4 py-2 mt-4">
          <div class="flex w-full">
            <div class="w-[50%] px-3">
              <div
                class="w-full my-6"
                v-for="template in templates.first"
                :key="template.id"
              >
                <div
                  class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
                >
                  <img
                    :src="'/images/templates/' + template.imgSrc"
                    alt=""
                    class=""
                  />
                  <div
                    class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
                  >
                    <!-- :to="`/editor/${template.name}`" -->
                    <!-- v-if="template.type == user || user == 'pro'"
                  @click="createEditorSession(template.data)" -->
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-if="template.type == user || user == 'pro'"
                    >
                      Customize This Template
                    </button>
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-else
                    >
                      Upgrade To Pro to Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[50%] px-3">
              <div
                class="w-full my-4"
                v-for="template in templates.second"
                :key="template.id"
              >
                <div
                  class="card p-5 bg-white shadow-lg rounded-xl relative cursor-pointer"
                >
                  <img
                    :src="'/images/templates/' + template.imgSrc"
                    alt=""
                    class=""
                  />
                  <div
                    class="overlay absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#ffffffb3] opacity-0 transition-all ease-in-out duration-350"
                  >
                    <!-- :to="`/editor/${template.name}`" -->
                    <!-- v-if="template.type == user || user == 'pro'"
                  @click="createEditorSession(template.data)" -->
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-if="template.type == user || user == 'pro'"
                    >
                      Customize This Template
                    </button>
                    <button
                      class="bg-primary-color text-white py-2 px-3 rounded-2xl"
                      v-else
                    >
                      Upgrade To Pro to Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- {{middleIndex}} -->
          <!-- {{data.templates[0]}} -->
          ---------------------- ---------------------- ----------------------
          ----------------------
          <!-- {{ templates.first }} -->
        </div>
      </div>
    </div>
  </div>
</template>
