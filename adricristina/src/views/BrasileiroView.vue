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
    margin: 200px 0 0 96px;
}

h1 {
    font-size: 28px;
    color: #279DA9;
    font-family: "Poppins", serif;
    font-weight: 600;
}

h2 {
    font-size: 24px;
    margin-bottom: 15px;
    font-family: "Poppins", serif;
    font-weight: 400;
    color: #292626;
}

.text {
    font-size: 20px;
    text-align: center;
    text-indent: 40px;
    margin-left: 40px;
    font-weight: 300;
    font-family: "Poppins", serif;
    margin: 0 96px 0 96px;
    color: #292626;

}

a {
    color: #279DA9;
    font-size: 20px;
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