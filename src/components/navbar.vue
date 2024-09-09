<template>
  <div class="w-full h-auto flex py-4 px-6 lg:px-40 bg-white relative">
    <!-- Logo -->
    <div class="flex justify-between items-center w-full">
      <img src="/public/logo.svg" alt="logo">

      <!-- Menu pour les écrans lg et plus -->
      <div class="hidden lg:flex gap-8 justify-center items-center text-cl text-sm">
        <button class="relative inline-block hover:text-col group">
          Home
          <span
            class="absolute left-0 -bottom-7 w-0 h-1  bg-lin transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button class="relative inline-block hover:text-col group">
          About
          <span
            class="absolute left-0 -bottom-7 w-0 h-1  bg-lin transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button class="relative inline-block hover:text-col group">
          Contact
          <span
            class="absolute left-0 -bottom-7 w-0 h-1  bg-lin transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button class="relative inline-block hover:text-col group">
          Blog
          <span
            class="absolute left-0 -bottom-7 w-0 h-1  bg-lin transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button class="relative inline-block hover:text-col group">
          Careers
          <span
            class="absolute left-0 -bottom-7 w-0 h-1  bg-lin transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      <!-- Bouton de demande d'invitation -->
      <div class="hidden lg:block">
        <button class="text-white bg-gradient-to-br  from-lin to-lin2 text-sm px-8 py-3 rounded-full font-bold transition-opacity hover:opacity-40">
          Request Invite
        </button>
      </div>

      <!-- Bouton de menu pour les petits écrans -->
      <div class="lg:hidden relative">
        <button @click="toggleMenu">
          <img v-if="!menuOpen" src="/public/icon-hamburger.svg" alt="menu" class="w-6 h-6">
          <img v-if="menuOpen" src="/public/icon-close.svg" alt="close" class="w-4 h-4 absolute">
        </button>
      </div>
    </div>

    <!-- Menu latéral pour petits écrans -->
    <div v-if="menuOpen" class="fixed inset-0 bg-white flex flex-col z-20 p-4 transition-transform transform"
      :class="menuOpen ? 'translate-x-0 m-10 pt-8 h-80 translate-y-20 shadow-2xl shadow-col' : '-translate-x-full'">
      <button @click="toggleMenu" class="absolute top-4 right-4">
        <img src="/public/icon-close.svg" alt="close" class="w-6 h-6">
      </button>
      <nav class="flex flex-col gap-8 text-center text-col">
        <button @click="toggleMenu">Home</button>
        <button @click="toggleMenu">About</button>
        <button @click="toggleMenu">Contact</button>
        <button @click="toggleMenu">Blog</button>
        <button @click="toggleMenu">Careers</button>
        <!-- <button class="text-white bg-gradient-to-br from-lin to-lin2 px-8 py-3 rounded-full font-bold">
            Request Invite
          </button> -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>