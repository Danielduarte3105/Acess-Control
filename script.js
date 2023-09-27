let container = document.getElementsByClassName('container');
let escuro = document.getElementById('Escuro1')
let darkMode = 0
const body = document.body
let imgCenter = document.getElementById('img-center')

escuro.addEventListener('click', function () {
    if (darkMode === 0) {
        body.style.backgroundColor = "#000000";
        escuro.innerText = "Modo Claro";
        imgCenter.src = "Preto Glitch Rua Logotipo.png"
        darkMode = 1;
    } else {
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

ConfigButton.addEventListener("click", () => { //Função que abre o popUp Configuração
    configFrame.style.display = "block";
    closePopUp.style.display = "block";
});

closePopUp.addEventListener("click", () => { //Função que fechar os popUps
    configFrame.style.display = "none";
    closePopUp.style.display = "none";
    configQrCode.style.display = "none";
});

function Qrcode() { //Função que abre o popUp do QrCode 
    configQrCode.style.display = "block";
    closePopUp.style.display = "block";
}
