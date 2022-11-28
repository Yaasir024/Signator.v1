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

  const drafts = useLocalStorage("__usedrafts", []);

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
  const addDraft = (data, status) => {
    if (!drafts.value.some((e) => e.uid === data.uid)) {
      drafts.value.push({ uid: data.uid, published: status });
      localStorage.setItem(data.uid, JSON.stringify(data));
      router.push({ path: `/editor/${data.uid}` });
      // router.go();
    } else {
      localStorage.setItem(data.uid, JSON.stringify(data));
      router.push({ path: `/editor/${data.uid}` });
      // router.go();
    }
  };
  const discardDraft = (uid) => {
    localStorage.removeItem(uid);
    drafts.value = drafts.value.filter((item) => item.uid != uid);
    getUnpublishedDrafts();
    addNotificationData({
      message: "Draft has been successfully deleted.",
      type: "success",
    });
  };
  const unpublishedDrafts = ref([]);
  const getUnpublishedDrafts = () => {
    unpublishedDrafts.value = [];
    drafts.value.forEach((draft) => {
      if (!draft.published) {
        unpublishedDrafts.value.push(
          JSON.parse(localStorage.getItem(draft.uid))
        );
      }
    });
  };
  if (useAuth.userState) {
    getUnpublishedDrafts();
  }

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
    drafts,
    addDraft,
    discardDraft,
    getUnpublishedDrafts,
    unpublishedDrafts,
    userFullData,
    isEligibleToCreate,
  };
});
