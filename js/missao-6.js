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
    sessionStorage.setItem("missaoSeis", 0)
    sessionStorage.setItem("indicesPerguntas", 4)
}

function pergunta(numeroPergunta) {
    if (numeroPergunta == 0) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>Qual cor eu mais gosto? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
    <div class="verde">
        <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Verde">Verde</button>
     </div>
     <div class="azul">
         <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Azul">Azul</button>
    </div>
    <div class="preto">
        <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Preto">Preto</button>
    </div>
    `
    } else if (numeroPergunta == 1) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>O que eu vestiria? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
     <div>
         <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Sobretudo">Sobretudo</button>
      </div>
      <div>
          <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Camisa regata">Camisa regata</button>
     </div>
     <div>
         <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Sunga">Sunga</button>
     </div>
     `
    } else if (numeroPergunta == 2) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>Qual a minha série favorita? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Eu a patroa e as criancas">Eu a patroa e as criancas</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Um maluco no pedaço">Um maluco no pedaço</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Três é demais">Três é demais</button>
      </div>
      `
    } else if (numeroPergunta == 3) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>Qual meu hobby favorito? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Ficar com você">Ficar com você</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Tocar violão">Tocar violão</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Fazer nada">Fazer nada</button>
      </div>
      `
    } else if (numeroPergunta == 4) {
        //pergunta 
        document.querySelector("#pergunta").innerHTML = `<p>O que marcou minha vida para sempre? </p>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Conseguir um emprego">Conseguir um emprego</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Ganhar um presente">Ganhar um presente</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Te conhecer">Te conhecer</button>
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
    let numeroPergunta = sessionStorage.getItem("missaoSeis")
    switch (numeroPergunta) {
        case "0": pergunta(0)
            break;
        case "1": pergunta(1)
            break;
        case "2": pergunta(2)
            break;
        case "3": pergunta(3)
            break;
        case "4": pergunta(4)
            break;
    }
    //atualizar barra de progresso    
    let totalPerguntas = parseInt(sessionStorage.getItem("indicesPerguntas")) + 1
    let progresso = (100 * numeroPergunta) / totalPerguntas
    document.querySelector("#progresso").style.width = progresso + "%";
}

function respostaEscolhida(resposta) {
    let respostaSelecionada = document.querySelector(`#${resposta}`)
    let classeDiv = respostaSelecionada.value.toLowerCase()
    document.querySelector("#resposta-selecionada").innerHTML = `
        <div id="content"  class="${classeDiv}">
            <div id="resposta"><button id="btnResposta" value="${respostaSelecionada.value}">${respostaSelecionada.value}</button></div>
        </div>
    `
}

//verificando resolução
function verificarResolucao() {
    if (!document.querySelector("#btnResposta")) {
        alert("Selecione uma resposta por favor")
    }

    let numeroPergunta = sessionStorage.getItem("missaoSeis")
    let resposta;

    switch (numeroPergunta) {
        case "0": resposta = "Azul"
            break;
        case "1": resposta = "Sobretudo"
            break;
        case "2": resposta = "Um maluco no pedaço"
            break;
        case "3": resposta = "Ficar com você"
            break;
        case "4": resposta = "Te conhecer"
            break;
    }

    if (document.querySelector("#btnResposta").value != resposta) {
        //resolução incorreta
        document.querySelector("#resolucao").className = "resolucaoIncorreta"
        document.querySelector("#iconIncorrect").classList.remove("none")
        document.querySelector("#iconCorrect").classList.add("none")
        document.querySelector("#paragrafoModal").innerHTML = "Uma mordida"

        //adicionando efeito sonoro
        const audioIncorrect = new Audio('../music/respostaErrada.mp3')
        audioIncorrect.play();
    } else {
        //resolução correta
        document.querySelector("#resolucao").className = "resolucaoCorreta"
        document.querySelector("#iconCorrect").classList.remove("none")
        document.querySelector("#iconIncorrect").classList.add("none")
        document.querySelector("#paragrafoModal").innerHTML = "Correto"

        //adicionando efeito sonoro
        const audioCorrect = new Audio('../music/respostaCerta.mp3')
        audioCorrect.play();

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

    let numeroPerguntaAtual = parseInt(sessionStorage.getItem("missaoSeis"))

    sessionStorage.setItem("missaoSeis", numeroPerguntaAtual + 1)

    if (numeroPerguntaAtual >= 4) {
        //atualizar status da missao do usuario
        let jogador = JSON.parse(localStorage.getItem(user))
        jogador.missoes[5].status_missao = "completo"
        if (jogador.missoes[6].status_missao != "completo") {
            jogador.missoes[6].status_missao = "pendente"
        }

        //destruir sessão        
        setTimeout(() => {
            sessionStorage.removeItem("missaoSeis")
        }, 750);

        localStorage.setItem(user, JSON.stringify(jogador))

        setTimeout(
            () => { window.location = `/pages/missao-concluida.html?userName=${user}` }
            , 750)
    }

    loadingPergunta()
}