<script setup>
import {
  getCurrentYear
} from "@/composables/useFormatDate";
</script>

<template>
  <footer class="bg-[#252525] px-12 py-16">
    <div class="flex flex-col sm:flex-row justify-between max-w-[1040px] mx-auto">
      <!--  block xs:hidden sm:block -->
      <div class="mr-6 mb-4 xs:mb-0 ">
        <RouterLink to="/">
          <img src="/images/logo/logo-white.svg" alt="" class="h-[40px]" />
        </RouterLink>
        <div class="max-w-[250px] pt-3 pr-2 text-white text-base hidden sm:block">
          Signator is a simple and user-friendly email signature generator website that allows you to create professional and visually appealing email signatures in minutes.
        </div>
      </div>
      <div class="flex flex-col xs:flex-row">
        <div class="flex flex-col mb-4 xs:mb-0 mr-12">
          <RouterLink
            to="/features"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Features
          </RouterLink>
          <RouterLink
            to="/pricing"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Pricing
          </RouterLink>
          <RouterLink
            to="/templates"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Templates
          </RouterLink>
        </div>
        <div class="flex flex-col mb-4 xs:mb-0 mr-12">
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Getting Started
          </RouterLink>
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            FAQ
          </RouterLink>
          <RouterLink
            to="/help-center"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Help Center
          </RouterLink>
          <RouterLink
            to="/contact-us"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Contact Us
          </RouterLink>
        </div>
        <div class="flex flex-col mb-4 xs:mb-0">
          <RouterLink
            to="/about-us"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            About Us
          </RouterLink>
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Terms & Condition
          </RouterLink>
          <RouterLink
            to="/privacy-policy"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Privacy and Policy
          </RouterLink>
          <RouterLink
            to="/cookies-policy"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Cookies Policy
          </RouterLink>
          
          
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
            v-if="false"
          >
            Updates
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="mt-12 border-t pt-6">
      <div class="text-white text-base text-center">
        &#169; Signator {{ getCurrentYear() }}. All rights reserved
        
      </div>
    </div>
  </footer>
</template>
