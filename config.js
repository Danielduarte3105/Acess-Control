const body = document.body;
var sobreApp = document.getElementById('SobreApp')
var sobreDev = document.getElementById('SobreDev')
var supportbt = document.getElementById('supportbt')
var sobreColors = document.getElementById('sobreColors')
var icon = document.getElementById('icon')
let darkMode = 0 // 0 = modo claro

document.getElementById('colorsDiv').addEventListener('click', function() {
    sobreColors.addEventListener('click', function cores () {
        if (darkMode === 0) {
            body.style.backgroundColor = "#000000";
            sobreColors.innerText = "Modo Claro";
            icon.src = 'sol.png'
            darkMode = 1;
        } else {
            body.style.backgroundColor = "#fff";
            sobreColors.innerText = "Modo Escuro";
            icon.src = 'lua.png'
            darkMode = 0;
        }
    });
    sobreColors.click();
});
    
    SobreApp.addEventListener('click', function () {
        // URL da página que você deseja abrir em um pop-up
        const url = 'about.html';

        const popupWidth = 233;
        const popupHeight = 280;

        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;

        // Configurações para a janela do pop-up
        const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

        // Abre a página em um pop-up
        window.open(url, 'about.html', windowFeatures);
    });

    sobreDev.addEventListener('click', function () {
        // URL da página que você deseja abrir em um pop-up
        const url = 'aboutDev.html';

        const popupWidth = 233;
        const popupHeight = 280;

        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;
        // Configurações para a janela do pop-up
        const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

        // Abre a página em um pop-up
        window.open(url, 'aboutDev.html', windowFeatures);
    });

        
    document.getElementById('supportbt').addEventListener('click', function () {
        // URL da página que você deseja abrir em um pop-up
        const url = 'Suporte.html';

        const popupWidth = 233;
        const popupHeight = 5;

        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;
        // Configurações para a janela do pop-up
        const windowFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

        // Abre a página em um pop-up
        window.open(url, 'Suporte.html', windowFeatures);
    });

    
    // Botão Sobre APP
    document.getElementById('aboutDiv').addEventListener('click', function() {
        sobreApp.click();
    });

    // Botão Sobre Desenvolvedores
    document.getElementById('aboutDevDiv').addEventListener('click', function() {
        sobreDev.click();
    });

    // Botão Suporte
    document.getElementById('supportDiv').addEventListener('click', function() {
        supportbt.click();
    });
    