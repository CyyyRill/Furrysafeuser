<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Home</h1>
    <!-- Home Content -->
    <div class="space-y-6">
      <div v-for="post in posts" :key="post.id" class="bg-white border border-gray-300 rounded-lg">
        <!-- Post Header -->
        <div class="flex items-center justify-between p-3">
          <div class="flex items-center space-x-2">
            <img :src="post.profile" class="w-8 h-8 rounded-full" :alt="post.username" />
            <span class="font-semibold text-sm">{{ post.username }}</span>
          </div>
          <i class="fas fa-ellipsis-h text-lg cursor-pointer"></i>
        </div>

        <!-- Post Image -->
        <img :src="post.image" :alt="post.caption" class="w-full" />

        <!-- Post Actions -->
        <div class="p-3">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center space-x-4">
              <i class="far fa-heart text-2xl cursor-pointer"></i>
              <i class="far fa-comment text-2xl cursor-pointer"></i>
              <i class="far fa-paper-plane text-2xl cursor-pointer"></i>
            </div>
            <i class="far fa-bookmark text-2xl cursor-pointer"></i>
          </div>
          <p class="font-semibold text-sm mb-1">{{ post.likes }} likes</p>
          <p class="text-sm">
            <span class="font-semibold">{{ post.username }}</span>
            {{ post.caption }}
          </p>
          <p class="text-gray-500 text-xs mt-1">View all {{ post.comments }} comments</p>
          <p class="text-gray-400 text-xs mt-1">{{ post.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHome",
  data() {
    return {
      posts: [
        {
          id: 1,
          username: "user1",
          profile: "profile1.jpg",
          image: "post1.jpg",
          caption: "Beautiful day!",
          likes: 1234,
          comments: 56,
          time: "2 HOURS AGO"
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