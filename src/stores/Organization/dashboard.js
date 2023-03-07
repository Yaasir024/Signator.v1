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
  onSnapshot,
  Timestamp,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";

export const dashboardStore = defineStore("dashboard", () => {
  const useSystemStore = systemStore();
  const useAuth = authStore();

  // Dashboard Current Section
  const currentSection = ref("templates");

  const teamData = ref({
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
    teamData.value.data = doc.data();
    console.log(doc.data());
  });

  const saveTeamData = async () => {
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

  const allTemplates = ref({
    data: [],
    status: false,
  });
  const templatesRef = collection(
    firestoreDb,
    "users",
    "thisistestorganization",
    "teams",
    "signator",
    "templates"
  );
  onSnapshot(templatesRef, (snapshot) => {
    let docs = [];
    snapshot.docs.forEach((doc) => {
      docs.push(doc.data());
    });
    allTemplates.value.data = docs;
    allTemplates.value.status = true;
  });

  return {
    allTemplates,
    teamData,
    saveTeamData,
    currentSection,
  };
});
