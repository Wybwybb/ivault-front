<template>
  <header>
    <section class="">
      <div class="grid h-screen grid-cols-2">
        <!-- First column -->
        <div class="dark:bg-gray-900 p-6 flex justify-center items-center">
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
              <input type="password" v-model="password" id="password" name="password" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Enter password">
            </div>
            <button @click="addAccount" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Account</button>
          </div>
        </div>
        
        <!-- Second column -->
        <div class="bg-dark bg-sky-100">
          <div class="p-6">
            <h1 class="text-lg font-bold mb-4">Account Details</h1>
            <div v-if="accounts.length > 0">
              <div v-for="(account, index) in accounts" :key="index" class="bg-white rounded-lg shadow-md p-4 mb-4">
                <p><strong>Website:</strong> {{ account.website }}</p>
                <p><strong>Username:</strong> {{ account.username }}</p>
                <p><strong>Password:</strong> {{ maskPassword(account.password) }}</p>
              </div>
            </div>
            <div v-else>
              <p>No account details entered yet.</p>
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

const addAccount = () => {
  if (!website.value || !username.value || !password.value) {
    alert('Please fill in all fields.');
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
</script>
