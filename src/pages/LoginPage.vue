<template>

  <section class="bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      
    
      <div
        class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <img src="C:\Users\PC\Desktop\Ivault\ivault-front\src\assets\ILogo.png" alt="Logo" class="w-18 h-20 mx-auto mb-4">

          <h1
            class="text-xl font-bold leading-tight tracking-tight text-center md:text-3xl text-white"
          >
            LOGIN
          </h1>
          <h1
          class="text-xl font-bold leading-tight tracking-tight text-center md:text-3xl text-red-500"
        >
          {{ errorMessage }}
        </h1>
          <div class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
                >Username</label
              >
              <input
              v-model="username"
                type="email"
                name="email"
                id="email"
                class="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white"
                >Password</label
              >
              <input
              v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="•••••••••••••"
                class=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <!-- Add router link to Forgot password -->
              <router-link to="/forgotpass" class="text-sm font-medium text-gray-400 hover:underline dark:text-primary-500">Forgot password?</router-link>
            </div>
            <button
            @click="login"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <a
                href="#"
                @click="goToSignUp"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted} from "vue";
import {useRouter} from "vue-router";


const router = useRouter();


const username = ref();
const password = ref();
const errorMessage = ref();

const goToSignUp = () => {
  router.push('/signup');
}
const login = async () => {
  try{
    const response = await fetch('http://localhost:8080/getUsers');
    const data = await response.json();

    for(var i = 0 ; i <data.length ; i++){
      if(username.value == data[i].username){
        
        if(password.value == data[i].password){

          localStorage.setItem('user_id',data[i].user_id);
          console.log(localStorage.getItem("user_id"))
          router.push("/home");
          return;
        }
        else{
          errorMessage.value = "Wrong Credentials"
        }
      }
      else{
        errorMessage.value = "Wrong Credentials"
      }
    }
  }
  catch(error){
    alert(error);
  }

}


</script>
