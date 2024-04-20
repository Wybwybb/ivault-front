<template>
  <section class=" bg-gray-900 p-10">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:w-screen lg:py-0">
          <div class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <img src="C:\Users\PC\Desktop\Ivault\ivault-front\src\assets\ILogo.png" alt="Logo" class="w-18 h-20 mx-auto mb-4">

                  <h1 class="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-center pb-4 text-white">
                      Sign Up
                  </h1>
                  <h1 class="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-center pb-4 text-red-500">
                    {{ errorMessage }}
                </h1>
                  <div class="space-y-4 md:space-y-6">
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-white">First Name</label>
                            <input type="text" name="first_name" id="first_name" class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="First Name" v-model="first_name" >
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-white">Last Name</label>
                            <input type="text" name="last_name" id="last_name" class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Last Name" v-model="last_name" >
                        </div>
                      </div>
                      <div>
                        <label for="contactnumber" class="block mb-2 text-sm font-medium text-white">Contact Number</label>
                        <input
                            type="text"
                            name="contactnumber"
                            id="contactnumber"
                            placeholder="Enter Contact Number"
                            class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                            v-model="contact_number"
                            
                          >
                    </div>
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-white">Email Address</label>
                        <input
                        type="email"
                        name="username"
                        id="username"
                        placeholder="name@company.com"
                        class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        v-model="email"
                        :class="{ 'border-red-500': !isEmailValid }"
                        
                      >
                    </div>
                    <div>
                        <label for="username1" class="block mb-2 text-sm font-medium text-white">Username</label>
                        <input type="text" name="username1" id="username1" placeholder="Enter username" class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" v-model="username" >
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" v-model="password" >
                    </div>
                    <div>
                        <label for="password1" class="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                        <input type="password" name="password1" id="password1" placeholder="••••••••" class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" v-model="confirm_password">
                    </div>
                    
                    <button @click="login" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                        Send Verification Code
                      </button>
                      <p class="text-center text-sm font-light text-gray-300">
                          Have an account?
                         <a 
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Login
                             </a>                     
                        </p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>


<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const first_name = ref('');
const last_name = ref('');
const contact_number = ref('');
const email = ref();
const username = ref('');
const password = ref('');
const confirm_password = ref('');

const errorMessage=ref("");

const login = async () =>{
    try{
    const formData = new FormData();
    if(password.value != confirm_password.value){
        errorMessage.value = "Wrong Password";
        console.log('wtf')
    }
    else{
        errorMessage.value = "";
        var verify = randomNumber();

        formData.append('first_name',first_name.value);
        formData.append('last_name',last_name.value);
        formData.append('contact_number',contact_number.value);
        formData.append('email',email.value);
        formData.append('username',username.value);
        formData.append('password',password.value);
        formData.append('verification_code', verify);

        sendEmail(email.value,first_name.value,verify);
        await axios.post("http://localhost:8080/addUser",formData,{
        headers: {
        "Content-Type" : "multipart/form-data",
            },
        });
        window.location.reload();
    }




  }catch(error){
    alert(error);
    console.log("ERror: ",error);
  }

}

const sendEmail = async (email,first_name,verification_code) => {

    try{
        const formData = new FormData();

        formData.append('email',email);
        formData.append('first_name',first_name);
        formData.append('verification_code',verification_code);
        formData.append('subject','Welcome to iVault!');

        await axios.post("http://localhost:8080/sendMail",formData,{
        headers: {
        "Content-Type" : "multipart/form-data",
            },
        });
    }   
    catch(error){

        alert(error);
    }

}

const randomNumber = () => {
  return Math.floor(Math.random() * 9000) + 1000;
}




</script>

