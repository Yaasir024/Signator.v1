import { ref, computed } from "vue";
import { defineStore } from "pinia";
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
  collectionGroup,
  Timestamp,
} from "firebase/firestore";
import { authStore } from "./auth";

export const dashboardStore = defineStore("dashboard", () => {
  const useAuth = authStore();
  const allSignatures = ref([]);
  const getSignatures = async () => {
    const colRef = collection(firestoreDb, "users", useAuth.user, "signatures");
    const snapshot = await getDocs(colRef);

    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data()
      };
    });
    allSignatures.value = docs
    console.log(docs);
  };
  const deleteSignature = async (id) => {
    await deleteDoc(doc(firestoreDb, "users", useAuth.user, "signatures", id))
      .then(() => {
        console.log('Sucess')
      })
  }

  return { allSignatures, getSignatures };
});
