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

export const teamDetailStore = defineStore("teamDetail", () => {
  const useAuth = authStore();
  const useSystem = systemStore();

  const defaultTeamData = {
    uid: "",
    name: "",
    avatar: {
      name: "",
      src: "",
      fullPath: "",
      timeCreated: "",
    },
    industry: "",
    contact: {
      email: "",
      phone: "",
      address: "",
      website: "",
    },
    social: [],
  };

  const showCreateTeamTab = ref(false);
  const createTeamTab = ref("name");
  const newTeamData = ref({
    uid: "",
    name: "",
    avatar: {
      name: "",
      src: "",
      fullPath: "",
      timeCreated: "",
    },
    industry: "",
    contact: {
      email: "",
      phone: "",
      address: "",
      website: "",
    },
    social: [],
  });
  const openCreateTeamTab = () => {
    newTeamData.value = defaultTeamData;
    showCreateTeamTab.value = true;
  };
  const nextCreateTab = (tab) => {
    createTeamTab.value = tab;
  };
  const saveTeamData = async () => {
    if (newTeamData.value.avatar.src != "") {
      const { snapshot, downloadUrl, metadata } = await uploadFileToStorage(
        {
          src: newTeamData.value.avatar.src,
          name: "logo" + uid(3),
        },
        newTeamData.value.name
      );
      newTeamData.value.avatar.src = downloadUrl;
      newTeamData.value.avatar.name = metadata.name;
      newTeamData.value.avatar.fullPath = metadata.fullPath;
      newTeamData.value.avatar.timeCreated = metadata.timeCreated;
      addTeamDataToDB();
    } else {
      addTeamDataToDB();
    }
    console.log(newTeamData.value);
    showCreateTeamTab.value = false;
  };

  const addTeamDataToDB = async () => {
    // serverTimestamp
    // useSystemStore.loadingState = true
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "teams",
      newTeamData.value.name
    );
    await setDoc(docRef, {
      ...newTeamData.value,
      createdAt: serverTimestamp(),
    }).then(async () => {
      await updateDoc(doc(firestoreDb, "users", useAuth.userId.uid), {
        teams: arrayUnion({
          uid: newTeamData.value.uid,
          name: newTeamData.value.name,
          avatar: newTeamData.value.avatar.src,
        }),
      });
      //   router.push({ path: `/preview/${newTeamData.value.name}` });

      //   setTimeout(() => {
      // newTeamData.value = {};
      //   }, "5000");
    });
  };

  return {
    showCreateTeamTab,
    createTeamTab,
    newTeamData,
    openCreateTeamTab,
    nextCreateTab,
    saveTeamData,
  };
});
