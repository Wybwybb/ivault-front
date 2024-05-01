<template>
  <nav
    class="bg-gray-900 w-full top-0 start-0 border-b border-gray-600 sticky z-10"
  >
    <div
      class="w-full flex flex-row items-center justify-between mx-auto p-4 gap-10"
    >
      <div class="w-[33%]">
        <img src="../assets/ILogo.png" class="h-12" alt="Your Logo" />
      </div>
      <div
        class="w-[33%] items-center justify-center flex mx-auto"
        id="navbar-sticky"
      >
        <ul
          class="flex items-center justify-center flex-col p-4 md:p-0 mt-4 font-medium border bg-gray-900 rounded-l md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/home"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/tools"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Tools</router-link
            >
          </li>
          <li>
            <router-link
              to="/profile"
              class="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Profile</router-link
            >
          </li>
          <li>
            <router-link
              to="/subscription"
              class="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Subscription</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About Us</router-link
            >
          </li>
        </ul>

      </div>
      <div class="w-[33%] items-center justify-center flex">
        <DropDown :first-name="name" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue"
import DropDown from "./DropDown.vue";
import {useRouter} from "vue-router"

const name = ref();
const router = useRouter();

const verifyLogin = () => {
  if(localStorage.getItem("user_id")){

  }
  else{
    router.push("/login");
  }
}
verifyLogin();

const getCurrent = async () => {
  try{
    const response = await fetch(`http://localhost:8080/getUserByID/${localStorage.getItem("user_id")}`);
    const data = await response.json();
    name.value = data[0].first_name
  }
  catch(error){
    console.log(error)
    // alert(error);
  }
}
getCurrent();



</script>

