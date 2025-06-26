let corpo = document.body;
let navegacao = document.getElementById('navegacao');

document.getElementById('TemaClaroEscuroBtn').addEventListener('click', () => {
    corpo.classList.toggle('white')
    corpo.classList.toggle('dark')
    navegacao.classList.toggle('navwhite')
    navegacao.classList.toggle('navdark')
})

document.getElementById('acessibilidadeBtn').addEventListener('click', () => {
    corpo.classList.toggle('acessibilidade');
});
