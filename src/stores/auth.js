import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { auth, firestoreDb } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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

import router from "@/router";
import { systemStore } from "./system";

export const authStore = defineStore("auth", () => {
  const useSystemStore = systemStore();
  // User Data
  const user = JSON.parse(localStorage.getItem("useclientr"));
  // const user = useLocalStorage("useclientr", null);
  // Register User
  const register = async (form) => {
    useSystemStore.loadingState = true;
    const { name, email, password } = form;
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already in use");
          break;
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/operation-not-allowed":
          alert("Operation not allowed");
          break;
        case "auth/weak-password":
          alert("Weak password");
          break;
        default:
          alert("Something went wrong");
      }
      return;
    });
    addNewUser(name, credentials);
  };
  // Login User
  const signin = async (form) => {
    useSystemStore.loadingState = true;
    const { email, password } = form;
    const loginCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          alert("Something went wrong");
      }
      return;
    });
    getUserData(loginCredentials.user.uid);
  };

  // Add User Data To DB
  const addNewUser = async (name, credential) => {
    const userData = {
      name: name,
      email: credential.user.email,
      uid: credential.user.uid,
      plan: "Free",
      signatures: 0,
      billingHistory: null,
    };
    await setDoc(doc(firestoreDb, "users", userData.uid), userData);
    useSystemStore.loadingState = false;
    localStorage.setItem("useclientr", JSON.stringify(userData));
    pushToHome();
  };
  const getUserData = async (id) => {
    const docRef = doc(firestoreDb, "users", id);
    const docSnap = await getDoc(docRef);
    useSystemStore.loadingState = false;
    localStorage.setItem("useclientr", JSON.stringify(docSnap.data()));
    pushToHome();
  };

  const signOut = () => {
    // await signOut(auth);
    useSystemStore.loadingState = false;
    localStorage.setItem("useclientr", null);
    useSystemStore.loadingState = true;
    pushToHome();
  };

  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        return user;
        console.log(user);
      } else {
        // User is signed out
        return "No user";
        console.log("No user");
      }
    });
  };

  const pushToHome = () => {
    router.push({ path: "/" });
    router.go();
  };

  return { register, signin, user, monitorAuthState, signOut };
});
