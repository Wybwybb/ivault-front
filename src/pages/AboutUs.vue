<template>
  <div class="bg-gray-900 items-start p-5 pl-11">
    <h1 class="text-4xl text-white text-center p-7">Our Mission</h1>
    <h2
      class="text-2xl text-white mb-4 justify-evenly text-center p-4 pb-24 duration-500 hover:scale-105 hover:shadow-xl"
    >
      Empowering individuals to safeguard their digital identities by providing
      a secure and user-friendly password management solution. We strive to
      simplify the process of managing multiple accounts across various
      platforms, ensuring peace of mind and convenience for our users. By
      prioritizing security, usability, and reliability, we aim to become the
      trusted companion for individuals seeking to protect their online presence
      in an increasingly interconnected world.
    </h2>
    <div class="flex justify-center">
      <div
        class="card p-10 bg-white rounded-md shadow-md flex flex-col items-center duration-500 hover:scale-105 hover:shadow-xl"
      >
        <img :src="pp" alt="Card 1 Logo" class="h-24 w-24 mb-4" />
        <h3 class="text-lg font-bold mb-2 ite">Quality</h3>
        <p class="h-20">
          iVault ensures top-tier security through cutting-edge encryptionand
          rigorous testing, guaranteeing the protection of your sensitive data.
        </p>
      </div>
      <div
        class="card p-10 bg-white rounded-md shadow-md flex flex-col items-center duration-500 hover:scale-105 hover:shadow-xl"
      >
        <img :src="integrity" alt="Card 2 Logo" class="h-24 w-24 mb-4" />
        <h3 class="text-lg font-bold mb-2 ite">Integrity</h3>
        <p class="h-20">
          We uphold the highest ethical standards, prioritizing transparency and
          respect for your privacy in all our interactions and operations.
        </p>
      </div>
      <div
        class="card p-10 bg-white rounded-md shadow-md flex flex-col items-center duration-500 hover:scale-105 hover:shadow-xl"
      >
        <img :src="satisfaction" alt="Card 3 Logo" class="h-24 w-24 mb-4" />
        <h3 class="text-lg font-bold mb-2 ite">Experience</h3>
        <p class="h-20">
          iVault delivers effortless password management with a user-friendly
          interface across all devices, ensuring control and security with ease.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any script setup if needed

import pp from "../assets/pp.jpg";
import integrity from "../assets/integrity-removebg-preview.png";
import satisfaction from "../assets/satisfaction-removebg-preview.png";
</script>

<style scoped>
.card {
  margin-right: 20px;
  height: 320px;
  width: fit-content;
}
</style>
