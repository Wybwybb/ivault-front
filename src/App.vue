<template>
  <div>
    <!-- Navigation Bar -->
    <Navbar />
    
    <!-- Router View to Render Page Components -->
    <router-view></router-view>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
/* Any scoped styles specific to App.vue can go here */
</style>
