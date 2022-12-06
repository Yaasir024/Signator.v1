import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { firestoreDb } from "@/services/firebase";

import { notification } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/lib/notification/style/index.css';

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
  onSnapshot,
} from "firebase/firestore";

import { authStore } from "./auth";
import { editorStore } from "@/stores/editor";
import { systemStore } from "./system";
import { uid } from "@/composables/useGenerateUid";

export const dashboardStore = defineStore("dashboard", () => {
  const useAuth = authStore();
  const useEditorStore = editorStore();
  const useSystemStore = systemStore();
  const allSignatures = ref([]);

  
  if (useAuth.userState) {
    const colRef = collection(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "signatures"
    );
    onSnapshot(colRef, (snapshot) => {
      let docs = []
      snapshot.docs.forEach((doc) => {
        docs.push(doc.data());
      });
      allSignatures.value = docs
      confirmDraft()
    });
  }

  const confirmDraftModal = ref(false)
  const confirmDraft = () => {
    setTimeout(() => {
      
      if(useEditorStore.data.uid && !allSignatures.value.some((e) => e.uid === useEditorStore.data.uid)) {
        confirmDraftModal.value = true;
      }
    }, "2000");
  }
  
  
  const deleteSignature = async (id) => {
    await deleteDoc(
      doc(firestoreDb, "users", useAuth.userId.uid, "signatures", id)
    )
      .then(async () => {
        await updateDoc(doc(firestoreDb, "users", useAuth.userId.uid), {
          publishedSignatures: arrayRemove(id),
        });
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
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      duration: 3,
      onClick: () => {
        console.log('Notification Clicked!');
      },
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
        // useSystemStore.addNotificationData({
        //   message: "Signature has been successfully renamed.",
        //   type: "success",
        // });
        openNotification()
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
        .then(async () => {
          await updateDoc(doc(firestoreDb, "users", useAuth.userId.uid), {
            publishedSignatures: arrayUnion(data.value.uid),
          });
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
    confirmDraftModal,
    renameSignature,
    deleteSignature,
    duplicate,
    showTemplatesSection,
  };
});
