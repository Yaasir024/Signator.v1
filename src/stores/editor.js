import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import { defineStore } from "pinia";
import { firestoreDb } from "@/services/firebase";
import { uploadFileToStorage } from "@/composables/firebase/images";
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
  onSnapshot,
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
  // **INITIALIZE OTHER STORES** //
  const useSystemStore = systemStore();
  const useAuth = authStore();

  // **RESOLVE ROUTES** //
  const route = useRoute();
  const path = route.params.id;

  // **EDITOR DATE(CURRENT SIGNATURE IN LOCAL STORAGE)** //
  const data = useLocalStorage("__editor_data__", {});

  // **CURRENT EDITOR NAV/TAB** //
  const currentEditorNav = ref("general");
  const previewImage = ref("");
  const imageModal = ref(false);
  const galleryModal = ref(false);

  const signaturePreviewData = ref(null);

  // ADD SIGNATURE TO DB //
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

  // GET PREVIEW SIGNATURE DATA FROM DB //
  const getSignaturePreview = async (id) => {
    const ref = doc(firestoreDb, "users", useAuth.userId.uid, "signatures", id);
    await getDoc(ref).then((doc) => {
      console.log(doc.data());
      signaturePreviewData.value = doc.data();
    });
  };

  // **GET ALL GALLERY IMAGES**//
  const currentImageGalleryTab = ref("library");
  // **GET ALL GALLERY IMAGES**//
  const galleryImages = ref([]);
  if (galleryModal.value) {
    onSnapshot(
      doc(firestoreDb, "users", useAuth.userId.uid, "data", "gallery"),
      (snapshot) => {
        galleryImages.value = snapshot.data().images;
      }
    );
  }
  // **ADD UPLOADED IMAGE TO GALLERY**//
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

  // *DELETE IMAGE FROM GALLERY* //
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
  // *****IMAGE CROPPER***** //
  // IMAGE CROPPER DATA
  const imageCropData = ref({
    name: "",
    src: "",
  });
  //  ***OPEN CROPPER MODAL*** //
  const openCropperModal = (name, src) => {
    imageCropData.value.name = name;
    imageCropData.value.src = src;
    imageModal.value = true;
  };
  //  ***SET CROPPED IMAGE*** //
  const setCroppedImage = async (src) => {
    useSystemStore.loadingState = true;
    // CHECK IF A FILLE WITH THE SAME NAME EXISTS
    for (let i = 0; i < galleryImages.value.length; i++) {
      if (galleryImages.value[i].name === imageCropData.value.name) {
        imageCropData.value.name = imageCropData.value.name + "(1)";
      }
    }
    const { snapshot, downloadUrl, metadata } = await uploadFileToStorage(
      imageCropData.value
    );
    addImageToGallery(
      downloadUrl,
      metadata.name,
      metadata.fullPath,
      metadata.timeCreated
    );
    closeCropperModal();
    useSystemStore.loadingState = false;
    currentImageGalleryTab.value = "library";
  };
  //  ***CLOSE CROPPER MODAL*** //
  const closeCropperModal = () => {
    imageModal.value = false;
    imageCropData.value.name = "";
    imageCropData.value.src = "";
  };

  const showTemplatesSection = ref(false);

  const addToMailPanelVisibility = ref(false);
  // **COPY SIGNATURE OUTPUT** //
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
  // **COPY SIGNATURE HTML CODE** //
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
    imageCropData,
    openCropperModal,
    closeCropperModal,
    setCroppedImage,
    imageModal,
    addSignature,
    previewImage,
    getSignaturePreview,
    signaturePreviewData,
    showTemplatesSection,
    currentImageGalleryTab,
    galleryImages,
    addImageToGallery,
    removeImageFromGallery,
    addToMailPanelVisibility,
    copySignature,
    copySignatureCode,
  };
});
