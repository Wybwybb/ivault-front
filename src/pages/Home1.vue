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
              <input type="text" v-model="password" id="password" name="password" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Enter password">
            </div>
            <button @click="addAccount" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Account</button>
          </div>
        </div>
        
        <!-- Second column -->
        <div class="bg-dark bg-sky-100">
          <div class="p-6">
            <h1 class="text-lg font-bold mb-4">Account Details</h1>
            <div v-if="website || username || password">
              <p><strong>Website:</strong> {{ website }}</p>
              <p><strong>Username:</strong> {{ username }}</p>
              <p><strong>Password:</strong> {{ password }}</p>
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

const addAccount = () => {
  console.log("Website:", website.value);
  console.log("Username:", username.value);
  console.log("Password:", password.value);
};
</script>
