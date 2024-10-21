<template>
  <div class="bg-blue-100 p-6">
    <header class="text-center mb-6">
      <h1 class="text-2xl font-bold">10,000 registered animals</h1>
      <h2 class="text-xl">Animals for Adaptop</h2>
    </header>
    <main class="flex">
      <aside class="w-1/4 p-4 bg-white shadow-md rounded-lg">
        <h3 class="font-semibold">Filter</h3>
        <label for="location" class="block mt-2">Location</label>
        <input type="text" id="location" placeholder="City or zip code" class="border rounded w-full p-2 mt-1">
        <button class="mt-2 bg-blue-500 text-white rounded p-2">Use my current location</button>
        <h3 class="font-semibold mt-4">Species</h3>
        <label class="block mt-2">
          <input type="radio" name="species" value="all" checked> All
        </label>
        <label class="block mt-1">
          <input type="radio" name="species" value="dogs"> Dogs
        </label>
        <label class="block mt-1">
          <input type="radio" name="species" value="cats"> Cats
        </label>
      </aside>
      <section class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div class="animal-card bg-white shadow-md rounded-lg p-4">
          <img src="cat.jpg" alt="Cat" class="w-full h-48 object-cover rounded">
          <h4 class="font-semibold mt-2">Dolens</h4>
          <p>The reason, catname.png (city)</p>
        </div>
        <div class="animal-card bg-white shadow-md rounded-lg p-4">
          <img src="dog.jpg" alt="Dog" class="w-full h-48 object-cover rounded">
          <h4 class="font-semibold mt-2">Dolens</h4>
          <p>The reason, dogname.png (city)</p>
        </div>
        <div class="animal-card bg-white shadow-md rounded-lg p-4">
          <img src="dog2.jpg" alt="Dog" class="w-full h-48 object-cover rounded">
          <h4 class="font-semibold mt-2">Dolens</h4>
          <p>The reason, dogname2.png (city)</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UserTimeline',
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
