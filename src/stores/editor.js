import { ref, computed } from "vue";
import { useRoute } from "vue-router";
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
} from "firebase/firestore";
import { authStore } from "./auth";
import axios from "axios";

import { systemStore } from "./system";


export const editorStore = defineStore("editor", () => {
  const useSystemStore = systemStore();
  const useAuth = authStore();
  const route = useRoute();
  const path = route.params.id;
  // const data = useLocalStorage(path, {});
  const data = useLocalStorage(path, {});
  const currentEditorNav = ref("general");
  const previewImage = ref("");
  const imageModal = ref(false);

  const uploadImg = (img) => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "imgassets");
    formData.append("folder", "signatorClientImages");

    const postImg = async () => {
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dwajobdyb/upload",
          formData
        );
        data.value.image.img = '';
        data.value.image.imgSrc = res.data.secure_url;
        console.log(res.data.secure_url);
        addSignature()
      } catch (error) {
        console.log(error);
      }
    };
    postImg();
  };

  const addSignature = async () => {
    const docRef = await setDoc(
      doc(
        firestoreDb,
        "users",
        useAuth.userData.uid,
        "signatures",
        data.value.uid,
      ),
      data.value
    );
    console.log('Successfull',useAuth.userData.uid);
  };

  return { data, path, currentEditorNav, addSignature, uploadImg };
});
