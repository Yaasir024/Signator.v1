import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { systemStore } from "@/stores/system";

export const paymentStore = defineStore("payment", () => {
  const useSystem = systemStore();
  const paymentConfirmationModal = ref(false);

  const customerDetail = ref({
    plan: "",
    price: 0,
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

  const openPaymentModal = (price, plan, signatureNo) => {
    customerDetail.value.plan = plan;
    customerDetail.value.price = price;
    customerDetail.value.signatureNo = signatureNo;
    customerDetail.value.meta.email = useSystem.userFullData.email;

    paymentConfirmationModal.value = true
    // console.log(useSystem.userFullData.email, customerDetail.value);
  };

  const makePayment = () => {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-6e6a14da582db5bfdacc41f248b5751c-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: customerDetail.value.price,
        currency: "USD",
        payment_options: "card",
        redirect_url: "/",
        meta: {
          consumer_uid: useSystem.userFullData.uid,
        },
        customer: {
          email: customerDetail.value.meta.email,
          phone_number: customerDetail.value.meta.phoneNumber,
          name: customerDetail.value.meta.name,
        },
        customizations: {
          title: "Signotor",
          description: "Email Signature & Business Card generator",
          logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
      });
  }

  return {
    customerDetail,
    paymentConfirmationModal,
    openPaymentModal,
    makePayment
  };
});
