<template>
  <div class="flex h-screen bg-gray-100">
    <main class="flex-1 p-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-start mb-6">
          <div class="flex items-center space-x-4">
            <img :src="require('@/assets/image/461037919_2123111208085786_2188055552214296559_n.jpg')" alt="Cristiana Justin" class="rounded-full w-20 h-20" />
            <div>
              <h2 class="text-2xl font-bold">June Cyril Dolendo</h2>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5 5-5H7z"></path>
                </svg>
                <span>taga davao</span>
              </div>
            </div>
          </div>
          <button class="px-4 py-2 bg-blue-950 text-white rounded-lg flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5 5-5H7z"></path>
            </svg>
            Edit Profile
          </button>
        </div>

        <p class="text-gray-600 mb-4">
          I am a fgasdkhkfjasdgh gfsdkfjagkfasghdfjksgh gfsdkjgfasdkjgfasdkjfh fkasdghfasjkdgfasjkd
          <a href="#" class="text-blue-950">More</a>
        </p>

        <div class="flex space-x-4 mb-6">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>3+ Years single</span>
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>5 Certificates Achieved</span>
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>2 im ugly Completed</span>
          </div>
        </div>

        <div class="border-b mb-6">
          <div class="flex space-x-4">
            <button class="px-4 py-2 text-blue-950 border-b-2 border-blue-950">mga iro niya nakita?</button>
            <button class="px-4 py-2 text-gray-500">Dog</button>
            <button class="px-4 py-2 text-gray-500">Skills</button>
            <button class="px-4 py-2 text-gray-500">Achivement</button>
          </div>
        </div>

        <div class="mb-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold">abott usa diri</h3>
            <button class="text-blue-950 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5 5-5H7z"></path>
              </svg>
              Add More
            </button>
          </div>

          <div class="mb-4">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-semibold">dog lover</h4>
                <p class="text-gray-600">secrt.</p>
              </div>
              <div class="text-gray-500">
                <p>Feb 2016 - Dec 2017</p>
                <p>davao city</p>
              </div>
            </div>
            <p class="text-gray-600 mt-2">
              I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <img src="/placeholder.svg" alt="Dog1" class="rounded-lg" width="200" height="150" />
            <img src="/placeholder.svg" alt="dog2" class="rounded-lg" width="200" height="150" />
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: "UserProfile", // Updated component name to be multi-word
};
</script>

<style scoped>
/* Add any additional styles here */
</style>