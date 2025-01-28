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
    margin: 0 100px
}

.contact {
    flex: 1;
    margin: 0 40px; 
    background-color: #279DA9; 
    border-radius: 25px; 
    padding: 60px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
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
</style>
