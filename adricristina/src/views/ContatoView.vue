<template>
    <div class="container">
        <div class="contact">
            <h1>Entre em contato e agende seu horário</h1>
            <div class="content">
                <img src="../assets/whatsapp-icon.png" alt="Ícone do WhatsApp" class="icon" />
                <p>+55 (42)99999-9999</p>
            </div>
            <div class="content">
                <img src="../assets/email-icon.png" alt="Ícone de email" class="icon" />
                <p>adricristinacilios@gmail.com</p>
            </div>
        </div>
        <div class="contact">
            <h1>Acompanhe as redes sociais</h1>
            <div class="content">
                <img src="../assets/instagram-icon.png" alt="Ícone do Instagram" class="icon" />
                <p>@adricristina.cilios</p>
            </div>
            <div class="content">
                <img src="../assets/facebook-icon.png" alt="Ícone do Facebook" class="icon" />
                <p>facebook.com/AdriCristinaCilios</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: white;
    font-family: "Poppins", serif;
    padding: 60px;
    margin: 0 100px;
    flex-wrap: wrap; /* Permite a quebra de linha em telas pequenas */
}

.contact {
    flex: 1;
    margin: 0 40px;
    background-color: #279DA9;
    border-radius: 25px;
    padding: 60px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    min-width: 300px; /* Define uma largura mínima para cada bloco */
    margin-bottom: 20px; /* Espaço entre os blocos em telas pequenas */
}

.content {
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.icon {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    vertical-align: middle;
}

h1 {
    font-weight: 300;
}

p {
    font-weight: 200;
}

/* Estilos para telas menores */
@media (max-width: 1024px) {
    .container {
        flex-direction: column; /* Empilha as seções em telas menores */
        padding: 40px 20px; /* Ajusta o padding para telas pequenas */
        margin: 0 20px; /* Ajusta a margem lateral */
    }

    .contact {
        margin: 20px 0; /* Ajusta o espaço entre as caixas de contato */
        padding: 40px; /* Ajusta o padding para telas pequenas */
    }

    h1 {
        font-size: 24px; /* Ajusta o tamanho do título */
        text-align: center; /* Centraliza o título */
    }

    p {
        font-size: 18px; /* Ajusta o tamanho do texto */
        text-align: center; /* Centraliza o texto */
    }
}

/* Estilos para telas muito pequenas (como celulares em modo retrato) */
@media (max-width: 480px) {
    .icon {
        width: 25px; /* Diminui o tamanho do ícone */
        height: 25px; /* Diminui o tamanho do ícone */
    }

    h1 {
        font-size: 20px; /* Reduz o tamanho do título em telas muito pequenas */
    }

    p {
        font-size: 16px; /* Reduz o tamanho do texto em telas muito pequenas */
    }
}

</style>
