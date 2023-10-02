let container = document.getElementsByClassName('container');
let escuro = document.getElementById('Escuro1')
let darkMode = 0
const body = document.body
let imgCenter = document.getElementById('img-center')

escuro.addEventListener('click', function () {
    if (darkMode === 0) {
        body.style.buttons = "#fff";
        body.style.backgroundColor = "#000000";
        escuro.innerText = "Modo Claro";
        imgCenter.src = "Preto Glitch Rua Logotipo.png"
        darkMode = 1;
    } else {
        body.style.buttons = "#000000";
        body.style.backgroundColor = "#fff";
        escuro.innerText = "Modo Escuro";
        imgCenter.src = "logo-og.png"
        darkMode = 0;
    }
});

// PopUp - Config e QrCode 
const QrCode1Bt = document.getElementById("QrCode1"); // (Pegando Variaveis da DOM)
const QrCodeBt = document.getElementById("QrCode");
const ConfigButton = document.getElementById("Config"); 
const closePopUp = document.getElementById("closePopUp"); 
const configFrame = document.getElementById("configFrame"); 
const configQrCode = document.getElementById("configQrCode");
let configFramePop = 1;
let configQrCodePop = 1;
    
//Função que fechar o popup se o usuario clicar fora do popup

ConfigButton.addEventListener("click", () => { //Função que abre o popUp Configuração
    
    configFrame.style.display = "block";
    closePopUp.style.display = "block";
    //configFramePop = 1;
    
});

function FecharPop() { //Função que fechar os popUps
    configFrame.style.display = "none";
    closePopUp.style.display = "none";
    configQrCode.style.display = "none";
    configFramePop = 0;
    configQrCodePop = 0;
};

function Qrcode() { //Função que abre o popUp do QrCode 
    configQrCode.style.display = "block";
    closePopUp.style.display = "block";
    //configQrCodePop = 1;
}

function FecharVazio() {
    if (configQrCodePop == 1 || configFramePop == 1) {
        FecharPop();
    }
    else if (configQrCodePop == 0 || configFramePop == 0) {
        console.log("Alteração não feita - Fluxo Errado");
        configFramePop = 1;
        configQrCodePop = 1;
    }  
    else {
        console.log("Fluxo Encerrado");
    }
}

/*
document.addEventListener('DOMContentLoaded', function() {
    function verificarPopUps() {
        console.log(
            window.getComputedStyle(configFrame).getPropertyValue('display') === "block",
            window.getComputedStyle(configQrCode).getPropertyValue('display') === "block"
        );
        
        
       
    }

    setInterval(verificarPopUps, 1000);
});


document.body.addEventListener('click', function() {
    if (configQrCodePop == 1 || configFramePop == 1) {
    FecharVazio()
});
*/
