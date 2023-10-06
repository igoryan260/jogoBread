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

/*=================================================================
===================================================================*/
lendoInformaçoes()
function lendoInformaçoes() {
    informacoesRecuperadas = JSON.parse(localStorage.getItem(user))
    carregarMissoes(informacoesRecuperadas)
}
console.log(informacoesRecuperadas)


let btnVoltar = document.querySelector("#voltar")
btnVoltar.addEventListener("click", () => {
    window.location = `/pages/apresentacao.html?userName=${user}`
})

function carregarMissoes(informacoesRecuperadas) {
    informacoesRecuperadas.missoes.forEach(missao => {

        //definindo o titulo no modal
        let tituloMissao = document.querySelector("#modal-missao-" + missao.numero_missao)
        tituloMissao.innerHTML = missao.nome_missao

        let btnIniciar = document.createElement("button")
        btnIniciar.id = "missao-" + missao.numero_missao + "-iniciar"
        btnIniciar.addEventListener("click", () => { iniciarMissao(missao.numero_missao) })
        btnIniciar.innerHTML = "Iniciar"

        tituloMissao.appendChild(btnIniciar)

        //configurando missões para poder iniciá-la ou não
        if (missao.status_missao == "incompleto" && missao.numero_missao == 1 || missao.status_missao == "pendente") {

            let btnMissao = document.querySelector("#missao-" + missao.numero_missao)
            btnMissao.addEventListener("click", () => { modalMissionOpen(missao.numero_missao) })

            let imgMissao = document.querySelector("#img-missao-" + missao.numero_missao)
            imgMissao.src = "../icons/icon-missao-small-black-white.png"

        } else if (missao.status_missao == "incompleto" && missao.numero_missao != 1) {
            //condição para não iniciar a missao e o ícone que aparecerá no board de missões
            let btnMissao = document.querySelector("#missao-" + missao.numero_missao)
            btnMissao.addEventListener("click", () => { alert("Complete a missão anterior") })

            let imgMissao = document.querySelector("#img-missao-" + missao.numero_missao)
            imgMissao.src = "../icons/icon-missao-small-black-white.png"
        }
        else if (missao.status_missao == "completo") {
            //condição para poder iniciar missão
            let btnMissao = document.querySelector("#missao-" + missao.numero_missao)
            document.getElementById("img-missao-" + missao.numero_missao).src = "../icons/icon-missao-small.png"
            btnMissao.addEventListener("click", () => { modalMissionOpen(missao.numero_missao) })
        }
    });
}

/*mostrar pontuação do jogador*/
let pontuacao = JSON.parse(localStorage.getItem(user)).pontuacao
document.querySelector("#pontuacao").innerHTML = "Pontuação: " + pontuacao

/*função de abrir modal da mossa para detalhar o que será pedido */
function modalMissionOpen(mission) {
    let elemento = document.querySelector(`#modal-missao-${mission}`)
    if (elemento.className == "none") {
        elemento.className = ""
    } else {
        elemento.className = "none"
    }
}

/*IniciarMissão*/
function iniciarMissao(mission) {
    window.location = `/pages/missao-${mission}.html?userName=${user}`
}
