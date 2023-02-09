<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";
import emailjs from "@emailjs/browser";
import axios from "axios";

const messageData = ref({
  user_name: "",
  user_email: "",
  subject: "",
  message: "",
});
const contactForm = ref(null);
const submit = () => {
  console.log(messageData.value);
  emailjs
    .sendForm(
      "service_aypm30r",
      "template_s9ghhyk",
      contactForm.value,
      "NXsOFWKYkWP5wFwVD"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
</script>

<template>
  <section class="min-h-screen">
    <main class="pb-8 px-4 mb-24">
      <div
        class="bg-white max-w-[450px] mx-auto mt-12 py-8 px-6 rounded-2xl shadow-lg border"
      >
        <h2 class="text-2xl text-center mb-6">Contact Us</h2>
        <form @submit.prevent="submit()" ref="contactForm">
          <div class="flex items-center mb-4">
            <div class="field p-1 w-full">
              <div class="mb-1 pl-2">Name</div>
              <input
                type="text"
                placeholder="Name"
                class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                required
                name="user_name"
                v-model="messageData.user_name"
              />
            </div>
            <div class="field p-1 w-full">
              <div class="mb-1 pl-2">Email</div>
              <input
                type="email"
                placeholder="Email"
                class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                required
                name="user_email"
                v-model="messageData.user_email"
              />
            </div>
          </div>

          <div class="field mb-4">
            <div class="mb-1 pl-2">Subject</div>
            <input
              type="text"
              placeholder="Subject"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              name="subject"
              v-model="messageData.subject"
            />
          </div>
          <div class="field mb-4">
            <div class="mb-1 pl-2">Message</div>
            <textarea
              cols="30"
              rows="5"
              class="w-full bg-white border rounded-lg p-2 text-sm outline-none focus:border-primary-color"
              name="message"
              v-model="messageData.message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-1 text-lg text-white bg-primary-color border-2 border-primary-color rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
    <Footer />
  </section>
</template>
