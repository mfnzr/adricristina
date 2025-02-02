<template>
    <div>
        <div class="container">
            <h1 class="title">Volume Brasileiro</h1>
            <h2 class="subtitle">O queridinho das clientes!</h2>
            <div class="image">
                <img src="../assets/cilios2.png" alt="Foto de Adriana Cristina" />
            </div>
            <p class="text">O modelo mais querido entre as clientes, é o Volume Brasileiro. Nada mais é do que uma
                técnica de embelezamento que visa proporcionar um olhar mais volumoso e definido, sem perder a
                naturalidade. Essa técnica se destaca por sua abordagem sutil e delicada, que realça a beleza dos olhos
                de forma discreta e elegante.</p>
            <br>
            <p class="text">Ao contrário de outras técnicas de volume, como o volume russo, o volume brasileiro utiliza
                fios de espessura mais fina e leves, o que resulta em um olhar mais natural e menos pesado.</p>
            <br>
            <p class="text">O volume brasileiro é ideal para aquelas clientes que desejam um olhar mais expressivo e
                volumoso, mas que preferem um resultado mais discreto e natural. Essa técnica é especialmente adequada
                para o dia a dia, pois proporciona um visual fresco e jovial que complementa qualquer estilo ou ocasião.
            </p>
            <br>
            <br>
            <p class="text">Saiba mais sobre os demais modelos de extensão de cílios clicando&nbsp;<a href="#">
                    aqui</a>.</p>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 10px;
}

h1 {
    font-size: 28px;
    color: #279DA9;
    font-family: "Poppins", serif;
    font-weight: 600;
    text-align: center;
}

h2 {
    font-size: 24px;
    margin-bottom: 15px;
    font-family: "Poppins", serif;
    font-weight: 400;
    color: #292626;
    text-align: center;
}

.text {
    font-size: 20px;
    text-align: justify;
    font-weight: 300;
    font-family: "Poppins", serif;
    color: #292626;
    margin: 0 16px;
}

a {
    color: #279DA9;
    font-size: 20px;
}

.image {
    width: 100%;
    height: 300px; /* Define a altura da imagem */
    overflow: hidden; /* Garante que a imagem não ultrapasse os limites da área */
    margin-bottom: 30px;
    position: relative;
}

.image img {
    width: 100%;
    height: 100%; /* A imagem ocupa 100% da altura definida */
    object-fit: cover; /* A imagem será cortada para cobrir o espaço sem distorcer */
}

@media (min-width: 1024px) {
    .container {
        margin: 150px 96px;
    }

    .text {
        font-size: 20px;
        margin: 0 96px;
    }

    h1 {
        font-size: 36px;
    }

    h2 {
        font-size: 28px;
    }

    .container {
        flex-direction: column;
        align-items: center;
    }

    .image {
        height: 400px; /* Ajuste da altura para telas maiores */
    }
}

@media (max-width: 768px) {
    .container {
        margin: 80px 30px;
        flex-direction: column;
        align-items: center;
    }

    .image {
        margin-bottom: 20px;
        height: 250px; /* Ajuste da altura para telas menores */
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 26px;
    }

    .text {
        font-size: 18px;
        margin: 0 30px;
    }
}

@media (max-width: 480px) {
    .container {
        margin: 40px 10px;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 22px;
    }

    .text {
        font-size: 16px;
        margin: 0 10px;
    }

    .image {
        height: 200px; /* Ajuste da altura para telas muito pequenas */
    }
}
</style>
