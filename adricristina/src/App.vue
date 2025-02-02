<template>
  <header>
    <div class="wrapper">
      <nav>
        <Navbar />
      </nav>
      <header>
      <HomeView />
    </header>
      <main>
        <AboutView />
        <Line />
        <ExtensaoCiliosView />
        <Line />
        <BrasileiroView />
        <Line />
        <MassagemCorporalView />
        <Line />
        <ContatoView />
        <ComentariosView />
      </main>
    </div>
  </header>

</template>

<script setup>
import Line from './components/Line.vue';
import Navbar from './components/Navbar.vue'
import AboutView from './views/AboutView.vue';
import BrasileiroView from './views/BrasileiroView.vue';
import ComentariosView from './views/ComentariosView.vue';
import ContatoView from './views/ContatoView.vue';
import ExtensaoCiliosView from './views/ExtensaoCiliosView.vue';
import HomeView from './views/HomeView.vue'
import MassagemCorporalView from './views/MassagemCorporalView.vue';
</script>

<style>
</style>
