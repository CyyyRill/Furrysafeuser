<template>
  <section class="bg-white">
    <div class="py-4 lg:grid lg:min-h-screen lg:grid-cols-12 pr-10">
      <section class="border  bg-blue-50 rounded-2xl left-[6%]  relative h-32 items-end  lg:col-span-5 lg:h-full xl:col-span-6 hidden lg:block">
          <img
            alt=""
            :src="require('@/assets/image/homeanimal shelter.png')" 
            class="absolute inset-0 my-20 mx-10 h-[90%] w-[90%] object-contain " 
          />
  
        <div class="hidden lg:relative lg:block lg:p-12">
          <a class="block text-white" href="#">
            <span class="sr-only">Home</span>
          </a>
  
        </div>
      </section>
  
      <main
        class=" items-center justify-center mx-[80px] lg:w-[43rem] lg:h-[46rem] sm:w-[40rem] sm:px-[40px] lg:col-span-7 lg:px-10 lg:py-[6rem] xl:col-span-6">
        <div>
          <button @click="goBack" class="text-gray-800 text-sm mb-2 block font-semibold">
            &lt; Back
          </button>
          <label class="text-gray-800 text-sm mb-2 block font-semibold"></label> 
        <h1 class="text-2xl font-semibold text-gray-800 pb-6">Sign up as Buddy</h1>
      </div>
        <div class=" flex max-w-xl lg:max-w-3xl ">   
          <div>
             <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2">

              <div class="mb-4">
              <label class="text-gray-800 text-sm mb-2 block font-semibold">First Name</label>
              <input
                type="text"
                v-model="firstName"
                placeholder="First Name"
                class="w-[18rem] text-sm border border-gray-200 bg-white px-4 py-3 rounded-md text-gray-700 shadow-sm"
                required
              />
              <p v-if="!firstName && submitted" class="text-red-500 text-[11px]">*First Name is required</p>
            </div>
            <div class="mb-4">
              <label class="text-gray-800 text-sm mb-2 block font-semibold">Last Name</label>
              <input
                type="text"
                v-model="lastName"
                placeholder="Last Name"
                class="w-[18rem]  text-sm border border-gray-200 bg-white px-4 py-3 rounded-md text-gray-700 shadow-sm"
                required
              />
              <p v-if="!lastName && submitted" class="text-red-500 text-[11px]">*Last Name is required</p>
            </div>
             </div>
              <div class="mb-4">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Username</label>
                <input
                  type="text"
                  v-model="username"
                  placeholder="Username"
                  class="w-full text-sm border border-gray-200 bg-white px-4 py-3 rounded-md text-gray-700 shadow-sm"
                  required
                />
                <p v-if="!username && submitted" class="text-red-500 text-[11px]">*Username is required</p>
              </div>
              <div class="mb-4">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Email</label>
                <input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="w-full text-sm border border-gray-200 bg-white px-4 py-3 rounded-md text-gray-700 shadow-sm"
                  required
                />
                <p v-if="!email && submitted" class="text-red-500 text-[11px]">*Email is required</p>
              </div>
              <div class="mb-4">
                <label class="text-gray-800 text-sm mb-2 block font-semibold">Password</label>
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  minlength="4"
                  class="w-full text-sm border border-gray-200 bg-white px-4 py-3 rounded-md text-gray-700 shadow-sm"
                  required
                />
                <p v-if="!password && submitted" class="text-red-500 text-[11px]">*Password is required</p>
              </div>
              <label class="text-gray-800 text-sm mb-2 block font-semibold">Birth-date</label>
              <div class="pb-3 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2">
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
              <div class="pt-3 col-span-6">
            <p class="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" class="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" class="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>
              <div class="  col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
            @click="handleLoginSubmit"
              class="w-[50%] mt-6 bg-gray-800 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Create an account
            </button>

            <p class="pt-5 mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" @click="goBack" class="text-gray-700 underline">Log in</a>.
            </p>
          </div>
          </div>
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
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          birthMonth: '',
          birthDay: '',
          birthYear: '',
          gender: '',
          submitted: false,
        };
      },
      methods: {
        goBack() {
          this.$router.push({ name: 'login' }); // Navigate to login.vue
        },
        handleLoginSubmit() {
          this.submitted = true; // Set submitted to true on form submission
          // Handle form submission logic here
          if (this.firstName && this.lastName && this.email && this.password) {
            // Proceed with form submission
            console.log('Form submitted successfully!');
          }
        },
        handleRegisterSubmit() {
          this.isStepTwo = true;
          this.activeStep = 2;
        },
        goToStepThree() {
          this.isStepThree = true;
          this.activeStep = 3;
        },
        range(start, end) {
          return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        }
      }
    }
    </script>
    
    <style scoped>
    /* Add any component-specific styles here */
    /* Consider adjusting margins or padding if needed */
    </style>