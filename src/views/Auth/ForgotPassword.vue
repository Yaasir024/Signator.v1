<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { authStore } from "@/stores/auth";
const useAuth = authStore();
const email = ref("");
const submit = () => {
  email.value = ''
  useAuth.resetPassword(email.value);
};

// yope4ver@gmail.com
</script>

<template>
  <section class="h-screen overflow-hidden">
    <Navbar />
    <div
      class="bg-white max-w-[400px] mx-auto mt-12 py-8 px-6 rounded-2xl shadow-lg border"
    >
      <h2 class="text-2xl text-center mb-2">Forgot Your Password?</h2>
      <p class="text-center mb-8">
        Enter The Email Address you used for your account and we'll send you a
        reset link.
      </p>
      <form @submit.prevent="submit()">
        <div class="field mb-4">
          <div class="mb-1 pl-2">Email</div>
          <input
            type="email"
            placeholder="Email"
            class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
            required
            v-model="email"
          />
        </div>
        <input
          type="submit"
          class="w-full py-1 text-lg text-white bg-primary-color border-2 border-primary-color rounded-xl"
          value="Reset Password"
        />
      </form>
      <div class="mt-3">
        <div class="text-center" v-if="useAuth.resetMessage == 'success'">
          Kindly check your Email Address for the reset link
        </div>
        <div
          class="text-center text-[#ff6b6b]"
          v-if="useAuth.resetMessage == 'error'"
        >
          Unable to reset password. Please Try again. Ensure you use the Email
          Address you used for your account
        </div>
      </div>
    </div>
  </section>
</template>
