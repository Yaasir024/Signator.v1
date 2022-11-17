<script setup>
import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import {
  usePrismicDocumentByUID,
  PrismicText,
  defineSliceZoneComponents,
  PrismicRichText,
  useAllPrismicDocumentsByTag,
} from "@prismicio/vue";

import Image from "@/components/Slices/Image.vue";
import Text from "@/components/Slices/Text.vue";
import Step from "@/components/Slices/Step.vue";

import { articlesStore } from "@/stores/articles";
const useArticles = articlesStore();

const route = useRoute();
const path = route.params.uid;

const { data: article, error } = usePrismicDocumentByUID("help", path);
// const { data: article, error } = usePrismicDocumentByUID("help_center", 'home');
const components = defineSliceZoneComponents({
  image_component: Image,
  text_component: Text,
});
const { data: similarArticles } = useAllPrismicDocumentsByTag(
  "installationGuidesHelpArticles"
);
const get = () => {
  console.log(similarArticles.value.slice(0, 4));
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <div class="max-w-[1150px] mx-auto px-6 pt-16 mb-24">
      <div class="flex" v-if="article">
        <article class="flex-100% lg:flex-75% px-6">
          <header class="pb-4 mb-5 px-3 border-b-2">
            <div class="text-4xl font-medium mb-3">
              {{ $prismic.asText(article.data.title) }}
            </div>
            <div class="text-lg">BY: Signator</div>
          </header>
          <div class="px-3 pt-8 pb-12 border-b-2">
            <SliceZone :slices="article.data.body" :components="components" />
          </div>
        </article>
        <aside class="flex-25% hidden lg:block">
          <div class="pt-14 px-3">
            <h2 class="mb-4 text-2xl font-medium">Articles in this section</h2>
            <ul class="articles">
              <li
                v-for="a in useArticles.getSimilarArticles(article.data.section)"
                :key="a.id"
                class="text-base hover:text-primary-color transition-all duration-300 ease-in-out"
                :class="a.id == article.id ? 'text-primary-color' : ''"
              >
                <router-link :to="'/help-center/articles/' + a.uid">
                  <PrismicText :field="a.data.title" wrapper="h2" />
                </router-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
    <Footer />
  </div>
</template>
