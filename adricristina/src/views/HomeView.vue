<template>
  <div class="carousel-container">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <div class="slide-content">
          <div class="text-overlay">
            <h1 class="slide-title"> {{ image.title1 }}</h1>
            <h1 class="slide-title"> {{ image.title2 }}</h1>
            <p class="slide-subtitle"> {{ image.subtitle }}</p>
          </div>
          <img :src="image.url" alt="image" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const images = [
  {
    id: 1,
    url: '/img/slide1.png',
    title1: "Cílios volumosos e naturais?",
    title2: " Temos a técnica perfeita para você!",
    subtitle: "Experimente a magia dos cílios volumosos! Com a técnica de volume brasileiro, seus cílios ficarão mais longos, volumosos e curvados."
  },
  {
    id: 2,
    url: '/img/slide2.png',
    title1: "Energia renovada e bem-estar?",
    title2: "Descubra a massagem ideal para você!",
    subtitle: "Conheça a técnica perfeita para você se conectar com o seu corpo e mente. Experimente uma massagem personalizada e sinta a diferença!"
  },
];

const config = {
  height: 500,
  width: '100%',
  itemsToShow: 1,
  gap: 5,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  margin-top: 100px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%; /* Ajuste a altura do carrossel para 100% da altura disponível */
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Poppins", serif;
}

.text-overlay {
  text-align: center;
  position: absolute; /* Coloca o texto sobre a imagem */
  top: 96px; /* Ajuste a posição do texto acima da imagem */
  width: 65%; /* Garante que o texto ocupe toda a largura do slide */
}

.slide-title {
  font-size: 36px;
  color: #279DA9;
  margin: 0;
  padding: 0 20px;
}

.slide-subtitle {
  font-size: 20px;
  color: #292626;
}

.slide-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
}
</style>
