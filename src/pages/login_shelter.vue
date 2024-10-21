<template>
    <div class="flex justify-center items-center">
      <!-- Main Container -->
      <div class="flex justify-center rounded-lg space-x-20 pr-14">
        <!-- Left side (Image) -->
        <div>
          <img :src="require('@/assets/image/home_animalshelter_slider_pic4.png')" alt="Animal Shelter Image" class="rounded-3xl bg-lightblue max-w-3xl pt-14 pl-32 pr-32" />
        </div>
        <!-- Right side (Form) -->
        <div class="darkblue text-left max-w-sm pt-48">
          <h2 class="text-2xl font-semibold mb-4">Admin</h2>
          <p class="text-sm text-gray-500 mb-8">
            Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
          </p>
          <!-- Form -->
          <form @submit.prevent="handleSubmit">
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                placeholder="Example@mail.com"
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                placeholder="At least 6 characters"
              />
            </div>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <input 
                  id="remember_me" 
                  name="remember_me" 
                  type="checkbox" 
                  class="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                  Keep me signed in
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <button 
              type="submit" 
              class="font-semibold w-full bg-darkblue text-white py-2 px-4 rounded-md hover:bg-darkblue focus:outline-none focus:ring-2"
            >
              Sign in
            </button>
          </form>
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              Don't have an account? 
              <router-link to="/Regis" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission here
        console.log("Email:", this.email);
        console.log("Password:", this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  