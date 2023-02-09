import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useCookies } from "@vueuse/integrations/useCookies";
import { auth, firestoreDb } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  sendPasswordResetEmail,
  deleteUser,
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

import { getCookieExpiryDate } from "@/composables/useFormatDate";

export const authStore = defineStore("auth", () => {
  const useSystemStore = systemStore();

  const cookies = useCookies(["isLoggedIn", "__uid_"]);


  // Current User State: Usually A Boolean
  const userState = computed(() => {
    if (cookies.get("isLoggedIn")) {
      return cookies.get("isLoggedIn");
    } else {
      return false;
    }
  });
  // const userState = useLocalStorage("__useLoggedIn_", false);
  // Current User Id
  const userId = computed(() => {
    if (cookies.get("__uid_")) {
      return cookies.get("__uid_");
    } else {
      return null;
    }
  });
  // const userId = useLocalStorage("__useId_", { uid: null });
  const userData = ref(null);

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
          useSystemStore.addNotificationData({
            message: "Error: Email Already in use",
            type: "error",
          });
          break;
        case "auth/invalid-email":
          useSystemStore.addNotificationData({
            message: "Error: Invalid Email",
            type: "error",
          });
          break;
        case "auth/operation-not-allowed":
          useSystemStore.addNotificationData({
            message: "Error: Operation not Allowed",
            type: "error",
          });
          break;
        case "auth/weak-password":
          useSystemStore.addNotificationData({
            message: "Error: Password too weak",
            type: "error",
          });
          break;
        default:
          useSystemStore.addNotificationData({
            message: "Error: Something went wrong",
            type: "error",
          });
      }
      useSystemStore.loadingState = false;
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
  const addNewUser = async (name, credential) => {
    const userData = {
      name: name,
      email: credential.user.email,
      uid: credential.user.uid,
      plan: "Free",
      publishedSignatures: [],
      signaturePackgage: 1,
      billingHistory: null,
    };
    await setDoc(doc(firestoreDb, "users", userData.uid), userData);
    updateProfile(auth.currentUser, {
      displayName: name,
    });
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

  const resetMessage = ref("");
  const resetPassword = (email) => {
    useSystemStore.loadingState = true;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resetMessage.value = "success";
        useSystemStore.loadingState = false;
      })
      .catch((error) => {
        resetMessage.value = "error";
        useSystemStore.loadingState = false;
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      // If user is Signed in Set user data
      cookies.set("isLoggedIn", true, {
        expires: getCookieExpiryDate(),
      });
      // SET USER UID
      cookies.set(
        "__uid_",
        { uid: user.uid },
        {
          expires: getCookieExpiryDate(),
        }
      );
      userData.value = user;
      // Open loading State
      // Routing
      if (
        router.isReady() &&
        router.currentRoute.value.path === ("/login" || "/signup")
      ) {
        router.push("/dashboard");
      } else if (
        router.isReady() &&
        router.currentRoute.value.path === "/pricing"
      ) {
        router.push("/pricing");
      }
    } else {
      //If User logs out, set data to null
      // If user is Signed in Set user data
      cookies.set("isLoggedIn", false, {
        expires: getCookieExpiryDate(),
      });
      // SET USER UID
      cookies.set("__uid_", null, {
        expires: getCookieExpiryDate(),
      });
      userData.value = "";
    }
  });

  const pushToHome = () => {
    router.push({ path: "/" });
    // router.go();
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
    resetMessage,
  };
});
