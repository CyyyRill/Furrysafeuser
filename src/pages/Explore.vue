<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Explore</h1>
    <!-- Explore Content -->
    <div class="grid grid-cols-3 gap-4">
      <div v-for="post in posts" :key="post.id" class="bg-white border border-gray-300 rounded-lg">
        <img :src="post.image" :alt="post.caption" class="w-full h-48 object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExplorePage",
  data() {
    return {
      posts: [
        {
          id: 1,
          image: "explore1.jpg",
          caption: "Amazing view!",
        },
        // ... more posts
      ],
    };
  },
};
</script>

<style scoped>
/* Optional custom styles */
</style>
