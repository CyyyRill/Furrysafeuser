<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white max-w-[90%] md:max-w-[50rem] pb-10 pl-6 pr-5 first-line:w-full border-spacing-2 rounded-md h-auto">
        <h3 class="text-lg font-bold text-center p-5">{{ isEditing ? 'Edit Pet Info' : 'Create Pet Profile' }}</h3>
        <div class="popup-content bg-white p-4 rounded-lg overflow-y-auto" style="max-width: 800px; width: 100%; height: 75vh; overflow-y-auto;">
          <!-- Image Carousel -->
          <div v-if="currentStep === 1" class="relative mb-4">
            <!-- Display the current pet image if available -->
            <div v-if="isEditing">
              <img v-if="localPet.imageGallery && localPet.imageGallery.length > 0" :src="localPet.imageGallery[currentImageIndex]" alt="Pet Image" class="w-full h-48 object-cover rounded-lg" />
              <div v-else>No images available</div>
              <button @click="prevImage" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 w-fit rounded-full flex items-center hover:bg-gray-100 hover:bg-opacity-50 text-gray-700 p-2">❮</button>
              <button @click="nextImage" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 w-fit rounded-full flex items-center hover:bg-gray-100 hover:bg-opacity-50 text-gray-700 p-2">❯</button>
              <button @click="deleteImage(currentImageIndex)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 opacity-50 hover:bg-red-600">✖</button>
              <button @click="triggerFileInput" class="absolute bottom-2 left-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">Add a Photo</button>
              <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" multiple class="hidden" />
            </div>
            <div v-else>
              <!-- New Upload Section -->
              <div
                class="border-2 border-dashed rounded-lg p-4 text-center transition-colors"
                :class="dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'"
                @drop="handleDrop"
                @dragover="handleDragOver"
                @dragleave="handleDragLeave"
              >
                <div v-if="localPet.imageGallery.length === 0">
                  <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p class="mt-1 text-sm text-gray-600">Upload photos and videos here</p>
                </div>
                <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div v-for="(file, index) in localPet.imageGallery" :key="index" class="relative">
                    <img :src="file" alt="Preview" class="w-full h-32 object-cover rounded-lg" />
                    <button
                      @click="deleteImage(index)"
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
                  @change="onFileChange"
                />
                <button
                  @click="triggerFileInput"
                  class="mt-4 px-4 py-2 focus:ring-offset-2"
                >
                  Select From Computer
                </button>
              </div>
            </div>
          </div>
  
          <!-- Pet Details Form -->
          <div class="mb-4" v-if="currentStep === 1">
            <label class="font-semibold">Name</label>
            <input v-model="localPet.name" type="text" class="border bold p-2 rounded w-full mb-2" />
            <label class="font-semibold">Nickname</label>
            <input v-model="localPet.nickname" type="text" class="border p-2 rounded w-full mb-2" />
            <label class="font-semibold">Date Re-homed</label>
            <input v-model="localPet.dateReHommed" type="date" class="border p-2 rounded w-full mb-2" />
            <label class="font-semibold">Pet Type</label>
            <select v-model="localPet.type" class="border p-2 rounded w-full mb-2" @change="localPet.breed = ''">
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Others">Others</option>
            </select>

            <!-- New Breed Selection for Dogs -->
            <div v-if="localPet.type === 'Dog'" class="mb-4">
              <label class="font-semibold">Breed / Mix</label>
              <select v-model="localPet.breed" class="border p-2 rounded w-full mb-2">
                <option value="" selected disabled hidden>Select Dog Breed/Mix</option>
                <option v-for="(breed, index) in dogBreeds" :key="index" :value="breed">{{ breed }}</option>
              </select>
            </div>

            <!-- New Breed Selection for Cats -->
            <div v-if="localPet.type === 'Cat'" class="mb-4">
              <label class="font-semibold">Breed / Mix</label>
              <select v-model="localPet.breed" class="border p-2 rounded w-full mb-2">
                <option value="" selected disabled hidden>Select Cat Breed/Mix</option>
                <option v-for="(breed, index) in catBreeds" :key="index" :value="breed">{{ breed }}</option>
              </select>
            </div>

             <!-- New Breed Selection for Others -->
             <div v-if="localPet.type === 'Others'" class="mb-4">
              <label class="font-semibold">Breed / Mix</label>
              <input v-model="localPet.breed" type="text" placeholder="Enter Breed/Mix" class="border p-2 rounded w-full mb-2" />
            </div>

            <label class="font-semibold">Gender</label>
            <select v-model="localPet.gender" class="border p-2 rounded w-full mb-2">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label class="font-semibold">Coat / Fur</label>
            <input v-model="localPet.coat" type="text" class="border p-2 rounded w-full mb-2" />
            <label class="font-semibold">Age</label>
            <input v-model="localPet.age" type="number" class="border p-2 rounded w-full mb-2" />
            <label class="font-semibold">Size & Weight</label>
            <input v-model="localPet.sizeWeight" type="text" class="border p-2 rounded w-full mb-2" />
            <label class="font-semibold">Energy Level</label>
            <select v-model="localPet.energyLevel" class="border p-2 rounded w-full mb-2">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">Medium-High</option>
              <option value="Medium">High</option>
              <option value="High">Very High</option>
            </select>
            <div class="flex flex-col md:flex-row justify-between mt-4">
              <button @click="closeModal" class="bg-gray-300 text-gray-800 rounded px-4 py-2 mb-2 md:mb-0">Cancel</button>
              <button @click="goToStep(2)" class="bg-blue-500 text-white rounded px-4 py-2">Next</button>
            </div>
          </div>

          <!-- Step 2: Additional Information or Confirmation -->
          <div v-if="currentStep === 2">
            <h4 class="font-bold text-lg mb-5">Health and Medical</h4>
            <label class="font-semibold">Vaccination Status</label>
            <div class="space-x-3 pb-4">
                <label>
                    <input type="checkbox" v-model="localPet.vaccinations.rabies" @change="updateSelectedVaccines('Rabies', localPet.vaccinations.rabies)" /> Rabies
                </label>
                <label>
                    <input type="checkbox" v-model="localPet.vaccinations.fvr" @change="updateSelectedVaccines('Feline Viral Rhinotracheitis', localPet.vaccinations.fvr)" /> Feline Viral Rhinotracheitis (Fvr)
                </label>
                <label>
                    <input type="checkbox" v-model="localPet.vaccinations.fcv" @change="updateSelectedVaccines('Feline Calicivirus', localPet.vaccinations.fcv)" /> Feline Calicivirus (Fcv)
                </label>
                <label>
                    <input type="checkbox" v-model="localPet.vaccinations.fp" @change="updateSelectedVaccines('Feline Panleukopenia', localPet.vaccinations.fp)" /> Feline Panleukopenia (Fpv)
                </label>
            </div>
           
            
            <label class="font-semibold pt-3">Other Vaccines</label>
            <div class="mt-2 flex gap-x-3">
                <input type="text" v-model="otherVaccines" @input="updateOtherVaccines" placeholder="Enter other vaccines" 
                       class="border p-2 rounded w-full mb-2" />
            </div>
            <p class="my-4 text-[13px]">Selected Vaccines: {{ allVaccines.join(', ') }}</p>
             
            <label class="font-semibold pt-3">Medical Conditions</label>
            <input v-model="localPet.medicalConditions" type="text" class="border p-2 rounded w-full mb-2" />
            
            <label class="font-semibold">Special Needs</label>
            <input v-model="localPet.specialNeeds" type="text" class="border p-2 rounded w-full mb-2" />
            
            <div class="pt-5 space-y-2">
              <!-- New Spay/Neuter Status Section -->
            <label class="font-semibold pt-3">Has this animal been spayed/neutered?</label>
            <div class="flex flex-col space-y-2">
                <label>
                    <input type="radio" v-model="localPet.sterilization" value="Spayed" @change="updateSelectedValue('Spayed')" /> Yes - Spayed: This animal is a female that has been spayed.
                </label>
                <label>
                    <input type="radio" v-model="localPet.sterilization" value="Neutered" @change="updateSelectedValue('Neutered')" /> Yes - Neutered: This animal is a male that has been neutered.
                </label>
                <label>
                    <input type="radio" v-model="localPet.sterilization" value="Intact" @change="updateSelectedValue('Intact')" /> No - Intact: This animal has not been spayed or neutered.
                </label>
                <label>
                    <input type="radio" v-model="localPet.sterilization" value="Not Applicable" @change="updateSelectedValue('Not Applicable')" /> Not Applicable: This animal is too young or not eligible for spaying/neutering.
                </label>
                <label>
                    <input type="radio" v-model="localPet.sterilization" value="Unknown" @change="updateSelectedValue('Unknown')" /> Unknown: This animal's spay/neuter status is unknown.
                </label>

                <span class="my-4 text-[13px]">Selected value: {{ selectedValue }}</span>
            </div>
              <div class="pt-3">
                <label class="font-semibold">Other Information</label>
                <textarea v-model="localPet.otherInfo" class="border p-2 rounded w-full mb-2" rows="4" placeholder="Tell me more about this Furry Animal"></textarea>
              </div>
            </div>
           
            <!-- Navigation Buttons -->
            <div class="flex flex-col md:flex-row justify-between mt-4">
              <button @click="goToStep(1)" class="bg-gray-300 text-gray-800 rounded px-4 py-2 mb-2 md:mb-0">Back</button>
              <button @click="saveChanges" class="bg-blue-500 text-white rounded px-4 py-2">Save Changes</button>
            </div>
          </div>
        </div>
        </div>
      </div>
  </template>
  
  <script>
export default {
  name: 'PetProfileedit',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    isEditing: {
      type: Boolean,
      required: true,
    },
    pet: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentImageIndex: 0,
      localPet: {
        ...this.pet,
        imageGallery: this.pet.imageGallery || [],
      },
      currentStep: 1,
      dragOver: false,
      dogBreeds: ['Labrador Retriever', 'Golden Retriever', 'Bulldog', 'German Shepherd', 'Pit bull', 'Beagle', 'Rottweiler', 'Boxer', 'Dachshund', 'Yorkshire Terrier', 'Maltese', 'Chihuahua', 'Poodle', 'Shih Tzu', 'Mixed breed'],
      catBreeds: ['Siamese', 'Persian', 'Maine Coon', 'British Shorthair', 'Domestic Shorthair', 'American Shorthair', 'Domestic Longhair', 'Domestic Medium Hair', 'Bengal', 'Ragdoll', 'Mixed breed'],
      selectedVaccines: [],
      otherVaccines: '',
      selectedValue: '',
    };
  },
  computed: {
    allVaccines() {
      return [...this.selectedVaccines, this.otherVaccines ? `Other: ${this.otherVaccines}` : ''];
    },
  },
  methods: {
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.localPet.imageGallery.length - 1) {
        this.currentImageIndex++;
      }
    },
    deleteImage(index) {
      this.localPet.imageGallery.splice(index, 1);
      if (this.currentImageIndex >= this.localPet.imageGallery.length) {
        this.currentImageIndex = this.localPet.imageGallery.length - 1;
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const files = event.target.files;
      if (files.length) {
        Array.from(files).forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.localPet.imageGallery.push(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      }
    },
    closeModal() {
      this.$emit('close');
    },
    submitChanges() {
      this.$emit('submit', this.localPet);
      this.closeModal();
    },
    goToStep(step) {
      this.currentStep = step;
    },
    saveChanges() {
      this.$emit('update-pet', this.localPet);
    },
    updateSelectedVaccines(vaccine, isChecked) {
      if (isChecked) {
        this.selectedVaccines.push(vaccine);
      } else {
        this.selectedVaccines = this.selectedVaccines.filter(v => v !== vaccine);
      }
    },
    updateOtherVaccines() {
      // This method is now optional since we handle it in the computed property
    },
    updateSelectedValue(value) {
      this.selectedValue = value;
    },
    handleDrop(event) {
        event.preventDefault(); // Prevent default behavior
        const files = event.dataTransfer.files;
        if (files.length) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.localPet.imageGallery.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        }
    },
    handleDragOver(event) {
        event.preventDefault(); // Prevent default behavior
        this.dragOver = true; // Indicate that an item is being dragged over
    },
    handleDragLeave() {
        this.dragOver = false; // Reset drag over state
    },
  },
  watch: {
    pet: {
      handler(newPet) {
        this.localPet = { ...newPet };
      },
      deep: true,
    },
  },
};
</script>
  
  <style scoped>
  /* Add any specific styles for the modal here */
  @media (max-width: 640px) {
    .popup-content {
      max-width: 90%; /* Adjust max width for mobile */
      padding: 1rem; /* Add padding for better spacing */
    }
    .border {
      width: 100%; /* Ensure inputs take full width */
    }
  }
  </style>

