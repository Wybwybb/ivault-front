<template>
  <div>
    <Navbar v-if="route.name !== 'Login' && route.name !== 'Signup'"/>
    <router-view></router-view>
    <Footer v-if="route.name !== 'Login' && route.name !== 'Signup'"></Footer>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<style scoped>
/* Any scoped styles specific to App.vue can go here */
</style>
