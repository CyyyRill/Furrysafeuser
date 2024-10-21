<template>
  <div class="flex justify-center items-center min-h-screen p-4 sm:p-0">
    <!-- Main Container -->
    <div class="flex flex-col md:flex-row justify-center rounded-lg space-y-10 md:space-y-0 md:space-x-20 overflow-hidden w-full max-w-6xl">
      <!-- Left side -->
      <transition name="slide-fade-left" mode="out-in">
        <div v-if="isLogin" key="login-left" class="w-full md:w-1/2">
          <div class="darkblue text-left w-full md:w-2/3 pt-10 md:pt-40 mx-auto">
            <!-- Login Form -->
            <h2 class="text-4xl font-semibold mb-4">Welcome Back</h2>
            <p class="text-sm text-gray-500 mb-8 pt-2 pb-4">
              Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
            </p>
            <form @submit.prevent="handleLoginSubmit">
              <div class="mb-6">
                <label for="loginEmail" class="text-gray-800 text-sm mb-2 block font-semibold">Email</label>
                <input 
                  type="email" 
                  id="loginEmail" 
                  v-model="loginEmail" 
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                  placeholder="Example@mail.com"
                />
              </div>
              <div class="mb-6">
                <label for="loginPassword" class="text-gray-800 text-sm mb-2 block font-semibold">Password</label>
                <input 
                  type="password" 
                  id="loginPassword" 
                  v-model="loginPassword" 
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                  placeholder="At least 6 characters"
                />
              </div>
              <div class="flex items-center justify-between mb-6">
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
                class="font-semibold w-full bg-darkblue text-white py-2 px-4 rounded-md hover:bg-darkblue focus:outline-none focus:ring-2"
              >
                Sign in
              </button>
              <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                  Don't have an account? 
                  <button @click="toggleForm" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</button>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div v-else key="register-left" class="w-full md:w-1/2 hidden md:block">
          <img :src="require('@/assets/image/home_animalshelter_slider_pic4.png')" alt="Animal Shelter Image" class="rounded-3xl bg-lightblue max-w-full md:max-w-3xl pt-14 pl-32 pr-32 mx-auto" />
        </div>
      </transition>
      
      <!-- Right side -->
      <transition name="slide-fade-right" mode="out-in">
        <div v-if="isLogin" key="login-right" class="w-full md:w-1/2 hidden md:block">
          <img :src="require('@/assets/image/home_animalshelter_slider_pic4.png')" alt="Animal Shelter Image" class="rounded-3xl bg-lightblue max-w-full md:max-w-3xl pt-14 pl-32 pr-32 mx-auto" />
        </div>
        <div v-else key="register-right" class="w-full md:w-1/2">
          <div class="darkblue text-left w-full md:w-2/3 pr-0 md:pr-20 pt-10 md:pt-14 mx-auto">
            <!-- Registration Form -->
            <h1 class="text-2xl font-semibold text-gray-800 pb-6">Sign up</h1>
            <form @submit.prevent="handleRegisterSubmit">
              <div class="mb-6">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Full Name</label>
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2">
                  <input
                    type="text"
                    v-model="firstName"
                    placeholder="First Name"
                    class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    required
                  />
                  <input
                    type="text"
                    v-model="lastName"
                    placeholder="Last Name"
                    class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    required
                  />
                </div>
              </div>
              <div class="mb-6">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Username</label>
                <input
                  type="text"
                  v-model="username"
                  placeholder="Username"
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  required
                />
              </div>
              <div class="mb-6">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Email</label>
                <input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  required
                />
              </div>
              <div class="mb-6">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Password</label>
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  minlength="4"
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  required
                />
              </div>
              <div class="mb-6">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Birth-date</label>
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2">
                  <select
                    v-model="birthMonth"
                    class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <!-- Add more months -->
                  </select>
                  <select
                    v-model="birthDay"
                    class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>Day</option>
                    <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
                  </select>
                  <select
                    v-model="birthYear"
                    class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>Year</option>
                    <option v-for="year in range(1900, 2024)" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>
              <div class="mb-6">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Gender</label>
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2">
                  <label class="flex items-center">
                    <input
                      type="radio"
                      v-model="gender"
                      value="Female"
                      class="form-radio h-4 w-4 text-blue-600"
                      required
                    />
                    <span class="ml-2 text-gray-700">Female</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      type="radio"
                      v-model="gender"
                      value="Male"
                      class="form-radio h-4 w-4 text-blue-600"
                      required
                    />
                    <span class="ml-2 text-gray-700">Male</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      type="radio"
                      v-model="gender"
                      value="Prefer not to say"
                      class="form-radio h-4 w-4 text-blue-600"
                      required
                    />
                    <span class="ml-2 text-gray-700">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full mt-6 bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Next
              </button>
              <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                  Already have an account? 
                  <button @click="toggleForm" class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data() {
    return {
      isLogin: true,
      loginEmail: '',
      loginPassword: '',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      gender: ''
    };
  },
  methods: {
    handleLoginSubmit() {
      // Handle login form submission here
      console.log("Login Email:", this.loginEmail);
      console.log("Login Password:", this.loginPassword);
    },
    handleRegisterSubmit() {
      // Handle registration form submission here
      console.log("First Name:", this.firstName);
      console.log("Last Name:", this.lastName);
      console.log("Username:", this.username);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Birth Date:", `${this.birthMonth} ${this.birthDay}, ${this.birthYear}`);
      console.log("Gender:", this.gender);
    },
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    range(start, end) {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  }
};
</script>

<style scoped>
/* Tailwind will handle most of the styling; custom styles can go here */
.slide-fade-left-enter-active,
.slide-fade-left-leave-active,
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-left-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-left-leave-to,
.slide-fade-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
</style>
