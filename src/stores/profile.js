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
  orderBy
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
    onSnapshot(query(colRef, orderBy('transactionDate')), (snapshot) => {
      let docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push(doc.data());
      });
      billingHistoryData.value = docs;
    });
  }

  // BILLING DETAILS MODAL
  const billingDetailsModalVisibility = ref(false)
  const billingDetailsModalData = ref('Article')

  const openBillingDetailsModal = (data) => {
    billingDetailsModalData.value = data
    billingDetailsModalVisibility.value = true
  }
  const closeBillingDetailsModal = () => {
    billingDetailsModalData.value = {}
    billingDetailsModalVisibility.value = false
  }

  return {
    billingHistoryData,
    billingDetailsModalVisibility,
    billingDetailsModalData,
    openBillingDetailsModal,
    closeBillingDetailsModal
  }
});
