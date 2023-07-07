<template>
    <div class="flex items-center justify-start bg-black py-4">
      <div class="flex h-12 w-40 flex-shrink-0 mx-5">
        <img src="../assets/CrackWire.png"
             alt="Logo" 
             class="h-18 w-18">
      </div>
      <div class="flex-grow"></div>
      <div>
      <router-link
                to="/MainPage"
                class="text-white ml-auto mr-6 hover:text-eg-blue cursor-pointer">Main Page
      </router-link>
      <router-link
                  to="/Account"
                  class="text-white ml-auto mr-6 hover:text-eg-blue cursor-pointer">Account
      </router-link>
      <router-link to="/"
                   class="text-white ml-auto mr-6 hover:text-eg-blue cursor-pointer">Log in
              
      </router-link>
      <router-link 
                   to="/Register" 
                   class="text-white ml-auto mr-6 hover:text-eg-blue cursor-pointer">Register
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {};
  },
  methods: {
    toggleDarkMode() {
      this.$emit('darkModeToggle');
    },
  },
};
</script>

<style scoped>
</style>
