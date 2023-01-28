import { ref, computed, watch, watchEffect } from "vue";

import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
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

export const systemStore = defineStore("system", () => {
  const useAuth = authStore();
  const userFullData = ref({});
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
    videoMeeting: ["basic", "pro"],
    cta: ["free", "basic", "pro"],
  };
  const checkFeatureQualification = (feature) => {
    return featuresQualification[feature].includes(
      userFullData.value.subscriptionData.plan
    );
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
      userFullData.value.signaturePackage
    ) {
      return true;
    } else {
      return false;
    }
  };

  return {
    loadingState,
    notificationData,
    addNotificationData,
    userFullData,
    isEligibleToCreate,
    checkFeatureQualification,
  };
});
