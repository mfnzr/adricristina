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
  flex-direction: row; /* Para telas grandes, a imagem e o texto ficam lado a lado */
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

/* Responsividade para telas pequenas */
@media (max-width: 768px) {
  .about {
    flex-direction: column; /* Em telas pequenas, o layout muda para coluna */
    margin: 20px 20px; /* Ajuste da margem para dispositivos móveis */
  }

  .content {
    text-align: center; /* Para centralizar o texto em telas pequenas */
    margin-bottom: 20px; /* Espaço entre o texto e a imagem */
  }

  .image {
    width: 100%;
    text-align: center;
  }

  .image img {
    width: 80%; /* Ajusta a largura da imagem para 80% em telas pequenas */
    max-width: 400px; /* Impede que a imagem ultrapasse um tamanho máximo */
    height: auto; /* Mantém a proporção da imagem */
  }

  h1 {
    font-size: 24px; /* Reduz o tamanho do título em telas pequenas */
  }

  p {
    font-size: 18px; /* Reduz o tamanho da fonte do texto em telas pequenas */
    text-indent: 0; /* Remove o recuo do parágrafo em telas pequenas */
    margin-right: 0;
    margin-left: 0; /* Remove a margem lateral */
  }
}

/* Responsividade para telas muito pequenas */
@media (max-width: 480px) {
  .about {
    margin: 20px 10px; /* Margem ainda mais ajustada */
  }

  .image img {
    width: 90%; /* Ajusta a largura da imagem para 90% em telas muito pequenas */
  }

  h1 {
    font-size: 22px; /* Tamanho de fonte ainda menor para telas muito pequenas */
  }

  p {
    font-size: 16px; /* Tamanho de fonte ainda menor para telas muito pequenas */
  }
}
</style>
