<template>
  <div>
    <!-- <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div class="relative">
        <button
          id="dropdown1"
          data-dropdown-toggle="dropdown1"
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
    
        <div
          id="dropdownDelay"
          class="z-10 hidden divide-y rounded-lg shadow w-44 bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
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
              <router-link to="/login" class="block px-4 py-2 hover:bg-gray-600"
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
    </div> -->

    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    <div
      id="dropdown"
      class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-white"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <router-link
                to="/profile"
                class="block px-4 py-2 hover:bg-gray-600"
                >Profile</router-link
              >
        </li>
        <li>
          <a href="https://www.freeprivacypolicy.com/live/5e4d5f7e-6fb4-4bc3-b331-bfd83072100d" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 hover:bg-gray-600">Privacy Policy</a>
        </li>
        <router-link
                to="/subscription"
                class="block px-4 py-2 hover:bg-gray-600"
                >Subscription</router-link
              >
        <li>
          <a @click="signout"
            class="block px-4 py-2 hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
defineProps({
  firstName: String,
});
onMounted(() => {
  initFlowbite();
});

const signout = () => {
  localStorage.clear();

  window.location.reload();
}
</script>
