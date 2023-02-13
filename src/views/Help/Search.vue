<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import MainLayout from "@/components/Layout/Main.vue";

import { articlesStore } from "@/stores/articles";
const useArticles = articlesStore();

const router = useRouter();
const route = useRoute();
const path = route.params.query;

const searchQuery = ref("");
const search = () => {
  if (searchQuery.value != "") {
    router.push({ path: `/help-center/search/${searchQuery.value}` });
    useArticles.setQuery(searchQuery.value);
    // useArticles.searchQuery = searchQuery.value;
    // searchQuery.value = "";
    console.log(searchQuery.value);
  }
};

const showCategoryMenu = ref(false);
</script>

<template>
  <MainLayout>
    <div class="min-h-screen bg-white">
      <div class="">
        <div class="py-5 px-8 mb-14 bg-canvas-color flex justify-end">
          <form
            class="flex items-center bg-white max-w-[350px] w-full h-[40px] px-2 rounded-xl shadow-lg"
            @submit.prevent="search()"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for question"
              class="w-full outline-none px-2 h-full bg-white"
              v-model="searchQuery"
            />
          </form>
        </div>
        <section
          class="flex mb-24 flex-wrap max-w-[1240px] mx-auto"
          v-if="useArticles.searchResults"
        >
          <aside class="flex-full md:flex-25% px-4 pl-5 mb-5 md:mb-0">
            <div
              class="text-lg font-medium mb-3 h-[30px] flex items-center justify-between md:block cursor-pointer"
              @click="showCategoryMenu = !showCategoryMenu"
            >
              Categories
              <div class="block md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  v-if="!showCategoryMenu"
                >
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  v-if="showCategoryMenu"
                >
                  <path
                    d="M256 82.7l22.6 22.6 192 192L493.3 320 448 365.3l-22.6-22.6L256 173.3 86.6 342.6 64 365.3 18.7 320l22.6-22.6 192-192L256 82.7z"
                  />
                </svg>
              </div>
            </div>
            <ul
              class="overflow-hidden transition-all duration-400 ease-in-out px-6 md:px-0"
              :class="showCategoryMenu ? 'h-full' : 'h-0'"
            >
              <li>
                <button
                  class="py-1 px-3 text-base w-full transition-all duration-300 ease-in-out"
                  :class="
                    useArticles.currentCategory == 'all'
                      ? 'bg-primary-color text-white'
                      : 'text-primary-color'
                  "
                  @click="useArticles.currentCategory = 'all'"
                >
                  All
                </button>
                <button
                  class="py-1 px-3 text-base w-full transition-all duration-300 ease-in-out"
                  :class="
                    useArticles.currentCategory == 'gettingStarted'
                      ? 'bg-primary-color text-white'
                      : 'text-primary-color '
                  "
                  @click="useArticles.currentCategory = 'gettingStarted'"
                >
                  Getting Started
                </button>
                <button
                  class="py-1 px-3 text-base w-full transition-all duration-300 ease-in-out"
                  :class="
                    useArticles.currentCategory == 'accountSettings'
                      ? 'bg-primary-color text-white'
                      : 'text-primary-color '
                  "
                  @click="useArticles.currentCategory = 'accountSettings'"
                >
                  Account Settings
                </button>
                <button
                  class="py-1 px-3 text-base w-full transition-all duration-300 ease-in-out"
                  :class="
                    useArticles.currentCategory == 'installationGuides'
                      ? 'bg-primary-color text-white'
                      : 'text-primary-color '
                  "
                  @click="useArticles.currentCategory = 'installationGuides'"
                >
                  Installation Guide
                </button>
              </li>
            </ul>
          </aside>
          <main class="flex-full md:flex-75% px-4">
            <div class="text-lg font-medium mb-4 pb-2 border-b-2">
              {{ useArticles.searchResults.length }} results for "{{ path }}"
            </div>
            <ul class="articles px-3">
              <li
                v-for="article in useArticles.searchResults"
                :key="article.id"
                class="py-4"
              >
                <router-link :to="'/help-center/articles/' + article.uid">
                  <PrismicText
                    :field="article.data.title"
                    wrapper="h2"
                    class="text-base text-primary-color hover:underline transition-all duration-300 ease-in-out"
                  />
                </router-link>
                <div class="flex">
                  <p class="">Yaasir | Signator</p>
                  <p class="ml-2">
                    {{ article.data.date_created }}
                  </p>
                </div>
                <div class="">
                  <PrismicText
                    :field="article.data.excerpt"
                    wrapper="h4"
                    class="text-base"
                  />
                </div>
              </li>
            </ul>
          </main>
        </section>
      </div>
    </div>
  </MainLayout>
</template>
