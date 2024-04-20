<template>
  <header>
    <section class="bg-gray-900 min-h-screen p-20 flex items-center justify-center">
      <div class="bg-gray-800 rounded-lg shadow-md p-10 w-[30rem] flex flex-col items-center">

        <!-- Avatar with Camera Button -->
        <div class="relative mb-6">
          <img class="w-28 h-28 rounded-full" src="C:\Users\PC\Desktop\Ivault\ivault-front\src\assets\pp.jpg" alt="Rounded avatar">

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
            <label for="website" class="block text-white font-bold mb-2 text-lg">First Name: Marianne Leigh</label>
          </div>
          <div class="mb-4">
            <label for="lastname" class="block text-white font-bold mb-2 text-lg">Last Name: Reyes</label>
          </div>
          <div class="mb-4">
            <label for="contact" class="block text-white font-bold mb-2 text-lg">Contact Number: 1234 567 8910</label>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-white font-bold mb-2 text-lg">Email Address: Reyes</label>
          </div>
          <div class="mb-4">
            <label for="username" class="block text-white font-bold mb-2 text-lg">Username: ambot sa kanding</label>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-white font-bold mb-2 text-lg">Password: *********</label> 
          </div>
          <div class="mb-4">
            <label for="subscription" class="block text-white font-bold mb-2 text-lg pb-4">Subscription:</label> 
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg duration-500 hover:scale-105 hover:shadow-xl">Update Profile</button>
        </div>

      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    handleAvatarChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Handle the file upload logic here (e.g., display new avatar)
        console.log('Selected File:', file);
        // You can implement further logic to update the avatar image
      }
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
