<template>
  <footer class="bg-[#252525] px-12 py-16">
    <div class="flex">
      <div class="mr-6">
        <RouterLink to="/">
          <img src="/images/logo/logo-white.svg" alt="" class="h-[40px]" />
        </RouterLink>
      </div>
      <div class="mr-7">
        <h4 class="text-lg font-medium mb-1 text-white">PRODUCT</h4>
        <div class="flex flex-col">
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
        </div>
      </div>
      <div class="mr-7">
        <h4 class="text-lg font-medium mb-1 text-white">HELP</h4>
        <div class="flex flex-col">
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
        </div>
      </div>
      <div class="mr-7">
        <h4 class="text-lg font-medium mb-1 text-white">Signature</h4>
        <div class="flex flex-col">
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Gmail
          </RouterLink>
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Yahoo
          </RouterLink>
          <RouterLink
            to="/help-center"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Apple
          </RouterLink>
          <RouterLink
            to="/help-center"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Outlook
          </RouterLink>
        </div>
      </div>
      <div class="mr-7">
        <h4 class="text-lg font-medium mb-1 text-white">Signator</h4>
        <div class="flex flex-col">
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Privacy and Policy
          </RouterLink>
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Terms of Service
          </RouterLink>
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Contact Us
          </RouterLink>
          <RouterLink
            to="/"
            class="py-1 text-base text-white hover:text-primary-color transition-all duration-300 ease-in-out"
          >
            Updates
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="mt-5 border-t pt-6">
        <div class="text-white text-base">
            &#169; Signator 2022. All rights reserved
        </div>
    </div>
  </footer>
</template>
