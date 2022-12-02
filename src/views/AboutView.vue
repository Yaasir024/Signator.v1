<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navigations/Navbar.vue";
// import data from "@/data/notification";

import {
  useSinglePrismicDocument,
  usePrismicDocumentByUID,
} from "@prismicio/vue";
const { document } = useSinglePrismicDocument("home");

const { data: home, error } = usePrismicDocumentByUID(
  "help",
  "setting-up-your-signator-account"
);
</script>

<template>
  <div class="about">
    <Navbar />
    <!-- {{document}} -->
    {{ home }}
    <!-- {{data}} -->
    <div class="" v-if="document">
      {{ document }}
      <!-- <h1>{{ $prismic.asText(document.data.title) }}</h1> -->
    </div>
    <!-- <div class="" v-if="home">
      <h1>{{ $prismic.asText(home.data.title) }}</h1>
    </div> -->
  </div>
</template>

<style></style>
