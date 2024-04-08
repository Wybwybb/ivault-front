<template>
  <nav
    class="bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <img
        src="../assets/ILogo.png"
        class="h-12"
        alt="Your Logo"
      />
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div class="relative">
          <button
            id="dropdown"
            data-dropdown-toggle="dropdown"
            data-dropdown-trigger="hover"
            class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            type="button"
          >
            {{ firstName }}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"   
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownDelay" class="z-10 hidden divide-y  rounded-lg shadow w-44 bg-gray-700">
            <ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <router-link
                to="/profile"
                class="block px-4 py-2 hover:bg-gray-600"
                >Profile</router-link
              >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-600">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-600">Earnings</a>
              </li>
              <li>
                <router-link
              to="/login"
              class="block px-4 py-2 hover:bg-gray-600"
              >Sign Out</router-link
            >
              </li>
            </ul>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-gray-900  rounded-l md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/home"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              to="/signup"
              class="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Sign up</router-link
            >
          </li>
          <li>
            <router-link
            to="/subscription"
            class="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Subscription</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const isDropdownOpen = ref(false);

const firstName = ref('');

const updateFirstName = (name) => {
  firstName.value = name;
}

updateFirstName('WybWybb');
</script>

<style scoped>
</style>
