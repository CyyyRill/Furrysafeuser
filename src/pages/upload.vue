<template>
  <div class="min-h-screen flex items-center justify-center space-x-20 bg-gray-50">
    <div class="p-8 rounded-xl w-full max-w-md">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold text-gray-700">Upload file</h2>   
      </div>
      
      <!-- File Upload Area -->
      <div 
        class="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6"
        @drop.prevent="handleFileDrop"
        @dragover.prevent
      >
        <img :src="require('@/assets/image/cloud-computing.png')" alt="Upload Icon" class="mb-4 w-12 h-12">
        <p class="text-gray-600">Drag and Drop file here or 
          <button class="text-blue-500 underline" @click="triggerFileInput">Choose file</button>
        </p>
        <p class="text-gray-400 text-sm mt-2">Supported formats: DOC, DOCX, XLS, XLSX, PNG, JPG</p>
        <p class="text-gray-400 text-sm">Maximum size: 25MB</p>
        <input 
          type="file" 
          hidden 
          accept=".doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" 
          ref="fileInput"
          @change="handleFileChange"
        >
      </div>

      <!-- Uploaded File Info -->
      <div v-if="file" class="mt-6">
        <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
          <div class="flex items-center space-x-3">
            <img :src="fileIcon" alt="File Icon" class="w-6 h-6">
            <div>
              <p class="text-gray-800">{{ file.name }}</p>
              <p class="text-gray-400 text-sm">{{ (file.size / (1024 * 1024)).toFixed(2) }} MB</p>
            </div>
          </div>
          <div class="text-blue-500">{{ uploadProgress }}%</div>
        </div>
        <div class="w-full bg-gray-200 rounded-full mt-2">
          <div class="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full" :style="{ width: uploadProgress + '%' }"></div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex justify-between mt-8">
        <button @click="handleCancel" class="text-gray-500">Cancel</button>
        <button @click="handleNext" class="bg-blue-500 text-white py-2 px-6 rounded-lg">Next</button>
      </div>
    </div>

    <!-- Image Display -->
    <div >
        <img :src="require('@/assets/image/home_animalshelter_slider_pic4.png')" alt="Animal Shelter Image" class="rounded-3xl bg-lightblue max-w-3xl pt-14 pl-32 pr-32" />
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "FileUpload",
  data() {
    return {
      file: null,
      fileIcon: '',
      uploadProgress: 0
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        this.fileIcon = this.getFileIcon(file.type);
        this.uploadFile(file);
      }
    },
    handleFileDrop(event) {
      const file = event.dataTransfer.files[0];
      if (file) {
        this.file = file;
        this.fileIcon = this.getFileIcon(file.type);
        this.uploadFile(file);
      }
    },
    handleCancel() {
      this.file = null;
      this.uploadProgress = 0;
    },
    handleNext() {
      alert("Next button clicked!");
    },
    getFileIcon(fileType) {
      if (fileType.includes("word")) {
        return "https://via.placeholder.com/24?text=DOC";
      } else if (fileType.includes("excel")) {
        return "https://via.placeholder.com/24?text=XLS";
      } else if (fileType.includes("image")) {
        return "https://via.placeholder.com/24?text=IMG";
      }
      return "https://via.placeholder.com/24";
    },
    uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post('/upload', formData, {
        onUploadProgress: progressEvent => {
          this.uploadProgress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        }
      })
      .then(response => {
        console.log('File uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
