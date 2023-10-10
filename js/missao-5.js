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

function avancar() {
    alert("Clique 'Ok' quando terminar")
    //atualizar pontuação do jogador e missão concluída
    let jogador = JSON.parse(localStorage.getItem(user))
    jogador.pontuacao += 1
    jogador.missoes[4].status_missao = "completo"
    if (jogador.missoes[5].status_missao != "completo") {
        jogador.missoes[5].status_missao = "pendente"
    }
    localStorage.setItem(user, JSON.stringify(jogador))

    //destruir sessão
    setTimeout(() => {
        sessionStorage.removeItem("missaoQuatro")
    }, 750);

    setTimeout(
        () => { window.location = `/pages/missao-concluida.html?userName=${user}` }
        , 750)
}