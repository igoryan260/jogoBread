/*processo de formatação da url da página para pegar as variaveis
utilizando o método "get".*/
let url = window.location.href
let userName = url.substring(url.indexOf("?") + 1, url.length)
let user = userName.substring(userName.indexOf("=") + 1, userName.length)
let usuarioLocalizado = sessionStorage.getItem(user)

/*caso não exista sessão criada, automaticamente o usuário será
redirecionado para o index.html*/
if (usuarioLocalizado == null) {
    window.location = "/index.html"
}

document.querySelector("#saudacoes").innerHTML =
    `Bem vindo, ${usuarioLocalizado} ao Bread Gaming 
    feito especialmente para um casal muito especial`

document.querySelector("#sair").addEventListener("click", () => {
    sessionStorage.removeItem(user)
    window.location.reload()
})
/*=============================================================*/

let iniciar = document.querySelector("#btnIniciar")

iniciar.addEventListener("click", () => {
    window.location = `telaPrincipal.html?userName=${user}`
})