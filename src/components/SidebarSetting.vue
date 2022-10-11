<template>
  <div class="static top-0 h-screen">
    <div class="bg-white shadow-xl border-r h-full w-[220px] border-t">
      <div class="">
        <div class="flex flex-col items-center max-w-[220px] px-7 py-6 mb-2">
          <div
            class="bg-red-500 flex items-center justify-center h-12 w-12 rounded-[50%] text-sk-white text-2xl font-bold cursor-default mb-2"
          >
            Y
          </div>
          <div class="">Yaasir Falana</div>
          <div class="">yope4ever@gmail.com</div>
        </div>
        <div class="h-full">
          <ul class="px-4 flex flex-col text-base">
            <RouterLink to="/settings/account-setting">
              <li
                class="py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
              >
                Account Setting
              </li>
            </RouterLink>

            <RouterLink to="/settings/password">
              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color border-t"
              >
                Password
              </li>
            </RouterLink>

            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
            >
              Subscription
            </li>
            <RouterLink to="/settings/billing-history">
              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
              >
                Billing History
              </li>
            </RouterLink>
            <RouterLink to="/settings/payment-method">
              <li
                class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color border-b"
              >
                Payment Method
              </li>
            </RouterLink>
            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-color"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
