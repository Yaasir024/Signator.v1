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

import { authStore } from "./auth";

export const systemStore = defineStore("system", () => {
  const useAuth = authStore();


  const loadingState = ref(false);
  const toast = ref(false);

  const toastData = ref([
    {
      id: "22s",
      type: "Success",
      message: "Error Loading Page",
    },
  ]);

  const userFullData = ref(null);
  if (useAuth.userState) {
    const userRef = doc(firestoreDb, "users", useAuth.userId.uid);
    onSnapshot(userRef, (doc) => {
      userFullData.value = doc.data();
      console.log(userFullData.value);
    });
  }

  const notificationData = ref(null);

  const addNotificationData = (data) => {
    if (!notificationData) {
      notificationData.value = data;
      setTimeout(() => (notificationData.value = null), 8000);
    } else {
      setTimeout(() => (notificationData.value = null), 3000);
      notificationData.value = data;
      setTimeout(() => (notificationData.value = null), 8000);
    }
  };

  const isEligibleToCreate = () => {
    if (userFullData.value.publishedSignatures.length < userFullData.value.signaturePackage
    ) {
      return true;
    } else {
      return false;
    }
  };

  return {
    loadingState,
    toastData,
    notificationData,
    addNotificationData,
    userFullData,
    isEligibleToCreate,
  };
});
