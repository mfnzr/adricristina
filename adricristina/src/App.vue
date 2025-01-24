<template>
  <header>
    <div class="wrapper">
      <nav>
        <Navbar />
        <HomeView />
      </nav>
    </div>
  </header>

</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HomeView from './views/HomeView.vue'
</script>

<style scoped></style>
