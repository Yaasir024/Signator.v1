<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";

import axios from "axios";

const messageData = ref({ name: "", email: "", phone: "", message: "" });

const options = {
  method: "POST",
  url: "https://fapimail.p.rapidapi.com/email/send",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "15a0671353msh5dcdd7ebcbca24ep16a9abjsn355205969a47",
    "X-RapidAPI-Host": "fapimail.p.rapidapi.com",
  },
  data: '{"recipient":"yope4ever@gmail.com","sender":"ayomide2405@gmail.com","subject":"Subject of Email","message":"Body of Email That requires realism"}',
};

const submit = () => {
  console.log(messageData.value);
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
</script>

<template>
  <section class="min-h-screen">
    <Navbar />
    <main class="pb-8">
      <div
        class="bg-white max-w-[400px] mx-auto mt-10 py-8 px-6 rounded-2xl shadow-lg border"
      >
        <h2 class="text-2xl text-center mb-6">Sign Up</h2>
        <form @submit.prevent="submit()">
          <div class="field mb-4">
            <div class="mb-1 pl-2">Name</div>
            <input
              type="text"
              placeholder="Name"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              v-model="messageData.name"
            />
          </div>
          <div class="field mb-4">
            <div class="mb-1 pl-2">Email</div>
            <input
              type="email"
              placeholder="Email"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              v-model="messageData.email"
            />
          </div>
          <div class="field mb-4">
            <div class="mb-1 pl-2">Phone</div>
            <input
              type="tel"
              placeholder="Phone"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              v-model="messageData.phone"
            />
          </div>
          <div class="field mb-4">
            <div class="mb-1 pl-2">Message</div>
            <textarea
              cols="30"
              rows="5"
              class="w-full bg-white border rounded-lg p-2 text-sm outline-none focus:border-primary-color"
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
  </section>
</template>
