<template>
    <div class="flex flex-col min-h-screen">
      <Navbar />
      <div class="flex flex-col bg-eg-blue">
        <div class="flex justify-start h-24">
          <div class="w-48 pt-2 mx-5">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              class="align-middle z-30 object-cover w-32 h-32 border-2
               border-white rounded-full hover:border-eg-blue transition duration-300"
            />
          </div>
          <div class="flex flex-col justify-center">
            <strong class="font-semibold text-xl text-white">Username</strong>
            <span class="font-semibold text-md text-white">Status:</span>
          </div>
        </div>
      </div>
      <div class="flex-grow flex bg-dark-grey">
        <h1 class="text-xl font-semibold text-white mt-5 mx-48">Posted Messages:</h1>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
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
    border-color: #0ea5e9;
  }
  
  .transition {
    transition-property: all;
  }
  
  .duration-300 {
    transition-duration: 300ms;
  }
  </style>