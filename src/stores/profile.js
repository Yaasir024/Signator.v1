import { defineStore } from "pinia";
import { firestoreDb } from "@/services/firebase";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";

import { authStore } from "./auth";
import { systemStore } from "@/stores/system";

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

export const profileStore = defineStore("profile", () => {
  const useAuth = authStore();
  const useSystem = systemStore();
  const billingHistoryData = ref([]);

  if (useAuth.userState) {
    const colRef = collection(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "billingHistory"
    );
    onSnapshot(colRef, (snapshot) => {
      let docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push(doc.data());
      });
      billingHistoryData.value = docs;
      console.log('AAA')
    });
    // console.log(billingHistoryData.value);
  }

  return {
    billingHistoryData
  }
});
