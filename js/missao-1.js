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

abrirSessoes()
function abrirSessoes() {
    //serão 3 perguntas, a primeira sendo no índice "0". Ou seja, quando o numero do indice da pergunta atual for "2", quer dizer que o jogador
    //já passou pela pergunta de número "0" e de número "1", o que significa que ao chegar no índice 2 o progresso será de 100%
    sessionStorage.setItem("missaoUm", 0)
    sessionStorage.setItem("indicesPerguntas", 2)
}

function pergunta(numeroPergunta) {
    if (numeroPergunta == 0) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>O primeiro encontro foi: </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
    <div>
        <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="27/01">27/01</button>
     </div>
     <div>
         <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="30/01">30/01</button>
    </div>
    <div>
        <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="27/02">27/02</button>
    </div>
    `
    } else if (numeroPergunta == 1) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>Como foi o fim do nosso primeiro encontro? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
     <div>
         <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Brigamos">Brigamos</button>
      </div>
      <div>
          <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Eu beijei">Eu beijei</button>
     </div>
     <div>
         <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Você beijou">Voce beijou</button>
     </div>
     `
    } else if (numeroPergunta == 2) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>Qual foi a cor da minha camisa? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Azul">Azul</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Amarela">Amarela</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Branca">Branca</button>
      </div>
      `
    }
}

//carregar cada pergunta da missão
loadingPergunta()
function loadingPergunta() {
    //habilitar button okl
    document.querySelector("#btnOk").className = ""
    /********** */

    document.querySelector("#resposta-selecionada").innerHTML = ""
    let numeroPergunta = sessionStorage.getItem("missaoUm")
    switch (numeroPergunta) {
        case "0": pergunta(0)
            break;
        case "1": pergunta(1)
            break;
        case "2": pergunta(2)
            break;
    }

    //atualizar barra de progresso    
    let totalPerguntas = parseInt(sessionStorage.getItem("indicesPerguntas")) + 1
    let progresso = (100 * numeroPergunta) / totalPerguntas
    document.querySelector("#progresso").style.width = progresso + "%";
}

function respostaEscolhida(resposta) {
    let respostaSelecionada = document.querySelector(`#${resposta}`)
    document.querySelector("#resposta-selecionada").innerHTML = `
        <div id="content">
            <div id="resposta"><button id="btnResposta" value="${respostaSelecionada.value}">${respostaSelecionada.value}</button></div>
        </div>
    `
}

//verificando resolução
function verificarResolucao() {
    if (!document.querySelector("#btnResposta")) {
        alert("Selecione uma resposta por favor")
    }

    let numeroPergunta = sessionStorage.getItem("missaoUm")
    let resposta;

    switch (numeroPergunta) {
        case "0": resposta = "30/01"
            break;
        case "1": resposta = "Você beijou"
            break;
        case "2": resposta = "Branca"
            break;
    }

    if (document.querySelector("#btnResposta").value != resposta) {
        //resolução incorreta
        document.querySelector("#resolucao").className = "resolucaoIncorreta"
        document.querySelector("#iconIncorrect").classList.remove("none")
        document.querySelector("#iconCorrect").classList.add("none")
        document.querySelector("#paragrafoModal").innerHTML = "Uma mordida"
    } else {
        //resolução correta
        document.querySelector("#resolucao").className = "resolucaoCorreta"
        document.querySelector("#iconCorrect").classList.remove("none")
        document.querySelector("#iconIncorrect").classList.add("none")
        document.querySelector("#paragrafoModal").innerHTML = "Correto"

        //atualizar pontuação do jogador
        let jogador = JSON.parse(localStorage.getItem(user))
        jogador.pontuacao += 1
        localStorage.setItem(user, JSON.stringify(jogador))
    }
    document.querySelector("#btnOk").className = "none"

    //desabilitar respostas
    document.querySelector("#respostaUm").disabled = true;
    document.querySelector("#respostaDois").disabled = true;
    document.querySelector("#respostaTres").disabled = true;
}


function avancarPergunta() {
    document.querySelector("#resolucao").className = "none"

    let numeroPerguntaAtual = parseInt(sessionStorage.getItem("missaoUm"))

    sessionStorage.setItem("missaoUm", numeroPerguntaAtual + 1)

    if (numeroPerguntaAtual >= 2) {
        //atualizar status da missao do usuario
        let jogador = JSON.parse(localStorage.getItem(user))
        jogador.missoes[0].status_missao = "completo"
        jogador.missoes[1].status_missao = "pendente"

        localStorage.setItem(user, JSON.stringify(jogador))

        setTimeout(
            () => { window.location = `/pages/missao-concluida.html?userName=${user}` }
            , 750)
    }

    loadingPergunta()
}