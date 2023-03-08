import { storage, firestoreDb } from "@/services/firebase";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from "firebase/storage";
import { authStore } from "@/stores/auth";

const useAuth = authStore();

export const saveFile = async (fullPath, file) => {
  const storageRef = ref(storage, fullPath);

  const snapshot = await uploadString(storageRef, file, "data_url");
  if (snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref);
    const metadata = await getMetadata(storageRef);

    return { snapshot, downloadUrl, metadata };
  }
};

export const uploadFileToStorage = async (file, team) => {
  let fullPath = useAuth.userId.uid + "/" + file.name
  const storageRef = ref(storage, fullPath);

  const snapshot = await uploadString(storageRef, file.src, "data_url");
  if (snapshot) {
    const downloadUrl = await getDownloadURL(snapshot.ref);
    const metadata = await getMetadata(storageRef);

    return { snapshot, downloadUrl, metadata };
  }
};

export const deleteFile = async (path) => {
  const desertRef = ref(storage, path);

  // Delete the file
  const snapshot = deleteObject(desertRef)
    .then(() => {
      return "success";
    })
    .catch((error) => {
      return error;
    });
  return snapshot;
};
