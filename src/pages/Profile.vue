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
          
          <!-- Modal -->
          <div v-if="showModal" class="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-">
            <div class="bg-white max-w-[50rem] pb-10 pl-6 pr-6 first-line:w-full border-spacing-2 rounded-md h-[90vh]">
            <h2 class="text-lg font-bold  text-center  p-5 ">Pet Details</h2>
            <div class="popup-content bg-white p-6 rounded-lg" style="max-width: 800px; width: 100%; height: 75vh; overflow-y: auto;">
       

              <!-- Step 1: Upload Photo and Pet Details -->
              <div v-if="currentStep === 1">
                <h2 class="text-xl font-semibold mb-4">Upload Photo</h2>
                <div
                  class="border-2 border-dashed rounded-lg p-8 text-center transition-colors"
                  :class="dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'"
                  @drop="handleDrop"
                  @dragover="handleDragOver"
                  @dragleave="handleDragLeave"
                >
                  <div v-if="selectedFiles.length === 0">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-1 text-sm text-gray-600">Upload photos and videos here</p>
                  </div>
                  <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div v-for="(file, index) in selectedFiles" :key="index" class="relative">
                      <img :src="file.preview" alt="Preview" class="w-full h-32 object-cover rounded-lg" />
                      <button
                        @click="removeFile(index)"
                        class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    class="hidden"
                    ref="fileInput"
                    @change="handleFileSelect"
                  />
                  <button
                    @click="$refs.fileInput.click()"
                    class="mt-4 px-4 py-2 focus:ring-offset-2"
                  >
                    Select From Computer
                  </button>
                </div>

                <!-- Pet Details Section -->
                      
                <label class=" font-semibold">Name</label>
                <input v-model="pet.name" type="text" class="border bold p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Nickname</label>
                <input v-model="pet.nickname" type="text" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Date Re-homed</label>
                <input v-model="pet.dateReHommed" type="date" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Pet Type</label>
                <select v-model="pet.type" class="border p-2 rounded w-full mb-2">
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                  <option value="Dog">Others</option>
                  <!-- Add more pet types as needed -->
                </select>
          
                      <label class="font-semibold">Breed / Mix</label>
                <input v-model="pet.breed" type="text" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Gender</label>
                <select v-model="pet.gender" class="border p-2 rounded w-full mb-2">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                
                <label class="font-semibold">Coat / Fur</label>
                <input v-model="pet.coat" type="text" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Age</label>
                <input v-model="pet.age" type="number" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Size & Weight</label>
                <input v-model="pet.sizeWeight" type="text" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Energy Level</label>
                <select v-model="pet.energyLevel" class="border p-2 rounded w-full mb-2">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                
                <label class="font-semibold">Status</label>
                <select v-model="pet.status" class="border p-2 rounded w-full mb-2">
                  <option value="Adopted">Adopted</option>
                  <option value="Available">Available</option>
                  <!-- Add more statuses as needed -->
                </select> 

                    <div class="flex justify-between mt-4">
                  <button @click="showModal = false" class="bg-gray-300 text-gray-800 rounded px-4 py-2">
                  Cancel
                </button>
                    <button @click="goToStep(2)" class="bg-blue-500 text-white rounded px-4 py-2">Next</button>
                </div>
              </div>
              

              <!-- Step 2: Additional Information or Confirmation -->
              <div v-if="currentStep === 2">
                <label class="font-semibold " >Vaccination Status</label>
                <div class=" space-x-3 pb-4 ">
                  <label >
                    <input type="checkbox" v-model="pet.vaccinations.rabies" /> Rabies
                  </label>
                  <label >
                    <input type="checkbox" v-model="pet.vaccinations.fvr" /> Feline Viral Rhinotracheitis (Fvr)
                  </label>
                  <label >
                    <input  type="checkbox" v-model="pet.vaccinations.fcv" /> Feline Calicivirus (Fcv)
                  </label>
                  <label >
                    <input type="checkbox" v-model="pet.vaccinations.fp" /> Feline Panleukopenia (Fpv)
                  </label>
                </div>


            
                <label class="font-semibold pt-3">Medical Conditions</label>
                <input v-model="pet.medicalConditions" type="text" class="border p-2 rounded w-full mb-2" />
                
                <label class="font-semibold">Special Needs</label>
                <input v-model="pet.specialNeeds" type="text" class="border p-2 rounded w-full mb-2" />
                
                <div class=" pt-5 space-y-2 ">
                <label class="font-semibold">Has this animal been sterilized?</label>
                  <div class=" flex-row space-x-2">
                  <strong >Non-surgical:</strong>
                  <label >
                    <input type="radio" v-model="pet.sterilization" value="Chemical Sterilization" /> Chemical Sterilization
                  </label>
                  <label >
                    <input type="radio" v-model="pet.sterilization" value="Vasectomy" /> Vasectomy
                  </label>
                </div>
                <div class="flex-row space-x-2">
                  <strong class="font-semibold">Surgical:</strong>
                  <label >
                    <input type="radio" v-model="pet.sterilization" value="Neuter" /> Neuter
                  </label>
                </div>
                  <div class=" flex-row space-x-3">
                  <strong class="font-semibold">Others:</strong>
                  <label >
                    <input type="radio" v-model="pet.sterilization" value="Intact" /> Intact
                  </label>
                  <label >
                    <input type="radio" v-model="pet.sterilization" value="Not Applicable" /> Not Applicable
                  </label>
                  <label >
                    <input type="radio" v-model="pet.sterilization" value="Unknown" /> Unknown
                  </label>
                </div> 
                <div class="pt-3">
                <label class="font-semibold">Other Information</label>
                <textarea v-model="pet.otherInfo" class="border p-2 rounded w-full mb-2" rows="4" placeholder="Tell me more about this Furry Animal"></textarea>
                </div> 
                </div>
                <!-- Navigation Buttons -->
                    <div class="flex justify-between mt-4">
                  <button @click="goToStep(1)" class="bg-gray-300 text-gray-800 rounded px-4 py-2">Back</button>
                  <button @click="saveChanges" class="bg-blue-500 text-white rounded px-4 py-2">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
export default {
  name: "UserProfile",
  data() {
    return {
      selectedTab: 'mga_iro', // Default selected tab
      showModal: false, // State to control modal visibility
      selectedFiles: [], // Initialize selectedFiles to an empty array
      form: {
        givenName: '',
        petType: '',
        breedMix: '',
        ageGender: '',
        size: '',
        coatFur: '',
        energyLevel: '',
        about: '',
        offers: false, // Checkbox state
      },
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
        vaccinations: { // Initialize vaccinations object
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
      currentStep: 1,
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
