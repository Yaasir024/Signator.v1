<script setup>
import Navbar from "@/components/Navigations/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { authStore } from "@/stores/auth";
const useAuth = authStore();
const signupForm = ref({ name: "", email: "", password: "" });
const passwordError = ref(false);
const submit = () => {
  if (signupForm.value.password.length < 6) {
    passwordError.value = true;
  } else {
    useAuth.register(signupForm.value);
    signupForm.value.name = "";
    signupForm.value.email = "";
    signupForm.value.password = "";
  }
};

// yope4ver@gmail.com
</script>

<template>
  <section class="h-screen overflow-hidden">
    <Navbar />

    <div class="px-3">
      <div
        class="bg-white max-w-[400px] mx-auto mt-12 py-8 px-6 rounded-2xl shadow-lg border"
      >
        <h2 class="text-2xl text-center mb-8">Sign Up</h2>
        <form @submit.prevent="submit()">
          <div class="field mb-4">
            <div class="mb-1 pl-2">Name</div>
            <input
              type="text"
              placeholder="Name"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              v-model="signupForm.name"
            />
          </div>
          <div class="field mb-4">
            <div class="mb-1 pl-2">Email</div>
            <input
              type="email"
              placeholder="Email"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              v-model="signupForm.email"
            />
          </div>
          <div class="field mb-4">
            <div class="mb-1 pl-2">Password</div>
            <input
              type="password"
              placeholder="Password"
              class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
              required
              v-model="signupForm.password"
            />
            <div class="mt-1 text-center text-[#ff6b6b]" v-if="passwordError">
              Your Password must be a minimum of six characters.
            </div>
          </div>
          <button
            type="submit"
            class="w-full py-1 text-lg text-white bg-primary-color border-2 border-primary-color rounded-xl"
          >
            Create Account
          </button>
        </form>
        <div class="text-center">
          <div class="mt-3" v-if="false">
            <div class="font-medium">OR</div>
            <div
              class="mt-2 w-full flex items-center justify-center py-1 border-2 border-black rounded-xl cursor-pointer"
            >
              <span
                ><svg
                  class="svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    fill-rule="evenodd"
                    fill-opacity="1"
                    fill="#4285f4"
                    stroke="none"
                  ></path>
                  <path
                    d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
                    fill-rule="evenodd"
                    fill-opacity="1"
                    fill="#34a853"
                    stroke="none"
                  ></path>
                  <path
                    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    fill-rule="evenodd"
                    fill-opacity="1"
                    fill="#fbbc05"
                    stroke="none"
                  ></path>
                  <path
                    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                    fill-rule="evenodd"
                    fill-opacity="1"
                    fill="#ea4335"
                    stroke="none"
                  ></path>
                </svg>
              </span>
              <span class="text-lg ml-2 font-medium">Continue With Google</span>
            </div>
          </div>
          <div class="mt-5 font-medium">
            Already Have an Account?
            <RouterLink to="/login"
              ><span class="text-primary-color">Login</span></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
