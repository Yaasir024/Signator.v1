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

  // COOKIES //
  const cookies = useCookies(["__privacypref"]);

  // USER BIODATA //
  const userData = ref({
    data: {},
    status: false,
  });
  const userFullData = ref({});

  // LOADING STATE //
  const loadingState = ref(false);

  // COOKIES SETTINGS //
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
      userData.value.data = doc.data();
      userData.value.status = true;
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
    privacyPreferenceVisibility,
    setprivacyPreferences,
    getPrivacyPreferences,
    loadingState,
    notificationData,
    addNotificationData,
    userFullData,
    userData,
    isEligibleToCreate,
    checkFeatureQualification,
  };
});
