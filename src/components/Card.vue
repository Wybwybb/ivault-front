<template>
  <div
    class="my-3 max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 mr-4 duration-500 hover:scale-105 hover:shadow-xl"
  >
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-white"
          style="width: 300px; height: 90px;"
        >
          {{ props.name }}
        </h5>
      </a>
      <p style="margin-bottom: 100px;"></p>
      <div>
        <button
          @click="viewAccounts"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Accounts
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>




const props = defineProps({
  name: String,
});
</script>
