<template>
  <header>
    <div class="wrapper">
      <nav>
        <Navbar />
        <HomeView />
        <AboutView />
        <ExtensaoCiliosView />
        <BrasileiroView />
        <MassagemCorporalView />
        <ContatoView />
      </nav>
    </div>
  </header>

</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AboutView from './views/AboutView.vue';
import BrasileiroView from './views/BrasileiroView.vue';
import ContatoView from './views/ContatoView.vue';
import ExtensaoCiliosView from './views/ExtensaoCiliosView.vue';
import HomeView from './views/HomeView.vue'
import MassagemCorporalView from './views/MassagemCorporalView.vue';
</script>

<style>
</style>
