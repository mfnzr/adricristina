<template>
    <div id="contato" class="container">
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
    justify-content: space-between;
    color: white;
    font-family: "Poppins", serif;
    padding: 60px 20px;
    margin: 0 20px;
    flex-wrap: wrap;
    gap: 20px;
}

.contact {
    flex: 1;
    background-color: #279DA9;
    border-radius: 25px;
    padding: 60px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    min-width: 300px;
    text-align: center;
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


@media (max-width: 1024px) {
    .container {
        flex-direction: column;
        padding: 40px 20px;
    }

    .contact {
        width: calc(100% - 40px); 
        padding: 40px;
    }

    h1 {
        font-size: 24px; 
        text-align: center;
    }

    p {
        font-size: 18px; 
        text-align: center; 
    }
    
    body {
    overflow-x: hidden;
}
}

@media (max-width: 480px) {
    .container {
        width: 100%;
    }
    .icon {
        width: 25px; 
        height: 25px;
    }

    h1 {
        font-size: 20px; 
    }

    p {
        font-size: 16px; 
    }
}

</style>
