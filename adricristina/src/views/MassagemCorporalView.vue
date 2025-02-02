<template>
  <div id="massagem-corporal">
    <div class="container">
      <div class="image">
        <img src="../assets/massagem.png" alt="Foto de Adriana Cristina" />
      </div>
      <div class="content">
        <h1 class="title">Massagem corporal</h1>
        <p class="text"> A massagem corporal é uma técnica milenar que consiste na manipulação dos tecidos moles do
          corpo, como músculos, tendões e ligamentos. Através de movimentos precisos e ritmados, o profissional de
          massagem aplica pressão sobre o corpo, proporcionando diversos benefícios para a saúde física e mental.</p>
        <br>
        <p class="text"> Durante uma sessão de massagem, o profissional utiliza diferentes técnicas, como amassamento,
          fricção, deslizamento e percussão, para trabalhar os músculos e tecidos do corpo. A duração da sessão pode
          variar de acordo com o tipo de massagem e as necessidades do cliente.</p>
      </div>
    </div>
    <div>
      <h1 class="title">Conheça alguns benefícios da massagem corporal:</h1>
      <ul class="text">
        <li>Relaxamento profundo: Alivia tensões musculares e promove uma sensação de bem-estar geral.</li>
        <li>Alívio de dores: Ajuda a aliviar dores musculares, articulares e de cabeça.</li>
        <li>Melhora da circulação: Estimula a circulação sanguínea e linfática, auxiliando na eliminação de toxinas.
        </li>
        <li>Redução do estresse: Diminui os níveis de cortisol, o hormônio do estresse, promovendo calma e
          tranquilidade.</li>
        <li>Melhora da qualidade do sono: Auxilia no tratamento da insônia e promove um sono mais reparador.</li>
        <li>Fortalecimento do sistema imunológico: Estimula o sistema imunológico, aumentando a resistência a doenças.
        </li>
        <li>Melhora da flexibilidade: Aumenta a flexibilidade muscular e articular.</li>
      </ul>
    </div>
    <div>
      <p class="more">Saiba mais sobre os demais tipos de massagem corporal clicando&nbsp;<a href="#">aqui</a>.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 0 0 96px;
  flex-direction: row; /* Lado a lado para telas grandes */
}

h1 {
  font-size: 28px;
  color: #279DA9;
  text-indent: 100px;
  margin-bottom: 15px;
  font-family: "Poppins", serif;
  font-weight: 600;
}

.text {
  font-size: 20px;
  text-align: justify;
  text-indent: 40px;
  font-weight: 300;
  font-family: "Poppins", serif;
  margin: 0 96px 0 96px;
  color: #292626;
}

li {
  list-style-position: inside;
  list-style: none;
  margin-left: -10px;
  position: relative;
}

li::before {
  content: "•";
  font-size: 0.8em;
  color: #292626;
  position: absolute;
  left: -20px;
  top: 0.2em;
}

.image {
  margin-bottom: 45px;
}

.more {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  font-family: "Poppins", serif;
  color: #292626;
  margin-top: 75px;
}

a {
  color: #279DA9;
  font-size: 20px;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column; /* Em telas menores, a imagem e o texto ficam empilhados */
    margin: 50px 20px; /* Ajuste da margem para dispositivos móveis */
  }

  .image img {
    width: 100%; /* A imagem ocupa 100% da largura da tela */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: cover; /* A imagem é ajustada sem distorções */
  }

  h1 {
    font-size: 24px; /* Ajusta o tamanho do título em telas menores */
    text-indent: 0; /* Remove o recuo no título em telas pequenas */
    text-align: center; /* Centraliza o título em telas pequenas */
  }

  .text {
    font-size: 18px; /* Ajusta o tamanho do texto para telas menores */
    margin: 0 20px; /* Ajuste nas margens laterais */
    text-indent: 0; /* Remove o recuo do parágrafo */
  }

  .more {
    font-size: 18px; /* Ajusta o tamanho do texto do link */
  }

  li::before {
    left: -10px; /* Ajuste na posição dos bullets nas listas */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px; /* Reduz o tamanho do título em telas muito pequenas */
  }

  .text {
    font-size: 16px; /* Reduz o tamanho do texto ainda mais */
  }

  .more {
    font-size: 16px; /* Ajusta o tamanho do link para telas muito pequenas */
  }
}

</style>
