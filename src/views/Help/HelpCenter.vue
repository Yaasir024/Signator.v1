<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import MainLayout from "@/components/Layout/Main.vue";

import { articlesStore } from "@/stores/articles";
const useArticles = articlesStore();
const router = useRouter();

const searchQuery = ref("");
const search = () => {
  if (searchQuery.value != "") {
    useArticles.searchQuery = searchQuery.value;
    router.push({ path: `/help-center/search/${searchQuery.value}` });
    console.log(searchQuery.value);
  }
};
</script>

<template>
  <MainLayout>
    <section class="min-h-screen bg-white">
      <div class="mb-24">
        <div class="hero py-20 px-6 border-t w-full">
          <div class="max-w-[820px] mx-auto text-center">
            <h1 class="text-4xl font-medium">Welcome, How can we help?</h1>
            <div
              class="search-container w-[400px] mx-auto h-[60px] mt-8 bg-white rounded-xl shadow-2xl flex items-center justify-center"
            >
              <form
                class="w-[95%] h-[calc(60px_-_20px)] flex items-center justify-center"
                @submit.prevent="search()"
              >
                <div
                  class="w-[80%] h-full flex items-center px-2 bg-canvas-color rounded-xl"
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
                    class="w-full outline-none px-2 h-full bg-canvas-color"
                    v-model="searchQuery"
                  />
                </div>
                <button
                  type="submit"
                  class="btn w-[20%] h-[40px] flex items-center justify-center cursor-pointer text-base"
                >
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="max-w-[700px] mx-auto px-6 py-8">
          <section class="" v-if="useArticles.gettingStartedArticles">
            <h1 class="text-2xl font-medium">Getting Started</h1>
            <ul class="articles list-disc pl-5 inline-block">
              <li
                v-for="article in useArticles.gettingStartedArticles"
                :key="article.id"
                class="text-base hover:text-primary-color transition-all duration-300 ease-in-out"
              >
                <router-link :to="'/help-center/articles/' + article.uid">
                  <PrismicText :field="article.data.title" wrapper="h2" />
                </router-link>
              </li>
            </ul>
          </section>
          <section class="mt-2" v-if="useArticles.accountSettingsArticles">
            <h1 class="text-2xl font-medium">Account Settings</h1>
            <ul class="articles list-disc pl-5 inline-block">
              <li
                v-for="article in useArticles.accountSettingsArticles"
                :key="article.id"
                class="text-base hover:text-primary-color transition-all duration-300 ease-in-out"
              >
                <router-link :to="'/help-center/articles/' + article.uid">
                  <PrismicText :field="article.data.title" wrapper="h2" />
                </router-link>
              </li>
            </ul>
          </section>
          <section class="mt-2" v-if="useArticles.installationGuidesArticles">
            <h1 class="text-2xl font-medium">Installation Guides</h1>
            <ul class="articles list-disc pl-5 inline-block">
              <li
                v-for="article in useArticles.installationGuidesArticles"
                :key="article.id"
                class="text-base hover:text-primary-color transition-all duration-300 ease-in-out"
              >
                <router-link :to="'/help-center/articles/' + article.uid">
                  <PrismicText :field="article.data.title" wrapper="h2" />
                </router-link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
