<template>
  <div class="bg-white p-6 rounded-lg">
    <div class="doles flex justify-between items-center mb-4 space-x-4 sm:space-x-2">
  <div class="flex space-x-2 sm:space-x-1">
    <h2 class="font-bold text-[25px]">Dolens</h2>
  </div>
  <div class="flex space-x-2 sm:space-x-1">
    <button 
      @click="toggleEdit" 
      class="bg-white hover:bg-gray-300 p-2 text-gray-800 rounded-lg border font-semibold py-1 px-3 ]"
    >
      Edit
    </button>
    <button 
      @click="confirmDelete" 
      class="bg-white hover:bg-gray-300 p-2 text-gray-800 rounded-lg border font-semibold py-1 px-3]"
    >
      Delete
    </button>
    <button 
      @click="goToPetProfile" 
      class="bg-pink-50 hover:bg-red-100 text-red-500 gap-2 p-3 rounded-lg font-semibold py-1 px-3]"
    >
      View as Public
    </button>
  </div>
</div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-1 content-start bg-white rounded-lg">
      <img 
        v-for="(image, index) in pet.imageGallery.slice(0, 3)" 
        :key="index" 
        :src="image" 
        alt="Pet Image" 
        class="w-full h-32 md:h-48 object-fill cursor-pointer" 
        @click="openPreview(index)" 
      />
      <div class="relative overflow-hidden">
        <img v-for="(image, index) in pet.imageGallery.slice(0, 1)" :key="index" :src="image" alt="Pet Image" class="w-full h-32 md:h-48 object-fill"/>
        <div v-if="pet.imageGallery.length > 4" class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-contain">
          <span class="text-white text-xl font-bold">+{{ pet.imageGallery.length - 4}}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row space-x-0 md:space-x-3 mt-4">
      <div class="flex w-full mb-4 md:mb-0">
        <div class="rounded-3xl border w-full p-5">
          <h2 class="font-bold text-[25px]">Dolens</h2>
          <p class="text-gray-700 pb-4 text-sm md:text-base">Female | Senior</p>
          <p class="mt-2 text-gray-800 text-sm md:text-base">
            Hi there, I'm Dolens! A mature and loyal mixed-breed dog. Just to let you know, I am unfortunately in poor health, so you should be ready for associated costs.
          </p>
        </div>
      </div>

      <!-- Pet Owner and Other Details -->
      <div class="grid grid-cols-2 rounded-3xl  border w-full p-5">
        <p class="text-sm md:text-base"><strong>Owner Name:</strong> Eric</p>
        <p class="text-sm md:text-base"><strong>Age:</strong> {{ pet.age }}</p>
        <p class="text-sm md:text-base"><strong>Size:</strong> Medium</p>
        <p class="text-sm md:text-base"><strong>Energy Level:</strong> Low</p>
        <p class="text-sm md:text-base"><strong>Date Re-homed:</strong> {{ pet.dateReHommed }}</p>
        <p class="text-sm md:text-base"><strong>Pet Type:</strong> Dog</p>
        <p class="text-sm md:text-base"><strong>Breed/Mix:</strong> {{ pet.breed }}</p>
        <p class="text-sm md:text-base"><strong>Coat/Fur:</strong> {{ pet.coat }}</p> 
      </div>
    </div>

    <!-- Health and Medical Information -->
    <div class="flex w-full mt-4">
      <div class="rounded-3xl border w-full p-5">
        <h3 class="text-lg font-bold mb-2">Health and Medical</h3>
        <div class="mb-2 text-sm md:text-base">
          <strong>Vaccinations Status:</strong> Rabies, Feline Viral Rhinotracheitis (Fvr), Feline Calicivirus (Fcv), Rabies 2
        </div>
        <div class="mb-2 text-sm md:text-base">
          <strong>Spay / Neuter:</strong> Neuter
        </div>
        <div class="mb-2 text-sm md:text-base">
          <strong>Medical Conditions:</strong> None known
        </div>
        <div class="mb-2 text-sm md:text-base">
          <strong>Special Needs:</strong> None
        </div>
      </div>
    </div>

    <!-- Editing Mode Modal -->
    <PetProfileModal 
      :isVisible="isEditing" 
      :isEditing="isEditing" 
      :pet="pet" 
      @close="closeModal" 
      @submit="saveChanges"
    />

    <!-- Image Preview Modal -->
    <div v-if="isPreviewing" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="p-6 rounded-lg max-w-lg w-full">
        <button @click="closePreview" class="font-bold absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-4 text-4xl">
          &times; <!-- Close button (X) -->
        </button>

        <div class="mt-[3rem] sm:mx-[2rem] w-full flex justify-center">
          <div class="flex justify-center">
            <div class="relative md:rounded-l-2xl flex justify-center items-center">
              <div class="absolute sm:-left-7 lg:-left-11 z-10 bg-white bg-opacity-40 w-fit rounded-full flex items-center hover:bg-gray-100 hover:bg-opacity-50">
                <button @click="prevImage" class="sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gray-700 sm:hover:text-white" :disabled="currentImageIndex === 0">❮</button>
              </div>
              <!-- Centering the div on the screen -->
              <div class="flex sm:h-fit xl:h-[50rem] w-full justify-center">
                <img :src="pet.imageGallery[currentImageIndex]" alt="Preview" class="flex-shrink-0 object-contain" />
              </div>
              <div class="absolute sm:-right-7 lg:-right-11 z-10 bg-white bg-opacity-40 w-fit rounded-full flex items-center hover:bg-gray-100 hover:bg-opacity-50">
                <button @click="nextImage" class="sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gray-700 sm:hover:text-white" :disabled="currentImageIndex === pet.imageGallery.length - 1">❯</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg max-w-sm w-full">
        <h3 class="text-lg font-bold text-center mb-4">Are you sure you want to delete this profile?</h3>
        <div class="flex justify-between">
          <button @click="deletePet" class="bg-red-500 text-white rounded px-4 py-2">Yes</button>
          <button @click="showModal = false" class="bg-gray-300 text-gray-800 rounded px-4 py-2">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PetProfileModal from '@/pages/Modal/PetProfileModal.vue';

export default {
  name: 'PetProfilePage',
  components: {
    PetProfileModal,
  },
  data() {
    return {
      isEditing: false,
      currentImageIndex: 0,
      currentStep: 1,
      pet: {
        name: '',
        description: "Hi there, I'm Dolens! A mature and loyal mixed-breed dog...",
        imageMain: '',
        imageGallery: [
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/dog-golden-retriever.webp'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/dog-golden-retriever.webp'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/dog-golden-retriever.webp'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/LUIGI-3-300x300.jpg'),
        require('@/assets/image/dog-golden-retriever.webp'),
        
        ],
        age: 'Senior',
        dateReHommed: '',
        gender: '',
        breed: '',
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
      showModal: false,
      payment: {
        name: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        cardNumber: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        country: 'Estonia',
      },
      isPreviewing: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    saveChanges(petData) {
      this.pet = { ...petData };
      this.isEditing = false;
    },
    onFileChange(event) {
      const files = event.target.files;
      if (files.length) {
        Array.from(files).forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.pet.imageGallery.push(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      }
    },
    confirmDelete() {
      this.showModal = true;
    },
    deletePet() {
      this.showModal = false;
    },
    nextImage() {
      if (this.currentImageIndex < this.pet.imageGallery.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.pet.imageGallery.length - 1;
      }
    },
    goToStep(step) {
      this.currentStep = step;
      if (step === 1) {
        document.body.classList.remove('overflow-hidden');
      } else {
        document.body.classList.add('overflow-hidden');
      }
    },
    closeModal() {
      this.isEditing = false;
    },
    openPreview(index) {
      console.log("Opening preview for image index:", index);
      this.currentImageIndex = index;
      this.isPreviewing = true;
    },
    closePreview() {
      this.isPreviewing = false;
    },
    deleteImage(index) {
      this.pet.imageGallery.splice(index, 1);
      if (this.currentImageIndex >= this.pet.imageGallery.length) {
        this.currentImageIndex = this.pet.imageGallery.length - 1;
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    nextStep() {
      this.currentStep = 2;
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
  watch: {
    isEditing(newValue) {
      if (newValue) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 292px) {
  /* Mobile styles */
  .doles {
    flex-direction: column;
  }
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .h-40 {
    height: auto;
  }
}

.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>