<template>
  <header>
    <section class="">
      <div class="grid h-screen grid-cols-2">
        <!-- First column -->
        <div class="bg-gray-900 p-6 flex justify-center items-center">
          <div class="bg-white rounded-lg shadow-md p-10" style="width: 500px; height: 450px;">
            <h1 class="text-lg font-bold mb-4">Add New Account</h1>
            <div class="mb-4">
              <label for="website" class="block text-gray-700 font-bold mb-2">Website:</label>
              <input type="text" v-model="website" id="website" name="website" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Enter website">
            </div>
            <div class="mb-4">
              <label for="username" class="block text-gray-700 font-bold mb-2">Username:</label>
              <input type="text" v-model="username" id="username" name="username" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Enter username">
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
              <div class="relative">
                <input type="password" v-model="password" id="password" name="password" class="border border-gray-300 rounded-md p-2 w-full pr-10" placeholder="Enter password">
                <span @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  <svg v-if="isPasswordVisible" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a4 4 0 010 5.657m-2.829-5.657a4 4 0 015.657 0m5.657 0a8 8 0 10-11.314 0m11.314 0L12 12m0 0l-2.828-2.828M12 12l2.828 2.828"></path>
                  </svg>
                  <svg v-else class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12a2 2 0 113.999-.001A2 2 0 0110 12z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <button @click="addAccount" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Account</button>
          </div>
        </div>
        <!-- 2nd column -->
        <div class="bg-gray-900">
          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-lg font-bold text-white">Account Details</h1>
              <span @click="togglePasswordVisibility" class="cursor-pointer">
                <svg v-if="isPasswordVisible" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.467 11.533a4.5 4.5 0 105.065 5.065M5.1 12s3.5-4 6.9-4 6.9 4 6.9 4-3.5 4-6.9 4-6.9-4-6.9-4z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15c2.333 0 4.25-1.75 4.25-1.75s-1.917-1.75-4.25-1.75-4.25 1.75-4.25 1.75S9.667 15 12 15z"></path>
                </svg>
                <svg v-else class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12a2 2 0 113.999-.001A2 2 0 0110 12z"></path>
                </svg>
              </span>
            </div>
            <div v-if="accounts.length > 0">
              <div v-for="(account, index) in accounts" :key="index" class="bg-white rounded-lg shadow-md p-4 mb-4">
                <p><strong>Website:</strong> {{ account.website }}</p>
                <p><strong>Username:</strong> {{ account.username }}</p>
                <p><strong>Password:</strong> {{ isPasswordVisible ? account.password : maskPassword(account.password) }}</p>
              </div>
            </div>
            <div v-else>
              <p style="color: white;">No account details entered yet</p>
            </div>            
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const website = ref('');
const username = ref('');
const password = ref('');
const accounts = ref([]);
const isPasswordVisible = ref(false);

const addAccount = () => {
  if (!website.value || !username.value || !password.value) {
    alert('Please fill in all fields!');
    return;
  }

  const newAccount = {
    website: website.value,
    username: username.value,
    password: password.value
  };
  accounts.value.push(newAccount);
  
  website.value = '';
  username.value = '';
  password.value = '';
};

const maskPassword = (password) => {
  return '•'.repeat(password.length);
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>
