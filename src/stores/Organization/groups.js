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

export const groupsStore = defineStore("groups", () => {
  const useSystemStore = systemStore();
  const useAuth = authStore();

  const allGroups = ref({
    data: [],
    status: false,
  });
  const allTemplates = [
    {
      id: "1",
      name: "Template01",
    },
    {
      id: "2",
      name: "Template 1",
    },
    {
      id: "3",
      name: "West Coast",
    },
    {
      id: "4",
      name: "Area1 Tech",
    },
  ];

  const colRef = collection(
    firestoreDb,
    "users",
    "thisistestorganization",
    "teams",
    "signator",
    "groups"
  );
  onSnapshot(colRef, (snapshot) => {
    let docs = [];
    snapshot.docs.forEach((doc) => {
      docs.push(doc.data());
    });
    allGroups.value.data = docs;
    allGroups.value.status = true;
  });

  const selectedGroup = ref();
  const showDeleteModal = ref(false);

  const openDeleteModal = (group) => {
    selectedGroup.value = group;
    showDeleteModal.value = true;
  };
  //   DELETE GROUP
  const deleteGroup = async () => {
    showDeleteModal.value = false;
    await deleteDoc(
      doc(
        firestoreDb,
        "users",
        "thisistestorganization",
        "teams",
        "signator",
        "groups",
        selectedGroup.value.id
      )
    )
      .then(async () => {
        useSystemStore.addNotificationData({
          message: "Signature has been successfully deleted.",
          type: "success",
        });
        await updateDoc(
          doc(
            firestoreDb,
            "users",
            "thisistestorganization",
            "teams",
            "signator"
          ),
          {
            groups: arrayRemove(selectedGroup.value.id),
          }
        );
      })
      .catch(() => {
        useSystemStore.addNotificationData({
          message: "Signature delete unsuccessful.",
          type: "error",
        });
      });
    selectedGroup.value = {};
  };

  const showEditModal = ref(false);
  const editModalType = ref("edit");

  const openEditModal = (group, type) => {
    editModalType.type = type;
    selectedGroup.value = group;
    showEditModal.value = true;
  };
  const saveGroup = async () => {
    showEditModal.value = false;
    const docRef = doc(
      firestoreDb,
      "users",
      "thisistestorganization",
      "teams",
      "signator",
      "groups",
      selectedGroup.value.id
    );
    await setDoc(docRef, selectedGroup.value).then(async () => {
      await updateDoc(
        doc(
          firestoreDb,
          "users",
          "thisistestorganization",
          "teams",
          "signator"
        ),
        {
          groups: arrayUnion(selectedGroup.value.id),
        }
      );
    });
    selectedGroup.value = {};
  };

  return {
    allGroups,
    allTemplates,
    selectedGroup,
    showDeleteModal,
    openDeleteModal,
    deleteGroup,
    showEditModal,
    openEditModal,
    editModalType,
    saveGroup,
  };
});
