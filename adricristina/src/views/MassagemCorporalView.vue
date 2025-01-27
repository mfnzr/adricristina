<template>
  <div>
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
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 0 0 96px;
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

.line {
  width: 50%;
  height: 1px;
  border-top: 1px dotted #279DA9;
  align-items: center;
  margin: 200px auto;
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
