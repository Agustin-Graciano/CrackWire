<template>
    <div class="flex flex-col min-h-screen">
      <Navbar />
      <div class="flex flex-col bg-eg-blue z-10">
        <!-- User Info Section -->
        <div class="flex justify-start h-24">
          <div class="w-48 py-5 mx-10">
            <img
              @click="addProfilePicture"
               id="profilePicture"
               alt=""
               :src="profilePicture || 'https://www.pragyansws.org/uploads/image/pragyan/icon.png'"
               class="align-middle z-30 object-cover w-32 h-32 border-2 border-white bg-white rounded-full hover:border-eg-blue transition duration-300 cursor-pointer"
            />

          </div>
          <div class="flex flex-col justify-center">
            <strong class="font-semibold text-xl text-white -mx-16">Username</strong>
            <span class="font-semibold text-md text-white -mx-16">Status:</span>
          </div>
        </div>
      </div>
      <!-- Posted Messages Section -->
      <div class="flex-grow flex bg-dark-grey">
        <h1 class="text-xl font-semibold text-white mt-5 mx-48">Posted Messages:</h1>
      </div>
      <!-- Display your messages here -->
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
     return {
       profilePicture: '/https://www.pragyansws.org/uploads/image/pragyan/icon.png',
     };
    },

    methods: {
    // Adds profile picture
    addProfilePicture() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.onchange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
          const imageDataUrl = reader.result;

          // Save the picture to Local Storage
          this.saveProfilePicture(imageDataUrl);

          // Update the profile picture display
          const profilePicture = document.getElementById('profilePicture');
          profilePicture.src = imageDataUrl;
        };
        reader.readAsDataURL(file);
      };

      // Trigger the file input dialog
      fileInput.click();
    },
    //Saves profile picture
    saveProfilePicture(imageDataUrl) {
      localStorage.setItem('profilePicture', imageDataUrl);
    },
  },
  mounted() { // The mounted lifecycle hook is a function that is executed after the component is inserted into the DOM (Document Object Model). 
             // It is a part of the component lifecycle in Vue.js.
    // Load the profile picture from Local Storage, if available
    const savedPicture = localStorage.getItem('profilePicture');
    if (savedPicture) {
      const profilePicture = document.getElementById('profilePicture');
      profilePicture.src = savedPicture;
    }
  },
}; 
</script>
  
  <style scoped>
  .flex {
    display: flex;
  }
  
  .flex-col {
    flex-direction: col;
  }
  
  .min-h-screen {
    min-height: 100vh;
  }
  
  .flex-grow {
    flex-grow: 1;
  }
  
  @media (max-width: 639px) {
    /* Apply styles for screens smaller than sm */
    .w-full {
      width: 100%;
    }
  }
  
  .border-eg-blue {
    border-color: #0ea5e9;
  }
  
  .hover\:border-eg-blue:hover {
    border-color: #000dff;
  }
  
  .transition {
    transition-property: all;
  }
  
  .duration-300 {
    transition-duration: 300ms;
  }
  </style>