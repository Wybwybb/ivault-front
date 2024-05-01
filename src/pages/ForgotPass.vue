<template>
    <div class="bg-gray-900 min-h-screen flex items-center justify-center">
      <div class="max-w-md mx-auto text-center bg-gray-800 :border-gray-700 px-4 sm:px-8 py-10 rounded-xl shadow">
        <h1 class="text-2xl text-white font-bold mb-1">Forgot Password</h1>
        <p class="text-gray-600 mb-6">Enter your email address below and we'll send you instructions on how to reset your password.</p>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="email" class="block text-gray-800 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" v-model="email" class="w-full border border-gray-300 rounded-md p-2" placeholder="Your email address" required>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>
        </form>
        <p v-if="submitted" class="mt-4 text-green-600">Instructions to reset your password have been sent to {{ email }}.</p>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const submitted = ref(false);
  
  const submitForm = () => {
    setTimeout(() => {
      submitted.value = true;
    }, 1000);
  };
  </script>
  