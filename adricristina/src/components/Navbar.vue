<template>
  <nav class="navbar">
    <div class="logo">
      <a href="#home"><img src="../assets/adricristinalogo.png" alt="Logo Adriana Cristina extensão de cílios" /></a>
    </div>
    <div class="nav-links">
    <a href="#about">Inicio</a>
    <div class="dropdown">
      <a href="#extensao-de-cilios" class="dropdown-toggle">Extensão de cílios</a>
      <div class="dropdown-menu">
        <a href="/pagina-classica-cilios">Fio a fio</a>
        <a href="#Brasileiro">Volume Brasileiro</a>
        <a href="/pagina-volume-russo">Volume Russo</a>
      </div>
    </div>

    <div class="dropdown">
      <a href="#massagem-corporal" class="dropdown-toggle">Massagem corporal</a>
      <div class="dropdown-menu">
        <a href="/pagina-relaxante">Relaxante</a>
        <a href="/pagina-terapeutica">Terapêutica</a>
        <a href="/pagina-drenagem-linfatica">Drenagem Linfática</a>
      </div>
    </div>
    <a href="#contato">Contato</a>
  </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.navbar {
  width: 100vw;
  box-sizing: border-box;
  background-color: #279DA9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  position: relative;
  font-family: "Poppins", serif;
}

.logo img {
  max-width: 100%;
  height: auto;
  max-height: 80px;
  padding: 10px 0;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  color: white;
  text-decoration: none;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #279DA9;
  color: #279DA9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  display: flex;
  flex-direction: column;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #ffffff;
  font-weight: bold;
  transition: 0.5s;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .logo img {
    max-height: 60px;
    align-items: center;
  }
}
</style>