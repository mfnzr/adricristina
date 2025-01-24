<template>
        <nav class="navbar">
            <div class="logo">
                <img src="../assets/adricristinalogo.png" alt="Logo Adriana Cristina extensão de cílios">
            </div>
            <div class="links">
                <a href="#inicio">Inicio</a>
                <a href="#extensao-de-cilios">Extensão de cílios</a>
                <a href="#massagem-corporal">Massagem corporal</a>
                <a href="#contato">Contato</a>  
            </div>
        </nav>
</template>

<style>

.navbar {
    width: 100vw; /* 100% da largura da janela */
    box-sizing: border-box; /* Inclui padding na largura total */
    background-color: #279DA9;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    width: 100%;
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
    font-weight: bold;
    transition: 0.5s;

}

.logo img {
    max-height: 100px;
    padding: 25px 0 25px 0;
}
</style>
