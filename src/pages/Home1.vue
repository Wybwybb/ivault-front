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
              <div v-for="(account, index) in accounts" :key="index" class="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between">
                <div>
                  <p><strong>Website:</strong> {{ account.website }}</p>
                  <p><strong>Username:</strong> {{ account.username }}</p>
                  <p><strong>Password:</strong> {{ isPasswordVisible ? account.password : maskPassword(account.password) }}</p>
                </div>
                <div>
                  <button @click="openUpdateModal(index)" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Update</button>
                  <button @click="deleteAccount(index)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </div>
              </div>
            </div>
            <div v-else>
              <p style="color: white;">No account details entered yet</p>
            </div>            
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div class="fixed z-10 inset-0 overflow-y-auto" :class="{ 'hidden': !isUpdateModalOpen }">
      <div class="flex items-center justify-center min-h-screen px-4">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="relative bg-white rounded-lg p-8">
          <button @click="closeUpdateModal" class="absolute top-0 right-0 -mt-3 -mr-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h1 class="text-xl font-bold mb-4">Update Account</h1>
          <input type="text" v-model="updatedWebsite" class="border border-gray-300 rounded-md p-2 mb-4 w-full" placeholder="Enter updated website">
          <input type="text" v-model="updatedUsername" class="border border-gray-300 rounded-md p-2 mb-4 w-full" placeholder="Enter updated username">
          <input type="password" v-model="updatedPassword" class="border border-gray-300 rounded-md p-2 mb-4 w-full" placeholder="Enter updated password">
          <button @click="updateSelectedAccount" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";

const website = ref('');
const username = ref('');
const password = ref('');
const accounts = ref([]);
const isPasswordVisible = ref(false);
const isUpdateModalOpen = ref(false);
const selectedAccountIndex = ref(null);
const updatedWebsite = ref('');
const updatedUsername = ref('');
const updatedPassword = ref('');



const maskPassword = (password) => {
  return '•'.repeat(password.length);
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const openUpdateModal = (index) => {
  selectedAccountIndex.value = index;
  updatedWebsite.value = accounts.value[index].website;
  updatedUsername.value = accounts.value[index].username;
  updatedPassword.value = accounts.value[index].password;
  isUpdateModalOpen.value = true;
};

const closeUpdateModal = () => {
  isUpdateModalOpen.value = false;
};

const updateSelectedAccount = () => {
  // Update selected account with updated details
  if (selectedAccountIndex.value !== null) {
    accounts.value[selectedAccountIndex.value].website = updatedWebsite.value;
    accounts.value[selectedAccountIndex.value].username = updatedUsername.value;
    accounts.value[selectedAccountIndex.value].password = updatedPassword.value;
    closeUpdateModal();
  }
};

const deleteAccount = (index) => {
  // Implement delete logic here
  accounts.value.splice(index, 1);
};


const addAccount = async () => {
  if (!website.value || !username.value || !password.value) {
    alert('Please fill in all fields!');
    return;
  }

  

  try{
        const formData = new FormData();
        formData.append('user_id',localStorage.getItem("user_id"));
        formData.append('category_id', parseInt(localStorage.getItem("category_id"), 10));
        formData.append('website_name',website.value);
        formData.append('username',username.value);
        formData.append('password',password.value);

        await axios.post("http://localhost:8080/addWebsite",formData,{
        headers: {
        "Content-Type" : "multipart/form-data",
            },
        });


        window.location.reload();

  }
  catch(error){
    alert(error)
  }
};

const getAccount = async () => {
  try{
    const response = await fetch(`http://localhost:8080/getWebsiteByID/${localStorage.getItem("user_id")}`);
    const data = await response.json();
    for(var i =0  ; i < data.length &&data[i].category_id==localStorage.getItem("category_id") ; i++){
      accounts.value.push({
        website:data[i].website_name,
        username:data[i].username,
        password:data[i].password,

      });
    }
  }
  catch(error)
  {
    console.log(error);
  }

}
getAccount();
</script>
