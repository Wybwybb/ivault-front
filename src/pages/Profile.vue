<template>
  <header>
    <section class="bg-gray-900 min-h-screen flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-md p-10 w-[50%] h-[70%] text-center">
        <!-- Avatar with Camera Button -->
        <div class="relative inline-block">
          <img class="w-20 h-20 rounded-full" src="C:\Users\Marianne Leigh Reyes\Desktop\ambot\ivault-front\src\assets\pp.jpg" alt="Rounded avatar">

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

        <h1 class="text-lg pt-5 font-bold mb-4">Profile</h1>
        
        <!-- Profile Information -->
        <div class="mb-4">
          <label for="website" class="block text-gray-700 font-bold mb-2">First Name: Marianne Leigh</label>
        </div>
        <div class="mb-4">
          <label for="username" class="block text-gray-700 font-bold mb-2">Last Name: Reyes</label>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password: 0901293010</label>
        </div>

        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
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
