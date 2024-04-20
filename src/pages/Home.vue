<template>
  <div class="bg-gray-900">
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-semibold my-5 text-white">Recently Accessed Accounts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card v-for="(card, index) in cards" :key="index" :name="card.name" @click="openDeleteCardModal(index)" />
      </div>
      <div class="flex justify-center mt-5">
        <button @click="openAddCardModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">Add Card</button>
        <button @click="openDeleteCardModal" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Card</button>
      </div>
      <div v-if="isAddCardModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-lg font-semibold mb-4">Enter the name of the new card:</h2>
          <input v-model="newCardName" type="text" class="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Card Name">
          <div class="flex justify-end">
            <button @click="closeAddCardModal" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Cancel</button>
            <button @click="addCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
          </div>
        </div>
      </div>
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
</template>

<script setup>
import Card from "../components/Card.vue";
import { ref } from 'vue';

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

const addCard = () => {
  if (newCardName.value.trim() !== '') {
    cards.value.push({ name: newCardName.value });
    closeAddCardModal();
  }
};

const openDeleteCardModal = () => {
  isDeleteCardModalOpen.value = true;
};

const closeDeleteCardModal = () => {
  isDeleteCardModalOpen.value = false;
  selectedCardIndex.value = -1;
};

const deleteCard = () => {
  if (selectedCardIndex.value !== -1) {
    cards.value.splice(selectedCardIndex.value, 1);
    closeDeleteCardModal();
  }
};
</script>

<style scoped>
</style>
