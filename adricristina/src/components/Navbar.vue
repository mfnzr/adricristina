<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/adricristinalogo.png" alt="Logo Adriana Cristina extensão de cílios">
      </div>
      <div class="links">
        <RouterLink to="/">Inicio</RouterLink>
        
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
        
        <a href="#contato">Contato</a>
      </div>
    </nav>
  </template>
  
  <style>
  .navbar {
    width: 100vw;
    box-sizing: border-box;
    background-color: #279DA9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 96px;
  }
  
  .links {
    display: flex;
    gap: 50px;
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
  </style>
  
