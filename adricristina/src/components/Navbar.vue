<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false); // Variável para controlar a visibilidade do menu

// Função para fechar o menu ao clicar fora
const closeMenu = (event: MouseEvent) => {
  const menu = document.querySelector('.links');
  if (menu && !menu.contains(event.target as Node)) {
    isMenuOpen.value = false;
  }
};

// Adicionando o evento de clique fora do menu quando o componente for montado
onMounted(() => {
  document.addEventListener('click', closeMenu);
});

// Removendo o evento ao desmontar o componente
onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
});
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/adricristinalogo.png" alt="Logo Adriana Cristina extensão de cílios" />
    </div>
    <div class="menu-icon" @click="isMenuOpen = !isMenuOpen">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div :class="['links', { 'open': isMenuOpen }]">
      <RouterLink to="/" @click="isMenuOpen = false">Inicio</RouterLink>
      
      <div class="dropdown">
        <a href="#extensao-de-cilios" class="dropdown-toggle">Extensão de cílios</a>
        <div class="dropdown-menu">
          <a href="/pagina-classica-cilios">Fio a fio</a>
          <a href="/pagina-volume-brasileiro">Volume Brasileiro</a>
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
      
      <a href="#contato" @click="isMenuOpen = false">Contato</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100vw;
  box-sizing: border-box;
  background-color: #279DA9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative; /* Garantir que o menu lateral tenha a referência da navbar */
}

.links {
  display: flex;
  gap: 50px;
  transition: transform 0.3s ease-in-out;
}

a {
  text-decoration: none;
  color: #F1F1F1;
  font-family: "inter", serif;
  font-size: 16px;
  transition: color 0.3s ease;
}

a:hover {
  color: #ffffff;
  transition: 0.3s;
  text-decoration: underline;
  font-size: 16.5px;
}

.logo img {
  max-height: 100px;
  padding: 25px 0;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
}

.dropdown-menu a {
  display: block;
  padding: 8px 12px;
  color: #279DA9;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.dropdown-menu a:hover {
  background-color: #f1f1f1;
  color: #000;
  transition: 0.3s;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/* Menu Hambúrguer */
.menu-icon {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 4px;
  background-color: #fff;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .links {
    position: absolute;
    top: 0;
    right: -250px; /* Menu completamente escondido à direita */
    width: 250px;
    height: 100vh;
    background-color: #279DA9;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
    transition: right 0.3s ease-in-out;
  }

  .links.open {
    right: 0; /* Menu aberto a partir da direita */
  }

  .menu-icon {
    display: flex;
  }

  .dropdown-menu {
    position: relative;
  }

  .dropdown {
    width: 100%;
  }

  .logo img {
    max-height: 60px;
    padding: 10px 0;
  }
}
</style>
