<template>
  <div id="about">
    <div class="about">
      <div class="content">
        <h1 class="title">Quem sou eu?</h1>
        <p class="text">Olá! Me chamo Adriana Cristina, atuo no ramo da estética e massagem corporal na cidade de
          Guarapuava/PR. Me especializei em alongamento de cílios em 2018, me apaixonei pela área e desde então essa
          passou a ser minha profissão, conquistando clientes fiéis aqui na minha cidade. Busco não apenas proporcionar
          às minhas clientes cílios deslumbrantes, mas também realçar a beleza delas e lhes proporcionar uma autoestima
          incrível.</p>
        <br>
        <p class="text"> Em 2023 descobri a massagem corporal e como essa técnica pode beneficiar a saúde através do
          relaxamento. Hoje além do alongamento de cílios também trabalho como massagista, buscando proporcionar às
          minhas clientes o alívio da tensão do dia-a-dia com uma massagem relaxante com preços acessíveis.</p>
      </div>
      <div class="image">
        <img src="../assets/adri.png" alt="Foto de Adriana Cristina" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", serif;
  margin: 70px 96px 0 96px;
  flex-direction: row; 
}

h1 {
  font-size: 28px;
  color: #279DA9;
  text-indent: 40px;
  margin-bottom: 15px;
  font-weight: 600;
}

p {
  font-size: 20px;
  text-align: justify;
  text-indent: 40px;
  margin-right: 40px;
  font-weight: 300;
  color: #292626;
}


@media (max-width: 768px) {
  .about {
    flex-direction: column; 
    margin: 20px 20px;
  }

  .content {
    text-align: center;
    margin-bottom: 20px;
  }

  .image {
    width: 100%;
    text-align: center;
  }

  .image img {
    width: 80%;
    max-width: 400px; 
    height: auto;
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 18px; 
    text-indent: 0; 
    margin-right: 0;
    margin-left: 0; 
  }
}


@media (max-width: 480px) {
  .about {
    margin: 20px 10px; 
  }

  .image img {
    width: 90%;
  }

  h1 {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
}
</style>
