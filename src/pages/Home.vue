<template>

  <section v-if="!isVerified" class="bg-gray-900 min-h-screen flex items-center justify-center">

    <div class="max-w-md mx-auto text-center bg-gray-800 :border-gray-700 px-4 sm:px-8 py-10 rounded-xl shadow">
      <h1 class="text-2xl text-red-500 font-bold mb-1">{{message}}</h1>

        <header class="mb-8">
            <h1 class="text-2xl text-white font-bold mb-1">Verification Code</h1>
            <p class="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your Email.</p>
        </header>
        <div id="otp-div" >
            <div class="flex items-center justify-center gap-3">
              <input 
              v-model="code" 
              type="text" 
              maxlength="4" 
              class="w-25 h-14 text-center text-2xl font-extrabold text-slate-600 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          >
          
     
            </div>
            <div class="max-w-[260px] mx-auto mt-4">
                <button @click="verifyAccount"
                    class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                    Account</button>
            </div>
        </div>
        <div class="text-sm text-slate-500 mt-4">Didn't receive code? <a @click.prevent="resendCode" class="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
    </div>
</section>


  
  <div class="relative" v-else>
    <h1 class="absolute top-0 left-0 text-3xl font-semibold my-5 ml-8 text-white">Personal Vaults</h1>
    <div class="bg-gray-900 flex justify-center items-center min-h-screen">
      <div class="container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card v-for="(card, index) in cards" :key="index" :name="card.name" @click="clickCard(card.id)" />
        </div>
        <!-- Welcome message and instruction -->
        <div v-if="cards.length === 0" class="text-white text-center my-5">
          <p class="text-4xl font-bold">Welcome to your secure Personal Vaults!</p>
          <p class="mt-20">It's time to safeguard your valuable information and keep it safe from prying eyes.</p>
          <p class="mt-0">No cards created yet? Don't worry! Simply click the "Add Card" button to start creating your first vault.</p>
        </div>
        <div class="flex justify-center mt-5">
          <button @click="openAddCardModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">Add Card</button>
          <button @click="openDeleteCardModal" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Card</button>
        </div>
        <!-- Add Card Modal -->
        <div v-if="isAddCardModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg">
            <h2 class="text-lg font-semibold mb-4">Enter the name of the new category:</h2>
            <input v-model="category_name" type="text" class="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Category Name">
            <div class="flex justify-end">
              <button @click="closeAddCardModal" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Cancel</button>
              <button @click="addCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </div>
          </div>
        </div>
        <!-- Delete Card Modal -->
        <div v-if="isDeleteCardModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg">
            <h2 class="text-lg font-semibold mb-4">Choose which card to delete:</h2>
            <select v-model="selectedCardIndex" class="border border-gray-300 rounded-md p-2 w-full mb-4">
              <option v-for="(card, index) in cards" :key="index" :value="index">{{ card.name }}</option>
            </select>
            <div class="flex justify-end">
              <button @click="closeDeleteCardModal" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Cancel</button>
              <button @click="deleteCard" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import axios from "axios";
const router = useRouter();
var user_id = localStorage.getItem('user_id');
const isVerified = ref(false);
const code = ref();
const message = ref();
const category_name = ref();



const cards = ref([]);

const isAddCardModalOpen = ref(false);
const isDeleteCardModalOpen = ref(false);
const newCardName = ref('');
const selectedCardIndex = ref(-1);

const openAddCardModal = () => {
  isAddCardModalOpen.value = true;
};

const closeAddCardModal = () => {
  isAddCardModalOpen.value = false;
  newCardName.value = '';
};
const openDeleteCardModal = () => {
  isDeleteCardModalOpen.value = true;
};

const closeDeleteCardModal = () => {
  isDeleteCardModalOpen.value = false;
  selectedCardIndex.value = -1;
};

const deleteCard = () => {
  if (cards.value.length === 1) {
    cards.value = [];
  } else if (selectedCardIndex.value !== -1) {
    cards.value.splice(selectedCardIndex.value, 1);
  }
  closeDeleteCardModal();
};


const verifyUser = async (id) =>{
  try{
    const response= await fetch(`http://localhost:8080/getUserByID/${id}`);
    const data = await response.json();
    console.log(data[0].verified)
    if(data[0].verified==0){
      isVerified.value = false;
    }
    else{

      isVerified.value = true;
    }
  }
  catch(error){
    alert(error);
  }

}
verifyUser(user_id);


const verify = async () => {
  try {
    await axios.put(`http://localhost:8080/updateValueById/${user_id}`, { verified: 1 });
  } catch (error) {
    alert(error);
  }
}
const verifyAccount = async () => {

  const response = await fetch(`http://localhost:8080/getUserByID/${user_id}`);
  const data = await response.json();
  if(data[0].verification_code == code.value){
    verify();
    window.location.reload();
  }
  else{
    message.value = "wrong code";
  }
  
}

const addCard = async () => {
  // if (newCardName.value.trim() !== '') {
  //   cards.value.push({ name: newCardName.value });
  //   closeAddCardModal();
  // }
  try{
        const formData = new FormData();
        formData.append('user_id',localStorage.getItem("user_id"));
        formData.append('category_name',category_name.value);

        await axios.post("http://localhost:8080/addCategory",formData,{
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

const getCard = async () => {
  try{
    const response = await fetch(`http://localhost:8080/getCategoryByUserID/${localStorage.getItem("user_id")}`);
    const data = await response.json();

    for(var i =0; i <data.length ;i++){
      cards.value.push({
        id:data[i].category_id,
        name:data[i].category_name
      });
    }
  }
  catch(error){
    console.log(error);
  }
}
getCard();

const clickCard =(id) =>{
  localStorage.setItem("category_id",id);
  router.push("/home1")
}




</script>


