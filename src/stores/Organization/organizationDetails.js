import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { storage, firestoreDb } from "@/services/firebase";
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
  onSnapshot,
  Timestamp,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  getStorage,
  // ref,
  uploadString,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from "firebase/storage";

import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";

export const organizationDetailStore = defineStore("organizationDetail", () => {
  const useSystemStore = systemStore();
  const useAuth = authStore();

  const organizationData = ref({
    data: [],
    status: false,
  });
  const colRef = doc(
    firestoreDb,
    "users",
    "thisistestorganization",
    "teams",
    "signator"
  );
  onSnapshot(colRef, (doc) => {
    organizationData.value.data = doc.data();
    console.log(doc.data());
  });

  const saveOrganizationData = async () => {
    const docRef = doc(
      firestoreDb,
      "users",
      "thisistestorganization",
      "teams",
      "signator"
    );
    await setDoc(docRef, teamData.value.data).then(async () => {
      useSystemStore.addNotificationData({
        message: "Team Data has been successfully deleted.",
        type: "success",
      });
    });
  };

  const uploadFileToStorage = async () => {
    let fullPath = useAuth.userId.uid + "/" + file.name;
    const storageRef = ref(storage, fullPath);

    const snapshot = await uploadString(storageRef, file.src, "data_url");
    if (snapshot) {
      const downloadUrl = await getDownloadURL(snapshot.ref);
      const metadata = await getMetadata(storageRef);

      return { snapshot, downloadUrl, metadata };
    }
  };

  return {
    organizationData,
    saveOrganizationData,
  };
});
