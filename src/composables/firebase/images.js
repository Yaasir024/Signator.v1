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

export const uploadFile = async (file) => {
  return await new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (e) => {
      const result = reader.result;
      const { snapshot, downloadUrl, metadata } = await saveFile(
        useAuth.userId.uid + '/' + file.name,
        result
      );
      if (snapshot) {
        resolve({ snapshot, downloadUrl, metadata });
      } else {
        reject();
      }
    };
  });
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
