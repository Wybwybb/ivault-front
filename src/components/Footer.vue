<template>
    <footer class="bg-gray-900 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:justify-between items-center">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <span class="text-sm text-gray-400">&copy; 2023 <a href="https://flowbite.com/" class="hover:text-gray-300">I-Vault</a>. All Rights Reserved.</span>
          </div>
          <ul class="flex flex-wrap justify-center md:justify-end">
            <li>
              <router-link
              to="/about"
              class="text-sm text-gray-400 hover:text-gray-300 mx-3"
              >About Us</router-link
            >
            </li>
            <a
                href="https://www.freeprivacypolicy.com/live/5e4d5f7e-6fb4-4bc3-b331-bfd83072100d"
                target="_blank" rel="noopener noreferrer"
                class="text-sm text-gray-400 hover:text-gray-300 mx-3"
              >
                Privacy Policy
              </a>
            <li>
              <router-link
              to="/payments"
              class="text-sm text-gray-400 hover:text-gray-300 mx-3"
              >Payments</router-link
            >
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  