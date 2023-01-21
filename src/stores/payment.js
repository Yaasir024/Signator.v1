import { ref, computed } from "vue";
import { defineStore } from "pinia";

import router from "@/router";

import { firestoreDb } from "@/services/firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { uid } from "@/composables/useGenerateUid";

import { authStore } from "./auth";
import { systemStore } from "@/stores/system";

export const paymentStore = defineStore("payment", () => {
  const useAuth = authStore();
  const useSystem = systemStore();
  const paymentConfirmationModal = ref(false);

  const customerDetail = ref({
    plan: "",
    price: 0,
    currency: "USD",
    signatureNo: 4,
    billingCycle: "",
    meta: {
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
    },
    transactionId: "",
    transactionDate: Date.now(),
  });

  const openPaymentModal = (price, plan, signatureNo, billing) => {
    customerDetail.value.plan = plan;
    customerDetail.value.price = price;
    customerDetail.value.billingCycle = billing;
    customerDetail.value.signatureNo = signatureNo;
    customerDetail.value.meta.email = useSystem.userFullData.email;
    customerDetail.value.transactionId = uid(16);

    paymentConfirmationModal.value = true;
    // console.log(useSystem.userFullData.email, customerDetail.value);
  };

  const makePayment = () => {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-6e6a14da582db5bfdacc41f248b5751c-X",
      tx_ref: customerDetail.value.transactionId,
      amount: customerDetail.value.price,
      currency: "USD",
      payment_options: "card, ussd",
      // redirect_url: "/",
      callback: function (payment) {
        paymentSuccess(customerDetail.value);
      },
      meta: {
        consumer_uid: useSystem.userFullData.uid,
      },
      customer: {
        email: customerDetail.value.meta.email,
        phone_number: customerDetail.value.meta.phoneNumber,
        name: customerDetail.value.meta.name,
      },
      customizations: {
        title: "Signator",
        description: "Email Signature & Business Card generator",
        logo: "https://firebasestorage.googleapis.com/v0/b/signator-f31e7.appspot.com/o/System%2FSignator%20Logo.png?alt=media&token=416d4423-577a-4f11-8811-83eebcb034c8",
      },
    });
  };

  const paymentSuccess = async (data) => {
    const docRef = doc(
      firestoreDb,
      "users",
      useAuth.userId.uid,
      "billingHistory",
      data.transactionId
    );
    await setDoc(docRef, data).then(() => {
      router.push({ path: '/dashboard' });
    });
  };
  return {
    customerDetail,
    paymentConfirmationModal,
    openPaymentModal,
    makePayment,
  };
});
