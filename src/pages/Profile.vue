<template>
  <header>
    <section class="bg-gray-900 min-h-screen p-20 flex items-center justify-center">
      <div class="bg-gray-800 rounded-lg shadow-md p-10 w-[30rem] flex flex-col items-center">

        <!-- Avatar with Camera Button -->
        <div class="relative mb-6">
          <img class="w-28 h-28 rounded-full" 
          :src="profile_picture" alt="Rounded avatar">

          <!-- Camera Button -->
          <label for="avatar-upload" class="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M19 5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h5v2a2 2 0 104 0v-2h5a2 2 0 002-2V5zm-7 10a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd" />
            </svg>
          </label>

          <!-- Hidden File Input for Uploading Avatar -->
          <input id="avatar-upload" type="file" style="display: none;" @change="handleAvatarChange">
        </div>

        <!-- Profile Information -->
        <div class="text-left">
          <h1 class="text-3xl text-white font-bold mb-4">Profile</h1>
          <div class="mb-4">
            <label for="website" class="block text-white font-bold mb-2 text-lg">First Name: {{first_name}}</label>
          </div>
          <div class="mb-4">
            <label for="lastname" class="block text-white font-bold mb-2 text-lg">Last Name: {{last_name}}</label>
          </div>
          <div class="mb-4">
            <label for="contact" class="block text-white font-bold mb-2 text-lg">Contact Number:{{ contact_number }} </label>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-white font-bold mb-2 text-lg">Email Address: {{email}}</label>
          </div>
          <div class="mb-4">
            <label for="username" class="block text-white font-bold mb-2 text-lg">Username: {{username}}</label>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-white font-bold mb-2 text-lg">Password: *********</label> 
          </div>
          <div class="mb-4">
            <label for="subscription" class="block text-white font-bold mb-2 text-lg pb-4">Subscription: Standard Plan</label> 
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg duration-500 hover:scale-105 hover:shadow-xl">Update Profile</button>
        </div>

      </div>
    </section>
  </header>
</template>

<script setup>
import {ref,onMounted} from "vue";

onMounted(()=>{
  getProfile();
});

const first_name = ref();
const last_name = ref();
const contact_number = ref();
const email = ref();
const username = ref();
const password = ref();
const profile_picture = ref(null);

const getProfile = async () =>{
  try{
    const response = await fetch(`http://localhost:8080/getUserByID/${localStorage.getItem('user_id')}`)
    const data = await response.json();

    first_name.value = data[0].first_name;
    last_name.value = data[0].last_name;
    contact_number.value = data[0].contact_number;
    email.value = data[0].email;
    username.value = data[0].username;
    password.value = data[0].password;
    profile_picture.value = await convertBlob(data[0].profile_picture.data);
  }
  catch(error){
    console.log(error);
  }

}
getProfile();


const convertBlob = (image) => {
      return new Promise((resolve, reject) => {
        if (image) {
          const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const dataURL = reader.result;
            resolve(dataURL);
          };
        }
      });
    };

</script>


