<script setup>
import { ref, reactive, onBeforeMount, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { dashboardStore } from "@/stores/dashboard";

import Layout01 from "@/components/Editor/Main/Layout/01.vue";
import Layout02 from "@/components/Editor/Main/Layout/02.vue";
import Layout03 from "@/components/Editor/Main/Layout/03.vue";
import Layout04 from "@/components/Editor/Main/Layout/04.vue";
import Layout05 from "@/components/Editor/Main/Layout/05.vue";

const layouts = {
  Layout02,
  Layout03,
  Layout04,
  Layout05,
};

const useDashboard = dashboardStore();

onBeforeMount(() => {
  console.log("onBEforeMount");
});
const newSignature = () => {
  console.log("Create New Signature");
  useDashboard.getSignatures()
};
const deleteSignature = (id) => {
  console.log('Delete', id)
}
</script>

<template>
  <div class="min-h-screen bg-canvas-color">
    <Navbar />
    <main class="py-8 px-8">
      <div class="flex">
        <main class="w-full py-4 px-2">
          <div class="header w-full flex justify-end">
            <button
              class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
              @click="newSignature()"
            >
              New Signature
            </button>
          </div>
          <div class="signatures px-2 py-3">
            <!-- Card -->
            <div
              class="card bg-white shadow-lg border rounded-lg mb-5 px-4"
              v-for="data in useDashboard.allSignatures"
              :key="data.uid"
            >
              <div class="heading pt-3 pb-2 px-2 border-b">
                <h1 class="text-lg font-medium">{{ data.title }}</h1>
              </div>
              <div
                class="w-full h-full flex flex-col py-1 px-4 overflow-hidden"
              >
                <div class="">
                  <component
                    :is="layouts[data.design.layout.layout]"
                    class="tab"
                    :data="data"
                  ></component>
                </div>
              </div>
              <div
                class="pt-3 pb-4 px-2 border-t flex items-center justify-between"
              >
                <button
                  class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
                  @click="newSignature()"
                >
                  Edit Signature
                </button>
                <div class="flex items-center">
                  <div class="mr-3 cursor-pointer" title="Duplicate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M10 19h10v1h-10v-1zm14-13v18h-18v-6h-6v-18h18v6h6zm-18 0h10v-4h-14v14h4v-10zm16 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-3.93l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-2v14h14v-14zm-12 6h10v-1h-10v1zm0 3h10v-1h-10v1z"
                      />
                    </svg>
                  </div>
                  <div class="mr-3 cursor-pointer" title="Rename">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
                      />
                    </svg>
                  </div>
                  <div class="cursor-pointer" title="Delete" @click="deleteSignature(data.uid)">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div class="w-[450px] pt-18 px-1">
          <div
            class="card m-2 h-[220px] w-full bg-white shadow-lg border rounded-lg"
          >
            <div
              class="w-full h-full px-6 text-center flex flex-col items-center justify-center"
            >
              <p class="text-base">
                Upgrade your account to unlock Pro Features and create more
                signatures..
              </p>
              <button
                class="mt-3 py-2 px-4 bg-primary-color text-white font-medium rounded-xl"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
