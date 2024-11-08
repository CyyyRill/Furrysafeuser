<template>
  <section class="bg-white">
    <div class="p-4 lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside class="border bg-blue-50 rounded-2xl right-[6%] relative w-[49rem] lg:order-last lg:col-span-5 lg:h-full hidden lg:block ">
        <!-- Check if this image is causing issues -->
        <img
          alt=""
          :src="require('@/assets/image/homeanimal shelter.png')" 
          class="absolute inset-0 my-20 mx-16 h-[90%] w-[90%] object-contain " 
        />
      </aside>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-10 xl:col-span-6">
        <div class="darkblue text-left w-full md:w-2/3 pt-10 pb-10 md:pt-2 mx-auto">     
          <form @submit.prevent="isSignUp ? handleSignUpSubmit : handleLoginSubmit">         
              <div class="mb-6" v-if="!isSignUp"> 
                <h2 class="text-4xl font-semibold mb-4"> Welcome Back</h2>
             <p class="text-sm text-gray-500 mb-8 pt-2 pb-4">
                 Today is a new day. It\'s your day. You shape it. Sign in to start managing your projects.
              </p> 
              <label for="loginEmail" class="text-gray-800 text-sm mb-2 block font-semibold">Email</label>
              <input 
                type="email" 
                id="loginEmail" 
                v-model="loginEmail" 
                class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                placeholder="Example@mail.com"
              />
            </div>
            <div class="mb-6" v-if="!isSignUp">
              <label for="loginPassword" class="text-gray-800 text-sm mb-2 block font-semibold">Password</label>
              <input 
                type="password" 
                id="loginPassword" 
                v-model="loginPassword" 
                class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                placeholder="At least 6 characters"
              />
            </div>

            <div class="flex items-center justify-between mb-6" v-if="!isSignUp">
              <div class="flex items-center">
                <input 
                  id="rememberMe" 
                  name="rememberMe" 
                  type="checkbox" 
                  class="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label for="rememberMe" class="ml-2 block text-sm text-gray-900">
                  Keep me signed in
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <button 
              type="submit" 
              class="font-semibold w-full text-white bg-gray-800 py-2 px-4 rounded-md hover:bg-darkblue focus:outline-none focus:ring-2"
              v-if="!isSignUp">
               Sign in
            </button>
            <div v-if="isSignUp" class="my-20 ">
              <h3 class="text-2xl text-center font-semibold mb-4">How are you planning to blab bla?</h3>
              <p class="text-sm pb-10 text-center text-gray-600">dfshrjkysduwietchjdgfasyuetuiewui </p>
              <div class="flex justify-between mb-6 h-48">
                <button 
                  type="button" 
                  class="border rounded-lg p-4 w-full mr-2 bg-gray-50 hover:bg-gray-100"
                  :class="{ 'border-2 border-gray-800': usageType === 'buddy' }"
                  @click="selectUsage('buddy')"
                >
                  <div class="font-semibold">Buddy</div>
                  <p class="text-sm border-gray-800">unsa may ibutang nako </p>
                </button>
                <button 
                  type="button" 
                  class="border rounded-lg p-4 w-full ml-2 bg-gray-50 hover:bg-gray-100"
                  :class="{ 'border-2 border-gray-800': usageType2 === 'shelter' }"
                  @click="selectUsage2('shelter')"
                >
                  <div class="font-semibold">Shelter</div>
                  <p class="text-sm text-gray-600">unsa may ibutang nako</p>
                </button>
              </div>
              <button
                type="button"
                class="w-full mt-6 bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                @click="createWorkspace"
              >
                Create 
              </button>
            </div>
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                {{ isSignUp ? 'Already have an account?' : 'Don\'t have an account?' }} 
                <button @click="toggleForm" class="font-medium text-indigo-600 hover:text-indigo-500">{{ isSignUp ? 'Sign in' : 'Sign up' }}</button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginShelter',
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      signupPassword: '', // New data property for sign-up password
      isSignUp: false, // New data property to toggle forms
      usageType: '',
      usageType2: '', // New data property to store usage selection
    };
  },
  methods: {
    handleLoginSubmit() {
      // Handle login form submission
    },
    handleSignUpSubmit() {
      // Handle sign-up form submission
    },
    toggleForm() {
      this.isSignUp = !this.isSignUp; // Toggle between login and sign-up
    },
    goToRegis() {
      this.$router.push({ name: 'Regis' }); // Navigate to Regis.vue
    },
    goToRegis2() {
      this.$router.push({ name: 'Regisshel' }); // Navigate to Regis.vue
    },
    createWorkspace() {
      if (this.usageType || this.usageType2) { // Check if either usage type is selected
        if (this.usageType) {
          this.$router.push({ name: 'Regis' }); // Navigate to Regis.vue
        } else if (this.usageType2) {
          this.$router.push({ name: 'Regisshel' }); // Navigate to Regisshel.vue
        }
      } else {
        alert('Please select a usage type before creating a workspace.'); // Alert if no selection
      }
    },
    selectUsage(type) {
      this.usageType = this.usageType === type ? '' : type; // Toggle selection for Buddy
      this.usageType2 = ''; // Clear Shelter selection
    },
    selectUsage2(type2) {
      this.usageType2 = this.usageType2 === type2 ? '' : type2; // Toggle selection for Shelter
      this.usageType = ''; // Clear Buddy selection
    },
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
/* Consider adjusting margins or padding if needed */
.bg-blue-200 {
  background-color: #bfdbfe; /* Light blue color for highlighting */
}
</style>