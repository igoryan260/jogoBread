/*processo de formatação da url da página para pegar as variaveis
utilizando o método "get".*/
let url = window.location.href
let userName = url.substring(url.indexOf("?") + 1, url.length)
let user = userName.substring(userName.indexOf("=") + 1, userName.length)
let usuarioLocalizado = sessionStorage.getItem(user)
let informacoesRecuperadas = "";

/*caso não exista sessão criada, automaticamente o usuário será
redirecionado para o index.html*/
if (usuarioLocalizado == null) {
    window.location = "/index.html"
}

/*voltar para a tela <board></board>*/
let btnFecharMissao = document.querySelector("#fecharMissao")
btnFecharMissao.addEventListener("click", () => {
    window.location = `/pages/telaPrincipal.html?userName=${user}`
})

//abrir sessões do jogador
//Sessão para verificar qual pergunta o jogador está e assim animar o progresso
//Após cada pergunta, atuaizar a pontuação, e de acordo com a pontuação será definido para onde o jogador deverá ser redirecionado

//abrirSessoes()
//function abrirSessoes() {
//}

function fecharOverlay() {
    sessionStorage.removeItem("overlayActive")
    document.querySelector("#overlay").style.display = "none"
}

function abrirSurpresa() {
    document.querySelector("#video-surpresa").classList.replace("none", "flex")
}