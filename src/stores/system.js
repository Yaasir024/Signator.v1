import { ref, computed, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useCookies } from "@vueuse/integrations/useCookies";
import router from "@/router";
import { firestoreDb } from "@/services/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  updateDoc,
  collectionGroup,
  Timestamp,
  increment,
  onSnapshot,
} from "firebase/firestore";

import { message } from "ant-design-vue";
import "ant-design-vue/lib/message/style/index.css";

import { authStore } from "./auth";

import { getCookieExpiryDate } from "@/composables/useFormatDate";

export const systemStore = defineStore("system", () => {
  const useAuth = authStore();

  // **RESOLVE ROUTES** //
  const route = useRoute();
  const path = route.name;


  const userFullData = ref({});


  const cookies = useCookies(["locale", "__privacypref"]);

  const setLocale = () => {
    console.log("SET");
    cookies.set("locale", "en-US");
  };

  const privacyPreferenceVisibility = ref(false);

  const setprivacyPreferences = (preferences) => {
    let preference = preferences.join("-");
    privacyPreferenceVisibility.value = false;
    cookies.set("__privacypref", preference, {
      expires: getCookieExpiryDate(),
    });
  };

  const getPrivacyPreferences = () => {
    if (cookies.get("__privacypref")) {
      let preArr = cookies.get("__privacypref").split("-");
      return preArr;
    }
  };

  if (useAuth.userState) {
    const userRef = doc(firestoreDb, "users", useAuth.userId.uid);
    onSnapshot(userRef, (doc) => {
      userFullData.value = doc.data();
      console.log(userFullData.value);
    });
  }


  const featuresQualification = {
    customFields: ["basic", "pro"],
    signoff: ["free", "basic", "pro"],
    disclaimer: ["basic", "pro"],
    social: ["free", "basic", "pro"],
    greenMessage: ["basic", "pro"],
    videoMeeting: ["pro"],
    cta: ["free", "basic", "pro"],
  };
  const checkFeatureQualification = (feature) => {
    if (userFullData.value.subscriptionData) {
      return featuresQualification[feature].includes(
        userFullData.value.subscriptionData.plan
      );
    }
  };
  // userFullData.subscriptionData.plan

  const loadingState = ref(false);

  const notificationData = ref(null);

  const addNotificationData = (data) => {
    if (data.type == "success") {
      message.success(data.message);
    } else if (data.type == "error") {
      message.error(data.message);
    } else if (data.type == "warning") {
      message.warning(data.message);
    }
  };

  const isEligibleToCreate = () => {
    if (
      userFullData.value.publishedSignatures.length <
      userFullData.value.subscriptionData.signaturePackage
    ) {
      return true;
    } else {
      return false;
    }
  };

  return {
    path,
    setLocale,
    privacyPreferenceVisibility,
    setprivacyPreferences,
    getPrivacyPreferences,
    loadingState,
    notificationData,
    addNotificationData,
    userFullData,
    isEligibleToCreate,
    checkFeatureQualification,
  };
});
