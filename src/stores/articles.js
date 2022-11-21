import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {
  useSinglePrismicDocument,
  usePrismicDocumentByUID,
  useAllPrismicDocumentsByType,
  useAllPrismicDocumentsByTag,
  PrismicText,
} from "@prismicio/vue";
export const articlesStore = defineStore("articles", () => {
  const { data: helpData } = useAllPrismicDocumentsByType("help");
  const { data: gettingStartedArticles } = useAllPrismicDocumentsByTag(
    "gettingStartedHelpArticles"
  );
  const { data: accountSettingsArticles } = useAllPrismicDocumentsByTag(
    "accountSettingsHelpArticles"
  );
  const { data: installationGuidesArticles } = useAllPrismicDocumentsByTag(
    "installationGuidesHelpArticles"
  );

  const getSimilarArticles = (section) => {
    if (section === "gettingStartedHelpArticles") {
      return gettingStartedArticles.value.slice(0, 4);
    } else if (section === "accountSettingsHelpArticles") {
      return accountSettingsArticles.value.slice(0, 4);
    } else if (section === "installationGuidesHelpArticles") {
      return installationGuidesArticles.value.slice(0, 4);
    }
  };
  const searchQuery = ref("");
  const currentCategory = ref("all");
  const setQuery = (q) => {
    searchQuery.value = q
  }
  const searchResults = computed(() => {
    const query = ref(searchQuery.value.toLowerCase());
    if (currentCategory.value == "all") {
      return helpData.value.filter((item) => {
        return Object.values(item).some((word) =>
          String(word).toLowerCase().includes(query.value)
        );
      });
    } else if (currentCategory.value == "gettingStarted") {
      return gettingStartedArticles.value.filter((item) => {
        return Object.values(item).some((word) =>
          String(word).toLowerCase().includes(query.value)
        );
      });
    } else if (currentCategory.value == "accountSettings") {
      return accountSettingsArticles.value.filter((item) => {
        return Object.values(item).some((word) =>
          String(word).toLowerCase().includes(query.value)
        );
      });
    } else if (currentCategory.value == "installationGuides") {
      return installationGuidesArticles.value.filter((item) => {
        return Object.values(item).some((word) =>
          String(word).toLowerCase().includes(query.value)
        );
      });
    }
  });

  return {
    helpData,
    gettingStartedArticles,
    accountSettingsArticles,
    installationGuidesArticles,
    getSimilarArticles,
    searchQuery,
    setQuery,
    currentCategory,
    searchResults,
  };
});
