import { defineStore } from "pinia";
import { firestoreDb } from "@/services/firebase";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";

import { uid } from "@/composables/useGenerateUid";

import { uploadFileToStorage } from "@/services/teams/handleImages";

import { authStore } from "@/stores/auth";
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
  serverTimestamp,
  increment,
  onSnapshot,
  orderBy,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const detailsStore = defineStore("details", () => {
  const useAuth = authStore();
  const useSystem = systemStore();
  const route = useRoute();

  const teamData = ref({
    data: {},
    status: false,
  });

  if (useAuth.userState && route.name == "team-dashboard") {
    onSnapshot(
      doc(firestoreDb, "users", useAuth.userId.uid, "teams", route.params.team),
      (snapshot) => {
        teamData.value.data= snapshot.data()
        teamData.value.status= true
      }
    );
  }
  const currentSection = ref("templates");

  return {
    currentSection,
    teamData
  };
});
