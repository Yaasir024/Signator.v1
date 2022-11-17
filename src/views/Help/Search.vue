<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";

import { articlesStore } from "@/stores/articles";
const useArticles = articlesStore();

const route = useRoute();
const path = route.params.query;
</script>

<template>
    <div class="min-h-screen bg-white">
        <Navbar />
        {{path}}
        <Footer />
    </div>
</template>