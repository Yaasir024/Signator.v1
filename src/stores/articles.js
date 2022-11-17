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
    if(section === 'gettingStartedHelpArticles') {
        return gettingStartedArticles.value.slice(0, 4)
    } else if(section === 'accountSettingsHelpArticles') {
        return accountSettingsArticles.value.slice(0, 4)
    }else if(section === 'installationGuidesHelpArticles') {
        return installationGuidesArticles.value.slice(0, 4)
    }
  }
  return {
    helpData,
    gettingStartedArticles,
    accountSettingsArticles,
    installationGuidesArticles,
    getSimilarArticles
  };
});
