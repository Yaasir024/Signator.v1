<script setup>
import { ref, reactive, computed } from "vue";
import Navbar from "@/components/Navigations/Navbar.vue";
import Footer from "@/components/Navigations/Footer.vue";
import { authStore } from "@/stores/auth";
// import Flutterwave from 'flutterwave';

const useAuth = authStore();
</script>

<template>
  <div class="min-h-screen">
    <main class="">
      <div class="my-12">
        <h1 class="text-4xl font-medium text-center my-4">Cookie Policy</h1>
        <div class="max-w-[740px] mx-auto px-4 sm:px-8 mt-4 mb-8 text-base">
          <p class="">
            At Signator, we understand the importance of data privacy and
            security. That's why we have implemented a strict cookie policy to
            ensure that your personal information is protected at all times.
          </p>
          <p class="mt-3">
            Our website uses cookies to improve your browsing experience and to
            personalize the content and advertisements that you see. Cookies are
            small text files that are stored on your device when you visit our
            website. They allow us to remember your preferences and to
            understand how you interact with our website.
          </p>
          <p class="mt-3">
            We use both session cookies and persistent cookies. Session cookies
            are deleted from your device when you close your browser, while
            persistent cookies remain on your device until they expire or you
            choose to delete them.
          </p>
          <p class="mt-4">
            You can control the use of cookies on our website by adjusting your
            browser settings. However, please note that disabling cookies may
            affect your ability to use certain features of our website.
          </p>
          <p class="mt-3">
            We do not use cookies to collect personal information or to track
            your online activities. The information we collect is used solely
            for the purpose of improving our website and providing you with a
            better browsing experience.
          </p>
          <p class="mt-3">
            In summary, Signator uses cookies to improve your browsing
            experience and to personalize the content and advertisements that
            you see. We use both session and persistent cookies and do not
            collect personal information or track your online activities. You
            can control the use of cookies on our website by adjusting your
            browser settings. We also use Google Analytics and third-party
            cookies from social media platforms. Our cookie policy is in
            compliance with the general data protection regulation (GDPR) and we
            take data privacy and security very seriously.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
