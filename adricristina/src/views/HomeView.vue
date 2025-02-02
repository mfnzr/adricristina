<template>
  <div id="home" class="carousel-container">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <div class="slide-content">
          <!-- Colocando o texto fora da imagem -->
          <div class="text-overlay">
            <h1 class="slide-title"> {{ image.title1 }}</h1>
            <h1 class="slide-title"> {{ image.title2 }}</h1>
            <p class="slide-subtitle"> {{ image.subtitle }}</p>
          </div>
          <!-- A imagem abaixo do texto -->
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
  margin-top: 50px;
  margin-bottom: -50px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: "Poppins", serif;
  position: relative;
  object-fit: cover;
}

.text-overlay {
  text-align: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
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
  margin-top: 10px;
}

.slide-content img {
  width: 100%;
  height: auto;
  object-fit: cover; 
  border-radius: 20px;
}

@media (max-width: 1024px) {
  .text-overlay {
    padding-top: 30px;
  }

  .slide-title {
    font-size: 28px;
  }

  .slide-subtitle {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .text-overlay {
    padding-top: 40px;
  }

  .slide-title {
    font-size: 24px;
  }

  .slide-subtitle {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .text-overlay {
    padding-top: 50px;
  }

  .slide-title {
    font-size: 22px;
  }

  .slide-subtitle {
    font-size: 14px;
  }
}
</style>
