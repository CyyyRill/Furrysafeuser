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
          <div class="flex space-x-4 text-lg">
            <button @click="selectTab('mga_iro')" class="px-4 py-2" :class="{'text-blue-950 border-b-2 border-blue-950': selectedTab === 'mga_iro'}">Feed</button>
            <button @click="selectTab('dog')" class="px-4 py-2" :class="{'text-blue-950 border-b-2 border-blue-950': selectedTab === 'dog'}">Pet Profile</button>
            <button @click="selectTab('skills')" class="px-4 py-2" :class="{'text-blue-950 border-b-2 border-blue-950': selectedTab === 'skills'}">Badge</button>
          </div>
        </div>

        <div v-if="selectedTab === 'mga_iro'">
          <!-- Content for mga iro niya nakita -->
          <h3>abott usa diri</h3>
          <p>dog lover</p>
          <p>secrt.</p>
          <p>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night.</p>
          <img src="/path/to/dog1.jpg" alt="Dog1" />
          <img src="/path/to/dog2.jpg" alt="Dog2" />
        </div>
        
        <div v-if="selectedTab === 'dog'">
          <h2 class="text-2xl font-bold mb-4">Dog Profiles</h2>
          <button @click="showModal = true" class="mb-4 px-4 py-2 bg-blue-950 text-white rounded-lg">Create Pet Profile</button>

          <PetProfileModal 
            v-if="showModal" 
            :isVisible="showModal" 
            :isEditing="false" 
            :pet="pet" 
            @close="showModal = false" 
            @update-pet="updatePet"
          />
          <div class="grid grid-cols-3 mt-10 gap-5">
            <div>
              <div class="rounded-lg border bg-zinc-100 p-3">
                <img :src="require('/src/assets/image/bals.png')" alt="placeholder"
                  class="h-full w-full rounded-lg object-cover" />
                  <div class="pt-5 space-y-5">
                <h3 class="font-semibold">Rhona; Golden Retriever</h3>
                <router-link to="/petprofile" class="w-full py-5 bg-blue-950 text-white rounded-lg">View Profile</router-link>
              </div>
            </div>
            </div>
            <div>
              <div class="rounded-lg border bg-zinc-100 p-3">
                <img :src="require('/src/assets/image/bals.png')" alt="placeholder"
                  class="h-full w-full rounded-lg object-cover" />
                  <div class="pt-5 space-y-5">
                <h3 class="font-semibold">Rhona; Golden Retriever</h3>
                <router-link to="/petprofile" class="w-full py-5 bg-blue-950 text-white rounded-lg">View Profile</router-link>
              </div>
              </div>
            </div>
            <div>
              <div class="rounded-lg border bg-zinc-100 p-3">
                <img :src="require('/src/assets/image/bals.png')" alt="placeholder"
                  class="h-full w-full rounded-lg object-cover" />
                  <div class="pt-5 space-y-5">
                <h3 class="font-semibold">Rhona; Golden Retriever</h3>
                <router-link to="/petprofile" class="w-full py-5 bg-blue-950 text-white rounded-lg">View Profile</router-link>
              </div>
              </div>        
            </div>
            <div>
              <div class="rounded-lg border bg-zinc-100 p-3">
                <img :src="require('/src/assets/image/bals.png')" alt="placeholder"
                  class="h-full w-full rounded-lg object-cover" />
                  <div class="pt-5 space-y-5">
                <h3 class="font-semibold">Rhona; Golden Retriever</h3>
                <router-link to="/petprofile" class="w-full py-5 bg-blue-950 text-white rounded-lg">View Profile</router-link>
              </div>
              </div>        
            </div>
            <div>
              <div class="rounded-lg border bg-zinc-100 p-3">
                <img :src="require('/src/assets/image/bals.png')" alt="placeholder"
                  class="h-full w-full rounded-lg object-cover" />
                  <div class="pt-5 space-y-5">
                <h3 class="font-semibold">Rhona; Golden Retriever</h3>
                <router-link to="/petprofile" class="w-full py-5 bg-blue-950 text-white rounded-lg">View Profile</router-link>
              </div>
              </div>        
            </div>
            <div>
              <div class="rounded-lg border bg-zinc-100 p-3">
                <img :src="require('/src/assets/image/bals.png')" alt="placeholder"
                  class="h-full w-full rounded-lg object-cover" />
                  <div class="pt-5 space-y-5">
                <h3 class="font-semibold">Rhona; Golden Retriever</h3>
                <router-link to="/petprofile" class="w-full py-5 bg-blue-950 text-white rounded-lg">View Profile</router-link>
              </div>
              </div>        
            </div>
          </div>
        </div>
        <div v-if="selectedTab === 'skills'">
          <!-- Content for Skills -->
        </div>
        <div v-if="selectedTab === 'achievements'">
          <!-- Content for Achievements -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PetProfileModal from '@/pages/Modal/PetProfileModal.vue';

export default {
  name: "UserProfile",
  components: {
    PetProfileModal
  },
  data() {
    return {
      selectedTab: 'mga_iro',
      showModal: false,
      pet: {
        name: '',
        nickname: '',
        dateReHommed: '',
        type: '',
        breed: '',
        gender: '',
        coat: '',
        age: '',
        sizeWeight: '',
        energyLevel: '',
        status: '',
        vaccinations: {
          rabies: false,
          fvr: false,
          fcv: false,
        },
        otherVaccines: '',
        medicalConditions: '',
        specialNeeds: '',
        sterilization: '',
        otherInfo: '',
      },
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab; // Update the selected tab
    },
    submitForm() {
      // Handle form submission logic here
      console.log(this.pet);
      this.showModal = false; // Close modal after submission
      // Reset form
      this.pet = {
        name: '',
        nickname: '',
        dateReHommed: '',
        type: '',
        breed: '',
        gender: '',
        coat: '',
        age: '',
        sizeWeight: '',
        energyLevel: '',
        status: '',
      };
      this.selectedFiles = []; // Reset selected files
    },
    goToStep(step) {
      this.currentStep = step; // Update the current step
    },
    handleFileSelect(event) {
      const files = Array.from(event.target.files);
      this.selectedFiles = files.map(file => ({
        file,
        preview: URL.createObjectURL(file) // Create a preview URL for the image
      }));
    },
    handleDrop(event) {
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      this.selectedFiles = files.map(file => ({
        file,
        preview: URL.createObjectURL(file) // Create a preview URL for the image
      }));
    },
    handleDragOver(event) {
      event.preventDefault(); // Prevent default to allow drop
      this.dragOver = true; // Set dragOver state to true
    },
    handleDragLeave() {
      this.dragOver = false; // Reset dragOver state
    },
    removeFile(index) {
      this.selectedFiles.splice(index, 1); // Remove the selected file
    },
    updatePet(updatedPet) {
      this.pet = updatedPet; // Update the pet data with the new values from the modal
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); // Trigger file input click
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.dog-profile {
  text-align: center;
}

.dog-profile img {
  border-radius: 0.5rem; /* Rounded corners for images */
}
</style>
