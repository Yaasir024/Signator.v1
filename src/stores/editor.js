import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import { defineStore } from "pinia";
import { firestoreDb } from "@/services/firebase";
import {
  useRefHistory,
  useDebouncedRefHistory,
  useLocalStorage,
  useStorage,
} from "@vueuse/core";
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
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import axios from "axios";

import { authStore } from "./auth";
import { systemStore } from "./system";

export const editorStore = defineStore("editor", () => {
  const useSystemStore = systemStore();
  const useAuth = authStore();
  const route = useRoute();
  const path = route.params.id;
  // const data = useLocalStorage(path, {});
  const data = useLocalStorage("__editor_data__", {});
  const currentEditorNav = ref("general");
  const previewImage = ref("");
  const imageModal = ref(false);
  const galleryModal = ref(false);

  const signaturePreviewData = ref(null);

  const addSignature = async () => {
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "signatures",
      data.value.uid
    );
    await setDoc(docRef, data.value).then(async () => {
      await updateDoc(doc(firestoreDb, "users", useAuth.userId.uid), {
        publishedSignatures: arrayUnion(data.value.uid),
      });
      router.push({ path: `/preview/${data.value.uid}` });

      setTimeout(() => {
        data.value = {};
      }, "2000");
    });
  };

  const getSignaturePreview = async (id) => {
    const ref = doc(firestoreDb, "users", useAuth.userId.uid, "signatures", id);
    await getDoc(ref).then((doc) => {
      console.log(doc.data());
      signaturePreviewData.value = doc.data();
    });
  };

  const addImageToGallery = async (url, name, fullPath, timeCreated) => {
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "data",
      "gallery"
    );
    await updateDoc(docRef, {
      images: arrayUnion({ url, name, fullPath, timeCreated }),
    });
  };

  const removeImageFromGallery = async (img) => {
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "data",
      "gallery"
    );
    await updateDoc(docRef, {
      images: arrayRemove(img),
    });
  };
  const showTemplatesSection = ref(false);

  const addToMailPanelVisibility = ref(false);
  const copySignature = (element) => {
    addToMailPanelVisibility.value = false;
    // Get the element you want to highlight, select, and copy
  
    // Use the SelectAllChildren method to select the entire contents of the element
    var range = document.createRange();
    range.selectNodeContents(element);
  
    // Use the addRange method to add the range to the selection
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  
    // Use the execCommand method to copy the selected text to the clipboard
    document.execCommand("copy");
    useSystemStore.addNotificationData({
      message: "Copied",
      type: "success",
    });
  };
  const copySignatureCode = async (content) => {
    // 
    addToMailPanelVisibility.value = false;
    navigator.clipboard.writeText(content);
  };

  return {
    data,
    path,
    currentEditorNav,
    galleryModal,
    addSignature,
    previewImage,
    getSignaturePreview,
    signaturePreviewData,
    showTemplatesSection,
    addImageToGallery,
    removeImageFromGallery,
    addToMailPanelVisibility,
    copySignature,
    copySignatureCode
  };
});
