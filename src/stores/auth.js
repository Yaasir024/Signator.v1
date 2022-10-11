import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { auth, firestoreDb } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authStore = defineStore("auth", () => {
  
  const register = async (form) => {
    const { name, email, password } = form;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
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
    }
  };

  return { register };
});
