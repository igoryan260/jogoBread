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

//destruir sessões da primeira missão
if (sessionStorage.getItem("missaoUm")) {
    sessionStorage.removeItem("missaoUm")
}
if (sessionStorage.getItem("indicesPerguntas")) {
    sessionStorage.removeItem("indicesPerguntas")
}

/*voltar para a tela <board></board>*/
let btnMissoes = document.querySelector("#missoes")
btnMissoes.addEventListener("click", () => {
    window.location = `/pages/telaPrincipal.html?userName=${user}`
})

//fazer logout
let btnSair = document.querySelector("#sair")
btnSair.addEventListener("click", () => {
    sessionStorage.removeItem(user)
    window.location.reload()
})
