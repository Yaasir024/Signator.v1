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
        <h1 class="text-4xl font-medium text-center my-4">Privacy Policy</h1>
        <div class="max-w-[740px] mx-auto px-4 sm:px-8 mt-4 mb-8 text-base">
          <p class="">
            At Signator, we are committed to protecting your privacy and
            personal information. We understand the importance of data privacy
            and security and we have implemented strict policies and procedures
            to ensure that your personal information is protected at all times.
          </p>
          <p class="mt-3">
            Our website collects certain information from you when you use our
            services. This information includes your name, email address,
            contact information, and any other information that you choose to
            provide. We use this information to provide you with the services
            you have requested, to improve our website and services, and to
            contact you with important information about your account.
          </p>
          <p class="mt-3">
            We do not share your personal information with third parties, except
            as required by law or as necessary to provide you with the services
            you have requested. We may share your information with our service
            providers, such as payment processors and email service providers,
            but only to the extent necessary to provide you with the services
            you have requested.
          </p>
          <p class="mt-4">
            We use industry-standard security measures to protect your personal
            information, including encryption and firewalls. However, no method
            of data transmission or storage is completely secure, and we cannot
            guarantee the security of your personal information.
          </p>
          <p class="mt-3">
            We are also compliant with the general data protection regulation
            (GDPR) and we will promptly delete your personal information upon
            request.
          </p>
          <p class="mt-3">
            We may update our privacy policy from time to time. We will notify
            you of any changes to our privacy policy by posting the new policy
            on our website.
          </p>
          <p class="mt-4">
            In summary, Signator is committed to protecting your privacy and
            personal information. We only collect the necessary information
            needed to provide you with the service you requested, we do not
            share your personal information with third parties except as
            required by law. We use industry-standard security measures to
            protect your personal information and we are compliant with the
            GDPR. We will promptly delete your personal information upon request
            and we may update our privacy policy from time to time.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
