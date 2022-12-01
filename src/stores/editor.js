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
      data.value = {};
    });
  };

  const getSignaturePreview = async (id) => {
    const ref = doc(firestoreDb, "users", useAuth.userId.uid, "signatures", id);
    await getDoc(ref).then((doc) => {
      console.log(doc.data());
      signaturePreviewData.value = doc.data();
    });
  };

  const addImageToGallery = async (imgUrl, imgName) => {
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "data",
      "gallery"
    );
    await updateDoc(docRef, {
      images: arrayUnion({ url: imgUrl, name: imgName }),
    });
  };

  const showTemplatesSection = ref(false);
  // if(Object.keys(data.value).length == 0) {
  //   showTemplatesSection.value = true
  // }

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
  };
});
