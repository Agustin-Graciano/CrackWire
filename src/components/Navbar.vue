<template>
  <div>
    <div class="flex justify-end bg-black py-6">
      <router-link 
              to='/SignUp' 
              class="text-white mr-6 hover:text-eg-blue cursor-pointer">Sign Up
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
