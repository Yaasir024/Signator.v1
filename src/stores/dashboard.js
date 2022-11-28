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
  updateDoc,
  collectionGroup,
  Timestamp,
  increment,
  arrayRemove,
} from "firebase/firestore";
import { authStore } from "./auth";
import { systemStore } from "./system";
import { uid } from "@/composables/useGenerateUid";

export const dashboardStore = defineStore("dashboard", () => {
  const useAuth = authStore();
  const useSystemStore = systemStore();
  const allSignatures = ref([]);
  const getSignatures = async () => {
    const colRef = collection(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "signatures"
    );
    const snapshot = await getDocs(colRef);

    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
      };
    });
    allSignatures.value = docs;
  };
  const deleteSignature = async (id) => {
    await deleteDoc(
      doc(firestoreDb, "users", useAuth.userId.uid, "signatures", id)
    )
      .then(async () => {
        await updateDoc(doc(firestoreDb, "users", useAuth.userId.uid), {
          publishedSignatures: arrayRemove(id),
        });
        getSignatures();
        useSystemStore.addNotificationData({
          message: "Signature has been successfully deleted.",
          type: "success",
        });
      })
      .catch(() => {
        useSystemStore.addNotificationData({
          message: "Signature delete unsuccessful.",
          type: "error",
        });
      });
  };
  const renameSignature = async (id, title) => {
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "signatures",
      id
    );
    await updateDoc(docRef, {
      title: title,
    })
      .then(() => {
        getSignatures();
        useSystemStore.addNotificationData({
          message: "Signature has been successfully renamed.",
          type: "success",
        });
      })
      .catch(() => {
        useSystemStore.addNotificationData({
          message: "Signature rename unsuccessful.",
          type: "error",
        });
      });
  };
  const duplicate = async (data) => {
    if (useSystemStore.isEligibleToCreate()) {
      let newData = data;

      newData.uid = uid(16);
      newData.title = newData.title + " (Copy)";
      const docRef = await setDoc(
        doc(
          firestoreDb,
          "users",
          useAuth.userId.uid,
          "signatures",
          newData.uid
        ),
        newData
      )
        .then(async() => {
          await updateDoc(doc(firestoreDb, "users", useAuth.userId.uid), {
            publishedSignatures: arrayUnion(data.value.uid),
          })
          getSignatures();
          useSystemStore.addNotificationData({
            message: "Signature has been successfully duplicated.",
            type: "success",
          });
        })
        .catch(() => {
          useSystemStore.addNotificationData({
            message: "Signature duplicate unsuccessful.",
            type: "error",
          });
        });
    } else {
      useSystemStore.addNotificationData({
        message: "Upgrade to create more signatures.",
        type: "error",
      });
    }
  };
  const showTemplatesSection = ref(false);

  return {
    allSignatures,
    getSignatures,
    renameSignature,
    deleteSignature,
    duplicate,
    showTemplatesSection,
  };
});
