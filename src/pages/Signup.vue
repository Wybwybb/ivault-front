<template>
  <form class="max-w-md mx-auto p-4 bg-white rounded shadow-md" @submit.prevent="submitForm">

    
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
      <input type="email" id="email" v-model="username" required
             class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
      <input type="password" id="password" v-model="password" required
             class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
    </div>
    
    <button @click="createAccount"  class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
  </form>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const createAccount = async () => {
    try{
        const formData =new FormData();
        formData.append("username",username.value);
        formData.append("password",password.value);

        const response = await axios.post("http://localhost:8080/addUser",formData, {
            headers: {
                "Content-Type" : "multipart/form-data",

            },
        });
    }
    catch(error){
        console.log("Error: ",error);
    }
}




</script>

