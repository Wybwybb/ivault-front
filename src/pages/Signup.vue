<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-10">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:w-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign Up
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div class="grid grid-cols-2 gap-4">
                          <div>
                              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                              <input type="text" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" v-model="firstname" required>
                          </div>
                          <div>
                              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                              <input type="text" name="last_name" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" v-model="lastname" required>
                          </div>
                      </div>
                      <div>
                          <label for="contactnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                          <input type="contactnumber" name="contactnumber" id="contactnumber" placeholder="Enter Contact Number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="contactnumber" required>
                      </div>
                      <div>
                          <label
                            for="username"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Email Address</label
                          >
                          <input
                            type="username"
                            name="username"
                            id="username"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com"
                            v-model="username" required
                          />
                        </div>
                      <div>
                          <label
                            for="username1"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Username</label
                          >
                          <input
                            type="username1"
                            name="username1"
                            id="username1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter username"
                            v-model="username1" required
                          />
                        </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="password" required>
                      </div>
                      <div>
                          <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                          <input type="password" name="password1" id="password1" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="password1" required>
                      </div>
                      <button @click="createAccount" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                        Send Verification Code
                      </button>
                      <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                          Have an account?
                          <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
  </section>
</template>


<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const firstname = ref('');
const lastname = ref('');
const contactnumber = ref('');
const username = ref('');
const username1 = ref('');
const password = ref('');
const password1 = ref('');

const createAccount = async () => {
    try{
        const formData =new FormData();
        formData.append("firstname",firstname.value);
        formData.append("lastname",lastname.value);
        formData.append("contactnumber",contactnumber.value);
        formData.append("username",username.value);
        formData.append("username1",username1.value);
        formData.append("password",password.value);
        formData.append("password1",password1.value);

        const response = await axios.post("http://localhost:8080/addUser",formData, {
            headers: {
                "Content-Type" : "multipart/form-data",

            },
        });

        // Check if the account was created successfully
        if (response.status === 200) {
            console.log("Account created successfully!");
            // Redirect to OTP page
            router.push({ name: 'OTP' });
        } else {
            console.error("Failed to create account.");
        }
    }
    catch(error){
        console.log("Error: ",error);
    }
}




</script>

