<script setup>
import { ref, reactive, computed } from "vue";
import MainLayout from "@/components/Layout/Main.vue";
import { authStore } from "@/stores/auth";
// import Flutterwave from 'flutterwave';

const useAuth = authStore();
</script>

<template>
  <MainLayout>
    <div class="min-h-screen">
      <div class="">
        <div class="my-12">
          <h1 class="text-4xl font-medium text-center my-4">ABOUT SIGNATOR</h1>
          <div class="max-w-[740px] mx-auto px-4 sm:px-8 mt-4 mb-8 text-base">
            <p class="">
              Signator is a simple and user-friendly email signature generator
              website that allows you to create professional and visually
              appealing email signatures in minutes. With Signator, you can
              easily customize your signature with your name, title, contact
              information, and social media links.
            </p>
            <p class="mt-3">
              Our website offers a wide variety of templates to choose from,
              making it easy for you to find the perfect design for your
              signature. You can also upload your own logo or profile picture to
              make your signature truly unique.
            </p>
            <p class="mt-3">
              Signator also makes it easy to create multiple signatures for
              different purposes or occasions, so you can switch between them
              with ease. You can also export your signature in HTML format,
              making it easy to add it to your email client.
            </p>
            <p class="mt-4">
              Whether you're a business owner, professional, or student,
              Signator is the perfect solution for creating a polished and
              professional email signature. Sign up now and start creating your
              signature today!
            </p>
            <p class="mt-3">
              In summary, Signator is a website that helps you to create a
              professional and elegant email signature with a few clicks. It
              offers a wide variety of templates, the ability to upload your own
              logo, and the ability to create multiple signatures. It also
              exports your signature in HTML format making it easy to add it to
              your email client. Signator is the perfect solution for creating a
              polished and professional email signature.
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
