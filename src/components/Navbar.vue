<template>
    <div class="flex items-center justify-start bg-black py-4">
      <div class="flex h-12 w-32 flex-shrink-0 mx-5">
        <img src="../assets/CrackWire.png" alt="Logo" class="h-full w-full">
      </div>
      <div class="flex-grow"></div>
      <div>
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
