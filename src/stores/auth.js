import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { auth, firestoreDb } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  sendPasswordResetEmail,
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
  // const user = JSON.parse(localStorage.getItem("useclientr"));
  // Current User State: Usually A Boolean
  const userState = useLocalStorage("__useLoggedIn_", false);
  // Current User Id
  const userId = useLocalStorage("__useId_", { uid: null });
  const userData = ref(null);

  // Register User
  const register = async (form) => {
    useSystemStore.loadingState = true;
    const { email, password } = form;
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
    addNewUser(credentials);
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
      useSystemStore.loadingState = false;
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
    useSystemStore.loadingState = false;
  };

  // Add User Data To DB
  const addNewUser = async (credential) => {
    const userData = {
      email: credential.user.email,
      uid: credential.user.uid,
      plan: "Free",
      signatures: 0,
      billingHistory: null,
    };
    await setDoc(doc(firestoreDb, "users", userData.uid), userData);
    useSystemStore.loadingState = false;
    pushToHome();
  };
  const getUserData = async (id) => {
    const docRef = doc(firestoreDb, "users", id);
    const docSnap = await getDoc(docRef);
    useSystemStore.loadingState = false;
    localStorage.setItem("useclientr", JSON.stringify(docSnap.data()));
    pushToHome();
  };

  const logout = async () => {
    await signOut(auth);
    pushToHome();
    useSystemStore.loadingState = false;
  };

  const updateUserPassword = async (newPassword) => {
    // console.log(auth.currentUser, newPassword)
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        useSystemStore.addNotificationData({
          message: "Password Change Successfull",
          type: "success",
        });
      })
      .catch((error) => {
        useSystemStore.addNotificationData({
          message: "Password Change Unsuccessfull",
          type: "error",
        });
      });
    useSystemStore.loadingState = false;
  };
  const updateUserName = async (newName) => {
    updateProfile(auth.currentUser, {
      displayName: newName,
    })
      .then(() => {
        useSystemStore.addNotificationData({
          message: "Name Change Successfull",
          type: "success",
        });
      })
      .catch((error) => {
        useSystemStore.addNotificationData({
          message: "Name Change Unsuccessfull",
          type: "error",
        });
      });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, "yope4ever@gmail.com")
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      // If user is Signed in Set user data
      userState.value = true;
      userId.value.uid = user.uid;
      userData.value = user;
      // Routing
      if (
        router.isReady() &&
        router.currentRoute.value.path === ("/login" || "/signup")
      ) {
        router.push("/");
      }
    } else {
      //If User logs out, set data to null
      userState.value = false;
      userId.value.uid = null;
      userData.value = "";
    }
  });

  const pushToHome = () => {
    router.push({ path: "/" });
    router.go();
  };

  return {
    register,
    signin,
    userState,
    userData,
    userId,
    logout,
    updateUserPassword,
    updateUserName,
    resetPassword,
  };
});
