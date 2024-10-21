<template>
  <div class="bg-white p-6">
    <div class="flex justify-between items-center mb-4">
      <div class="flex space-x-2">
        <h2 class="text-3xl font-bold">Dolens</h2>
      </div>
      <div>
        <button class="bg-white hover:bg-gray-300 text-gray-800 rounded-xl border font-bold py-2 px-4 mr-2">
          Edit
        </button>
        <button class="bg-white hover:bg-gray-300 text-gray-800 rounded-xl border font-bold py-2 px-4  mr-2">
          Delete
        </button>
        <button class="bg-red-700 hover:bg-red-600 text-white rounded-xl font-bold py-2 px-4 rounded-r-md">
          View as Public
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start ">
      <img :src="require('@/assets/image/LUIGI-3-300x300.jpg')" alt="Socrates" class="w-full h-64 object-cover border rounded-2xl">
      <img :src="require('@/assets/image/LUIGI-3-300x300.jpg')" alt="Socrates" class="w-full h-64 object-cover   border rounded-2xl">
      <img :src="require('@/assets/image/LUIGI-3-300x300.jpg')" alt="Socrates" class="w-full h-64 object-cover border rounded-2xl">
      <div class="relative">
        <img :src="require('@/assets/image/dog-golden-retriever.webp')" alt="Socrates" class="w-full h-64 object-cover rounded-2xl">
        <span class="absolute bottom-4 right-4 bg-gray-800 text-white font-bold py-2 px-4 rounded-full">+5</span>
      </div>
    </div>
    <div class="flex flex-col md:flex-row space-x-0 md:space-x-3">
      <div class="flex w-full">
        <div class="mt-4 rounded-3xl border w-full ">
          <div class="flex m-5 justify-between">
            <p class="text-gray-700">Female | Senior</p>
            <div>
              <h3 class="text-lg font-bold mb-2">Additional Information</h3>
              <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-900">Poor Health</span>
              <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Sprayed</span>
              <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Available</span>
            </div>
          </div>
          <p class="mt-2 m-5  text-gray-800 ">
            Hi there, I'm Dolens! A mature and loyal mixedgjkdhskhdgcsghjxcgskhasdjhkcgaskcjhagskhjagsdckashdgaksdhjcakdhjkkhjsdkhjgsdkjh breed dog. Just to let you know, I am unfortunately in poor health, so you should be ready for associated costs. 
          </p>
        </div>
      </div>
      <div class="mt-4 rounded-3xl border w-full">
        <div class="m-5 space-y-5">
          <h3 class="text-lg font-bold">Good with</h3>
          <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-900">Poor Health</span>
          <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Sprayed</span>
          <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Available</span>

          <h3 class="text-lg font-bold">Bad with</h3>
          <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-900">Poor Health</span>
          <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Sprayed</span>
          <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Available</span>

          <div class="content-start">
            <h3 class="text-lg font-bold">Temperaments</h3>
            <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-900">Poor Health</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Sprayed</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Available</span>
            <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-900">Poor Health</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Sprayed</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Available</span>
            <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-200 dark:text-red-900">Poor Health</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Sprayed</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">Available</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetProfilePage',
  data() {
    return {
      pet: {
        name: 'Socates',
        age: 'Senior',
        gender: 'Female',
        breed: 'Mixed Breed Dog',
        imageMain: 'https://example.com/main-image.jpg',
        imageGallery: [
          'https://example.com/image1.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg',
        ],
        description: "Hi there, I'm Socates! A mature and loyal mixed-breed dog...",
        goodWith: ['Dogs', 'Cats', 'Other Pets'],
        badWith: ['Active Lifestyle', 'First-time Owners'],
        temperaments: [
          { type: 'Affectionate', level: 'Affectionate' },
          { type: 'Aggressive', level: 'Aggressive' },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* Add any specific custom styles here if needed */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr; /* Stack images on small screens */
  }
}
</style>