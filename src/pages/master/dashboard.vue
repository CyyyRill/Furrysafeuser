<template>
  <div class="flex flex-col h-screen bg-white md:flex-row">
    <!-- Sidebar -->
    <aside class="pt-3 w-full md:w-[16%] border-r-[0.5px] border-gray  bg-white ">
      <div class="mx-9 my-3 p-4">
        <h1 class="text-xl font-bold">FurrySafe</h1>
      </div>
      <div class = "text-[100%]">  
      <nav class="mx-5 my-11 space-y-3  font-semibold ">
        <p class="pb-2 px-3 text-[70%] text-gray-500  uppercase">Navigation</p>
        <a href="#" class=" flex items-center px-4 py-2  hover:bg-gray-100 hover:rounded-xl">
          <span v-html="homeIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Home
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100 hover:rounded-xl">
          <span v-html="messageIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Message
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100 hover:rounded-xl">
          <span v-html="exploreIcon" class=" pt-[1%] w-6 h-6 mr-3"></span>
          Explore
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 hover:bg-gray-100 hover:rounded-xl" @click.prevent="openModal">
          <span v-html="Plusicon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Create
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100 hover:rounded-xl">
          <span v-html="profileIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Profile
        </a>
      </nav>
      <div class=" my-[80%] mx-6 pt-12 font-semibold">
        <a href="#" class="flex items-center px-4 py-2  hover:bg-gray-100">
          <span v-html="settingsIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Setting
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2  hover:bg-gray-100">
          <span v-html="logoutIcon" class="pt-[1%] w-6 h-6 mr-3"></span>
          Log out
        </a>
      </div>
    </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Navbar -->
      <header class=" h-20 flex justify-between items-center p-4 bg-white ">
        <div class="flex-1">
          <input type="text" placeholder="Search" class="w-full max-w-xl px-4 py-2 rounded-full bg-gray-100">
        </div>
        <div class="flex items-center space-x-4">
          <button class="text-gray-500 hover:text-gray-600">
            <img :src="notificationIcon" alt="Notifications" class="w-5 h-5">
          </button>
          <button class="text-gray-500 hover:text-gray-600">
            <img :src="messageIcon" alt="Messages" class="w-5 h-5">
          </button>
          <button class="pr-10 flex items-center space-x-2">
            <img src="https://placekitten.com/40/40" alt="Profile" class="w-8 h-8 rounded-full">
            <span class="font-medium">Jaysan</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-white">
        <div class="container mx-auto px-4 sm:px-6 py-8">
          <div class="flex flex-col md:flex-row">
            <!-- Main content area -->
            <div class="w-full md:w-3/4 pr-0 md:pr-4">
              <!-- Recent Stories -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white rounded-lg shadow-md p-4">
                  <h3 class="font-semibold">Royal Akins</h3>
                  <p class="text-gray-500">2 days ago</p>
                  <p>Pizza Party! 🍕🎉</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                  <h3 class="font-semibold">Keyes Khan</h3>
                  <p class="text-gray-500">3 days ago</p>
                  <p>Enjoying snow on ice land.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4">
                  <h3 class="font-semibold">Ahsan Raz</h3>
                  <p class="text-gray-500">3 days ago</p>
                  <p>Pizza Party! 🍕🎉</p>
                </div>
              </div>

              <!-- News Feed Section -->
               <div>
                <h3 class="font-semibold">Recent Updates</h3>
                <div class=" mx-32 flex flex-col gap-4">
                  <!-- Post 1 -->
                  <div class=" p-4 pl-10 rounded-lg ">
                    <div class=" pl-3 pb-1 flex items-center mb-2">
                      <img :src="require('@/assets/image/Hero-Small-Mobile-cats.jpg')" alt="Profile" class="w-9 h-8 rounded-full mr-2">
                      <h4 class="font-semibold">dolens</h4>
                      <h1 class="pl-3 text-gray-500">1 hr</h1>
                      <div class="pl-[60%]">
                      <button type="button" @click="likePost">
                          <span v-html="moretIcon" ></span>
                      </button>
                    </div>
                    </div>
                    <div class="bg-gray-950 w-[100%] h-[40rem] rounded-xl ">
                    <img :src="require('@/assets/image/dog1.jpg')" alt="Post Image" class="w-[100%] h-[40rem] object-contain rounded-xl  mb-2" />
                    </div>
                      <div class=" border-gray">
                      <div class=" flex pt-2 space-x-3">
                        <button type="button" @click="likePost">
                          <span v-html="HeartIcon" ></span>
                      </button>
                      <button type="button" @click="openDogDetailsModal">
                          <span v-html="DogdetailstIcon" ></span>
                      </button>     
                      <button type="button" @click="likePost">
                          <span v-html="Comment" ></span>
                      </button>
                      </div>                  
                  </div>  
                <div class="mt-3">
                  <div class="flex space-x-2 pb-2">
                  <h4 class="font-semibold">dolens</h4>
                  <h1>paangtaa ninyo please pag ako gani ma lagot.</h1>
                </div>
                  <h4 class="text-gray-500 font-medium ">View all 44,461 comments</h4>
                  <div class="flex items-center mt-2">
                    <input type="text" placeholder="Add a comment..." class="flex-1 border-b-2 px-4 py-2" v-model="newComment" @keyup.enter="addComment">
                  </div>
                 </div>
                </div>
                </div>
            </div>
          </div>

            <!-- Right sidebar -->
            <div class="w-full md:w-1/4 pl-0 md:pl-4">
              <!-- Present section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 class="font-semibold mb-2">Present</h3>
                <!-- Present content goes here -->
              </div>

              <!-- Leaves section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 class="font-semibold mb-2">Leaves</h3>
                <!-- Leaves content goes here -->
              </div>

              <!-- Birthday section -->
              <div class="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 class="font-semibold mb-2">Birthday</h3>
                <!-- Birthday content goes here -->
              </div>

              <!-- Work Anniversaries section -->
              <div class="bg-white rounded-lg shadow-md p-4">
                <h3 class="font-semibold mb-2">Work Anniversaries</h3>
                <!-- Work Anniversaries content goes here -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Modal -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-30" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-left sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white shadow-lg transition-all w-[50rem] p-6">
              <div class="flex justify-between items-center">
                <!-- Conditionally render the title based on the current step -->
                <DialogTitle v-if="currentStep === 1" as="h3" class="text-lg font-semibold leading-6 text-gray-900">
                  Create Report
                </DialogTitle>
                <button @click="open = false" ref="cancelButtonRef" class="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="mt-4 overflow-hidden text-gray-700 flex flex-col gap-y-4">
                <!-- Step 1: Reporter Info -->
                <div v-if="currentStep === 1">
                  <TransitionRoot as="template" :show="open">
                    <Dialog as="div" class="relative z-30" @close="open = false">
                      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </TransitionChild>
                      <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-left sm:p-0">
                          <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                              class="relative transform overflow-hidden rounded-lg bg-white shadow-lg transition-all w-[40rem]  p-6">
                              <div class="flex justify-between items-center">
                                <DialogTitle as="h3"
                                  class="text-lg font-semibold leading-6 text-gray-900">
                                  Create Report
                                </DialogTitle>
                                <button @click="open = false" ref="cancelButtonRef" class="text-gray-500 hover:text-gray-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                              <div class="mt-4 overflow-hidden text-gray-700 flex flex-col gap-y-4">
                                <div class="flex items-center gap-x-3">
                                  <img class="h-16 w-16 border border-gray-500 rounded-full object-cover"
                                    :src="profileUrl" alt="profile image" />
                                  <div class="flex flex-col gap-y-1">
                                    <span class="text-base font-medium">Reporter Name</span>
                                    <select
                                      class="border text-gray-700 bg-slate-50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex text-left  ">
                                      <option value="" selected disabled hidden>Report Type</option>
                                      <option value="Missing">Missing Pet</option>
                                      <option value="Abandoned">Abandoned Pet</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="text-sm">
                                  <div class="py-2 flex flex-col gap-y-2">
                                    <label for="petcategory" class="font-medium">Pet Category</label>
                                    <select id="petcategory"
                                      class="text-gray-700 bg-slate-50 block w-full p-2.5 border rounded-lg ">
                                      <option value="" selected disabled hidden>Select Pet Category</option>
                                      <option value="Dog">Dog</option>
                                      <option value="Cat">Cat</option>
                                      <option value="Others">Others</option>
                                    </select>
                                  </div>
                                  <div class="py-2 flex flex-col gap-y-2">
                                    <label for="location" class="font-medium">Location</label>
                                    <input id="location" placeholder="Enter your Location"
                                      class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
                                  </div>
                                  <div class="py-2 flex flex-col gap-y-2">
                                    <label for="petcondition" class="font-medium">Pet Condition</label>
                                    <textarea name="petcondition" id="petcondition"
                                      placeholder="Animal Status" class="border rounded-lg py-2 px-4"></textarea>
                                  </div>
                                  <label for="reportdetails" class="font-medium">Report Details</label>
                                  <div class="flex flex-col gap-y-2 border rounded-lg mt-2">
                                    <textarea name="reportdetails" id="reportdetails"
                                      placeholder="Write a caption or a description about the pet situation"
                                      class="py-2 px-4 rounded-lg"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="flex justify-end w-full mt-4">
                                <button type="button"
                                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  @click="nextStep">Next</button>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                </div>
                <!-- Step 2: Report Details -->
                <div v-if="currentStep === 2">
                <div class="max-w-2xl mx-auto mt-8">
                  <div class="bg-white p-6">
                    <h2 class="text-xl font-semibold mb-4">Upload photo</h2>
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
                        class="mt-4 px-4 py-2  focus:ring-offset-2"
                      >
                        Select From Computer
                      </button>
                    </div>
                    </div>
                    <!-- Share Button Added Here -->
                     <div class="pt-20">
                    <button
                      @click="sharePost"
                      class="mt-4 px-10 py-3 text-black rounded-md border focus:border-black focus:ring-offset-2 absolute bottom-4 right-4"
                    >
                      Share
                    </button>
                  </div>
                  
                </div>
              </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Modal for Dog Details -->
  <TransitionRoot as="template" :show="dogDetailsOpen">
    <Dialog as="div" class="relative z-30" @close="dogDetailsOpen = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-center justify-center p-4 text-left sm:p-0">
                  <TransitionChild as="template" enter="ease-out duration-300"
                      enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                      leave-from="opacity-100 translate-y-0 sm:scale-100"
                      leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                      <DialogPanel
                          class="relative transform overflow-hidden bg-white bg-opacity-0  transition-all w-full h-[48rem] p-6">
                          <div class="flex justify-between items-center absolute top-4 right-4"> <!-- Added absolute positioning -->
                            <button @click="dogDetailsOpen = false" ref="cancelButtonRef" class="text-white hover:text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" stroke-width="2" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div class="mx-[16%] my-10 flex h-[89%] w-[70%] justify-center">
                              <!-- New content starts here -->
                              <div class="rounded-l-xl bg-gray-950  w-[50%]">  
                                  <img :src="require('@/assets/image/dog1.jpg')" alt="Dog Details"
                                      class="flex-shrink-0 w-[30rem] sm:h-fit xl:h-[40rem] object-contain" />
                              </div>
                              <div class="rounded-r-xl bg-white w-[50%] text-sm space-y-">
                                  <div class="flex gap-3 items-center mt-2 ">
                                    <div class="flex items-center border-b px-5 py-2 pt-3 ">
                                    <img :src="require('@/assets/image/Hero-Small-Mobile-cats.jpg')" alt="Profile" class="w-9 h-8 rounded-full mr-2">
                                    <h4 class="font-semibold">dolens</h4>
                                    <div class="pl-[18rem]">
                                    <button type="button" @click="likePost">
                                        <span v-html="moretIcon" ></span>
                                    </button>
                                  </div>
                                  </div>
                                  </div>
                                  <div class="my-[18%]">
                                  <div class=" px-4 py-4">
                                      <p class="font-bold">Report Type:</p>
                                      <p>Missing Dog</p>
                                  </div>
                                  <div class="px-4 py-4">
                                      <p class="font-bold">Animal Status:</p>
                                      <p>Severe</p>
                                  </div>
                                  <div class="px-4 py-4">
                                      <p class="font-bold">Location:</p>
                                      <p>#506 Lim Building J.P. Laurel Avenue, Corner Acacia, Davao City, Philippines</p>
                                  </div>
                                  <div class=" px-4 py-4">
                                      <p class="font-bold">Reported by:</p>
                                      <p>Dolens,<span class="badge">Junecyril</span></p>
                                  </div>
                                  <div class="pt-20 flex justify-center ">
                                    <button v-if="!actionTaken" @click="takeAction" class="text-red-500 font-bold">Take Action</button>
                                    <div v-else class="flex space-x-4">
                                      <button class="bg-green-200 px-4 py-2 rounded">Rescued</button>
                                      <button @click="cancelAction" class="bg-red-200 px-4 py-2 rounded">Cancel</button>
                                    </div>
                                    </div>
                                  </div>
                              </div>
                              <!-- New content ends here -->
                          </div>             
                      </DialogPanel>
                  </TransitionChild>
              </div>
          </div>
    </Dialog>
  </TransitionRoot>

</template>


<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

export default {
  name: 'UserDashboard',
  components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
  data() {
    return {
      homeIcon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m8.99932 22-.25064-3.5089c-.13474-1.8865 1.35932-3.4911 3.25062-3.4911s3.3854 1.6046 3.2507 3.4911l-.2507 3.5089"/><path d="m2.35139 13.2135c-.35302-2.2973-.52953-3.44587-.09522-4.46412.4343-1.01826 1.39786-1.71495 3.32497-3.10832l1.43985-1.04106c2.3973-1.73333 3.59591-2.6 4.97901-2.6s2.5817.86667 4.979 2.6l1.4399 1.04106c1.9271.39337 2.8906 2.09006 3.3249 3.10832.4343 1.01825.2578 2.16682-.0952 4.46412l-.301 1.9589c-.5005 3.2565-.7507 4.8848-1.9186 5.8562s-2.8753.9714-6.2902.9714h-2.2776c-3.41487 0-5.12229 0-6.2902-.9714s-1.41813-2.5997-1.91857-5.8562z" stroke-linejoin="round"/></g></svg>`,
      Comment: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      messageIcon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-linejoin="round"><path d="m14.1706 20.8905c4.183-.278 7.515-3.6573 7.7892-7.8996.0536-.8302.0536-1.69 0-2.5202-.2742-4.24232-3.6062-7.62157-7.7892-7.89963-1.4271-.09486-2.917-.09466-4.3412 0-4.18301.27806-7.51499 3.65731-7.78916 7.89963-.05365.8302-.05365 1.69 0 2.5202.09986 1.5451.78319 2.9757 1.58767 4.1837.4671.8457.15883 1.9012-.3277 2.8232-.3508.6648-.5262.9972-.38537 1.2373.14084.2401.45542.2478 1.08459.2631 1.24424.0303 2.08325-.3225 2.74925-.8136.37772-.2785.56659-.4178.69676-.4338.13016-.016.38633.0895.89857.3005.46039.1896.99495.3066 1.48539.3392 1.4242.0947 2.9141.0949 4.3412 0z" stroke-width="1.5"/><path d="m11.9955 12h.009m3.9865 0h.009m-8 0h.00897" stroke-linecap="round" stroke-width="2"/></g></svg>`,
      exploreIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9L13.5 14.5L9 15.5L10.5 10.5L15 9Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      profileIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8443 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      Plusicon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 4v16m8-8h-16" stroke="#141b34" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>`,
      settingsIcon: `<svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m21 17.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"/><path d="m17.5 14h-11c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h11c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5z"/><path d="m3 6.5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5z"/><path d="m6.5 3h11c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5h-11c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5z"/></g></svg>`,
      logoutIcon:` <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-linecap="round" stroke-width="1.5"><path d="m15 17.625c-.0736 1.8519-1.6169 3.4244-3.6844 3.3738-.481-.0118-1.0755-.1794-2.26448-.5148-2.86151-.8072-5.34557-2.1637-5.94156-5.2025-.10956-.5585-.10956-1.1871-.10956-2.4442v-1.6746c0-1.25709 0-1.88565.10956-2.44424.59599-3.03881 3.08005-4.3953 5.94156-5.20243 1.18898-.33539 1.78348-.50308 2.26448-.51484 2.0675-.05058 3.6108 1.52188 3.6844 3.37382"/><path d="m21 12h-11m11 0c0-.7002-1.9943-2.00847-2.5-2.5m2.5 2.5c0 .7002-1.9943 2.0085-2.5 2.5" stroke-linejoin="round"/></g></svg>`,
      HeartIcon:`<svg fill="none" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m19.4626 3.99415c-2.6817-1.64492-5.0222-.98204-6.4282.07386-.5766.43295-.8648.64942-1.0344.64942s-.4578-.21647-1.0344-.64942c-1.40598-1.0559-3.74651-1.71878-6.42816-.07386-3.51937 2.15879-4.315719 9.28075 3.80209 15.28925 1.54619 1.1444 2.31927 1.7166 3.66047 1.7166s2.1143-.5722 3.6605-1.7166c8.1178-6.0085 7.3214-13.13046 3.8021-15.28925z" stroke="#141b34" stroke-linecap="round" stroke-width="1.5"/></svg>`,
      BookmarkIcon:`<svg fill="none" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m4 17.9808v-8.27327c0-3.63337 0-5.45005 1.17157-6.57879 1.17158-1.12874 3.05719-1.12874 6.82843-1.12874 3.7712 0 5.6569 0 6.8284 1.12874 1.1716 1.12874 1.1716 2.94542 1.1716 6.57879v8.27327c0 2.3059 0 3.4588-.7728 3.8715-1.4967.7991-4.304-1.8671-5.6372-2.6699-.7732-.4656-1.1598-.6984-1.59-.6984s-.8168.2328-1.59.6984c-1.3332.8028-4.14053 3.469-5.63715 2.6699-.77285-.4127-.77285-1.5656-.77285-3.8715z" stroke="#141b34" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>`,
      DogdetailstIcon:`<svg fill="none" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-width="1.5"><path d="m14 9h4" stroke-linecap="round"/><path d="m14 12.5h3" stroke-linecap="round"/><rect height="18" rx="5" stroke-linejoin="round" width="20" x="2" y="3"/><path d="m5 16c1.20831-2.5811 5.7122-2.7509 7 0" stroke-linecap="round" stroke-linejoin="round"/><path d="m10.5 9c0 1.1046-.89543 2-2 2s-2-.8954-2-2c0-1.10457.89543-2 2-2s2 .89543 2 2z"/></g></svg>`,
      moretIcon:`<svg fill="none" height="35" viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg"><g stroke="#141b34" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="m11.9959 12h.009"/><path d="m17.9998 12h.009"/><path d="m5.99981 12h.00898"/></g></svg>`,
     
      open: false,
      fileInput: null,
      imageUrls: [],
      images: 'https://img.icons8.com/fluency/48/stack-of-photos.png',
      profileUrl: 'path-to-profile-image', // Add your profile image URL here
      colors: ['#6B7280', '#4F46E5', '#10B981', '#EC4899', '#FBBF24'], // Add your colors here
      customColor: '#FFFFFF',
      members: [
        { name: 'Frankie Sullivan', email: 'frankie@untitledui.com', role: 'Owner', avatar: 'path-to-avatar' },
        { name: 'Amélie Lauréat', email: 'amelie@untitledui.com', role: 'Editor', avatar: 'path-to-avatar' },
        { name: 'Katie Moss', email: 'katie@untitledui.com', role: 'Editor', avatar: 'path-to-avatar' }
      ],
      showComments: false,
      newComment: '',
      comments: [],
      dogDetailsOpen: false, // New property for dog details modal
      actionTaken: false, // New property to track action state
      currentStep: 1, // Start at the first step
    };
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imageUrls.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.imageUrls.splice(index, 1);
    },
    openModal() {
      this.open = true; // Set open to true to show the modal
    },
    selectColor(color) {
      this.customColor = color;
    },
    createTeam() {
      // Implement team creation logic
    },
    likePost() {
      // Implement like functionality (e.g., increment a like counter)
      console.log('Post liked!');
    },
    toggleComments() {
      this.showComments = !this.showComments;
    },
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment);
        this.newComment = ''; // Clear the input
      }
    },
    sharePost() {
      // Implement share functionality (e.g., open share dialog)
      console.log('Post shared!');
    },
    openDogDetailsModal() {
        this.dogDetailsOpen = true; // Open the dog details modal
    },
    takeAction() {
      this.actionTaken = true; // Set actionTaken to true when the button is clicked
    },
    cancelAction() {
      this.actionTaken = false; // Reset actionTaken when Cancel is clicked
    },
    nextStep() {
      if (this.currentStep < 2) {
        this.currentStep++; // Increment to the next step
      } else {
        this.open = false; // Close modal if at the last step
      }
    },
  }
}
</script>

<script setup>
import { ref } from 'vue'

const selectedFiles = ref([])
const dragOver = ref(false)

const handleFileSelect = (event) => {
  const files = event.target.files
  addFiles(files)
}

const handleDrop = (event) => {
  event.preventDefault()
  dragOver.value = false
  const files = event.dataTransfer.files
  addFiles(files)
}

const addFiles = (files) => {
  for (let i = 0; i < files.length; i++) {
    if (files[i].type.startsWith('image/')) {
      selectedFiles.value.push({
        file: files[i],
        preview: URL.createObjectURL(files[i])
      })
    }
  }
}

const removeFile = (index) => {
  URL.revokeObjectURL(selectedFiles.value[index].preview)
  selectedFiles.value.splice(index, 1)
}

const handleDragOver = (event) => {
  event.preventDefault()
  dragOver.value = true
}

const handleDragLeave = () => {
  dragOver.value = false
}
</script>

<style scoped>
/* Component-specific styles */
svg {
  fill: currentColor; /* This allows the icon to inherit the text color */
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>
