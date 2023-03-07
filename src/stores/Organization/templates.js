import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

import { uid } from "@/composables/useGenerateUid";

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

export const templateStore = defineStore("template", () => {
  const useSystemStore = systemStore();
  const useAuth = authStore();

  // Editor Current Tab
  const currentEditorTab = ref("details");

  const defaultData = {
    uid: "",
    title: "New Template",
    image: {},
    customInfo: [],
    socialInfo: [],
    addons: [],
    signoff: {},
    design: {
      layout: {
        fontFamily: "Verdana",
        fontSize: "14",
        textColor: "#000000",
        templateColor: "#808080",
        layout: "Layout02",
      },
      image: { width: 70, roundness: 0 },
      details: { label: "full" },
      socialIcon: { size: 26, roundness: 0 },
    },
  };

  // Side Panel Visibility
  // const showSidePanel = ref(false);

  const showSidePanel = ref(false);
  const show = ref("a");

  const editTemplateData = ref({});

  const editTemplate = (tempData) => {
    console.log(tempData, "TEMPLATE DATA");
    const d = {...tempData};
    console.log(d, 'D')
    editTemplateData.value = d;
    console.log(editTemplateData, "EDITED DATA");
    showSidePanel.value = true;
  };

  const addNewTemplate = () => {
    let d = defaultData;
    d.uid = uid(8);
    editTemplateData.value = d;
    showSidePanel.value = true;
  };

  const saveTemplate = async () => {
    showSidePanel.value = false;
    const docRef = doc(
      firestoreDb,
      "users",
      "thisistestorganization",
      "teams",
      "signator",
      "templates",
      editTemplateData.value.uid
    );
    await setDoc(docRef, editTemplateData.value).then(async () => {
      await updateDoc(
        doc(
          firestoreDb,
          "users",
          "thisistestorganization",
          "teams",
          "signator"
        ),
        {
          templates: arrayUnion({ id: data.value.uid, name: data.value.title }),
        }
      );
    });
    editTemplateData.value = {};
  };

  const deleteTemplate = async () => {
    showSidePanel.value = false;
    await deleteDoc(
      doc(
        firestoreDb,
        "users",
        "thisistestorganization",
        "teams",
        "signator",
        "templates",
        editTemplateData.value.uid
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
            templates: arrayRemove({
              id: editTemplateData.value.uid,
              name: editTemplateData.value.title,
            }),
          }
        );
      })
      .catch(() => {
        useSystemStore.addNotificationData({
          message: "Signature delete unsuccessful.",
          type: "error",
        });
      });
    editTemplateData.value = {};
  };

  return {
    showSidePanel,
    show,
    editTemplateData,
    currentEditorTab,
    editTemplate,
    addNewTemplate,
    saveTemplate,
    deleteTemplate,
  };
});
