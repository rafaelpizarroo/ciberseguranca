let corpo = document.body;
let navegacao = document.getElementById('navegacao');
let estudantes = document.getElementById('estudantes')

document.getElementById('TemaClaroEscuroBtn').addEventListener('click', () => {
    corpo.classList.toggle('white')
    corpo.classList.toggle('dark')
    navegacao.classList.toggle('navwhite')
    navegacao.classList.toggle('navdark')
    estudantes.classList.toggle('white')
    estudantes.classList.toggle('dark')
})

document.getElementById('acessibilidadeBtn').addEventListener('click', () => {
    corpo.classList.toggle('acessibilidade');
}); 
