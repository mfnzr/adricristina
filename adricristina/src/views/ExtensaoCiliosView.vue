<template>
  <div>
    <div class="container">
      <div class="image">
        <img src="../assets/cilios1.png" alt="Foto de Adriana Cristina" />
      </div>
      <div class="content">
        <h1 class="title">Extensão de cílios</h1>
        <p class="text">Mais do que apenas uma técnica de beleza, o alongamento de cílios se tornou um catalisador para
          uma mudança interna e externa, especialmente para as mulheres.</p>
        <br>
        <p class="text"> A autoestima é uma faceta vital da identidade de uma mulher. Quando se sentem bem consigo
          mesmas, as mulheres irradiam confiança em todas as áreas de suas vidas. O alongamento de cílios não é apenas
          sobre aprimorar a aparência exterior; é sobre nutrir um senso de autoaceitação e amor-próprio. Ao olhar no
          espelho e ver um olhar radiante e sedutor, uma mulher não apenas se sente bonita, mas também fortalecida e
          pronta para conquistar o mundo.</p>
      </div>
    </div>
    <div>
      <p class="text"> Entretanto, a execução correta do alongamento de cílios é crucial para garantir resultados
        deslumbrantes e seguros. É aqui que entra a importância de ser feito por uma profissional especializada. Uma
        técnica precisa, habilidosa e segura é essencial para evitar danos aos cílios naturais e garantir um resultado
        que atenda às expectativas da cliente.
        Além disso, a segurança é uma prioridade. Uma profissional qualificada utiliza produtos de alta qualidade e
        segue protocolos de higiene rigorosos para proteger a saúde e a integridade dos cílios naturais. Isso
        proporciona às clientes a tranquilidade de saber que estão em boas mãos e que seu bem-estar é uma prioridade.
        Portanto, o alongamento de cílios quando realizado por uma profissional especializada, não é apenas um serviço
        de beleza, mas uma jornada de transformação que eleva a autoestima e celebra a beleza individual de cada mulher.
      </p>
    </div>
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

.image {
  margin-bottom: 45px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>