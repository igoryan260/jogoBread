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

function fecharOverlay() {
    sessionStorage.removeItem("overlayActive")
    document.querySelector("#overlay").style.display = "none"
}

function abrirSurpresa() {
    let pontuacaoUsuario = JSON.parse(localStorage.getItem(user)).pontuacao
    if (pontuacaoUsuario < 15) {
        alert("Você precisa atingir no mínimo 15 pontos para abrir a surpresa.")
    } else {
        document.querySelector("#video-surpresa").classList.replace("none", "flex")
    }
}

function fecharVideoSurpresa() {
    //Atualizar status da missão
    let jogador = JSON.parse(localStorage.getItem(user))
    jogador.missoes[6].status_missao = "completo"
    localStorage.setItem(user, JSON.stringify(jogador))

    alert("Parabéns por ter completado o Bread Gaming, até logo!!!")
    document.querySelector("#video-surpresa").classList.replace("flex", "none")
    setTimeout(() => {
        sessionStorage.removeItem(user)
        window.location.reload()
    }, 750);
}