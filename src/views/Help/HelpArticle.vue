<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import {
  usePrismicDocumentByUID,
  PrismicText,
  defineSliceZoneComponents,
  PrismicRichText,
} from "@prismicio/vue";

import {htmlSerializer} from "@/services/htmlSerializer"

import Image from "@/components/Slices/Image.vue";
import Text from "@/components/Slices/Text.vue";
import Step from "@/components/Slices/Step.vue";

const route = useRoute();
const path = route.params.uid;

const { data: article, error } = usePrismicDocumentByUID("help", path);
// const { data: article, error } = usePrismicDocumentByUID("help_center", 'home');
const components = defineSliceZoneComponents({
  image_component: Image,
  text_component: Text,
  step: Step,
});
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="px-6 py-8">
        <div class="flex">
            <aside class="flex-25% bg-red-400">
                AAAAAAAAA
            </aside>
            <article class="flex-66.66% px-4" v-if="article">
                <header class="pb-4 mb-5 border-b-2">
                    <div class="text-3xl font-medium">
                        {{$prismic.asText(article.data.title)}}
                    </div>
                    <div class="">
                        BY: Signator
                    </div>
                </header>
                <div class="">
                    <SliceZone :slices="article.data.body" :components="components"/>
                </div>
            </article>
        </div>
    </div>

    <!-- <div class="bg-red-200" v-if="article">
      <PrismicRichText :field="article.data.info" :html-serializer="htmlSerializer"/>
      <PrismicText :field="article.data.article_title" />

      aaaaaaaaaaaaaaaaaa
    </div> -->

    <div class="" v-if="article">
      {{ path }}
      {{ article.data }}
    </div>
  </div>
</template>
