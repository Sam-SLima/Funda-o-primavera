const botao = document.getElementById('menuHamburguer')
const menu = document.getElementById('menuLateral');

botao.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral_ativado')
})

const botaoPesquisar = document.getElementById('pesquisar');
const barraPesquisa = document.getElementById('pesquisaItem');

botaoPesquisar.addEventListener('click', () => {
    alert("botao em manutenção :)")
})

const botaoLike = document.getElementById('botaoGostei');

var imagemAtual = "img/botao-gostei.png"
var imagemSeguinte = "img/botao-gostei_preenchido.png"

botaoLike.addEventListener('click', () => {
    var reserva = imagemAtual;
    imagemAtual = imagemSeguinte;
    imagemAtual = reserva;
})


