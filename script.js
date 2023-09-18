let container = document.getElementsByClassName('container');

document.getElementById('QrCode').addEventListener('click', function () {
// URL da página que você deseja abrir em um pop-up
const url = 'QrCode.html';

const popupWidth = 175;
const popupHeight = 310;

const left = (window.innerWidth - popupWidth) / 2;
const top = (window.innerHeight - popupHeight) / 2;

// Configurações para a janela do pop-up
const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

// Abre a página em um pop-up
window.open(url, 'QrCode.html', windowFeatures);
});

document.getElementById('QrCode1').addEventListener('click', function () {
// URL da página que você deseja abrir em um pop-up
const url = 'QrCode.html';

const popupWidth = 175;
const popupHeight = 310;

const left = (window.innerWidth - popupWidth) / 2;
const top = (window.innerHeight - popupHeight) / 2;

// Configurações para a janela do pop-up
const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

// Abre a página em um pop-up
window.open(url, 'QrCode.html', windowFeatures);
});

    document.getElementById('Config').addEventListener('click', function () {
// URL da página que você deseja abrir em um pop-up
const url = 'config.html';

const popupWidth = 310;
const popupHeight = 320;

const left = (window.innerWidth - popupWidth) / 2;
const top = (window.innerHeight - popupHeight) / 2;

// Configurações para a janela do pop-up
const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

// Abre a página em um pop-up
window.open(url, 'config.html', windowFeatures);
});

/*document.getElementById('Config1').addEventListener('click', function () {
// URL da página que você deseja abrir em um pop-up
const url = 'config.html';

const popupWidth = 310;
const popupHeight = 320;

const left = (window.innerWidth - popupWidth) / 2;
const top = (window.innerHeight - popupHeight) / 2;

// Configurações para a janela do pop-up
const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

// Abre a página em um pop-up
window.open(url, 'config.html', windowFeatures);
});
*/

let escuro = document.getElementById('Escuro1')
let darkMode = 0
const body = document.body
let imgCenter = document.getElementById('img-center')

escuro.addEventListener('click', function () {
    if (darkMode === 0) {
        body.style.backgroundColor = "#000000";
        escuro.innerText = "Modo Claro";
        imgCenter.src = "Preto Glitch Rua Logotipo.png"
        //icon.src = 'sol.png'
        darkMode = 1;
    } else {
        body.style.backgroundColor = "#fff";
        escuro.innerText = "Modo Escuro";
        imgCenter.src = "logo-og.png"
        //icon.src = 'lua.png'
        darkMode = 0;
    }
});
