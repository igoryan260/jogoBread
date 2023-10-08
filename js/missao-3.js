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
    //serão 7 perguntas, a primeira sendo no índice "0". Ou seja, quando o numero do indice da pergunta atual for "6", quer dizer que o jogador
    //já passou pela pergunta de número "0" e de número "1", o que significa que ao chegar no índice 6 o progresso será de 100%
    sessionStorage.setItem("missaoTres", 0)
    sessionStorage.setItem("indicesPerguntas", 6)
}

function pergunta(numeroPergunta) {
    if (numeroPergunta == 0) {
        //pergunta 
        let img = document.createElement("img")
        img.id = "momento"
        img.src = "https://lh3.googleusercontent.com/pw/ADCreHe9xdwKCi3XG3bDHhSMReGDBI0D5fo8PpAZuLpt1FgfcLo8Ini9wZaRRMOimCQHVfi5Jav4gKg46SXB-Qn99aa4vMfNuzKzq66VNH2PNXlTAGMbOt_VK2Qi0Ngu-OkS19NzD1U1cR0jU4XRE7CeX6YKNQ=w366-h651-s-no?authuser=0"
        document.querySelector("#pergunta").appendChild(img)
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
    <div>
        <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="1º Encontro">1º Encontro</button>
     </div>
     <div>
         <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="2º Encontro">2º Encontro</button>
    </div>
    <div>
        <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="3º Encontro">3º Encontro</button>
    </div>
    `
    } else if (numeroPergunta == 1) {
        //pergunta 
        let img = document.createElement("img")
        img.id = "momento"
        img.src = "https://lh3.googleusercontent.com/pw/ADCreHeod2TOsSgCjs-0sxaYNRFV7gtqlV4E1YCJKQmPGPkHLQ0XMSjkvjyke3tJ29zTzSAlsHVpnm9Lmv2-925aw6omXPI6ffXSPyfoKIzW8S2VFsEu1abPqL2UT4qM6-kpUb3Lb4l3zmjr7wCdXPddi60lrQ=w488-h651-s-no?authuser=0"
        document.querySelector("#pergunta").appendChild(img)
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
     <div>
         <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Espetaria de Ferraz">Espetaria de Ferraz</button>
      </div>
      <div>
          <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="2ª vez Mil Grau">2ª vez Mil Grau</button>
     </div>
     <div>
         <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="1ª vez Mil Grau">1ª vez Mil Grau</button>
     </div>
     `
    } else if (numeroPergunta == 2) {
        //pergunta 
        let img = document.createElement("img")
        img.id = "momento"
        img.src = "https://lh3.googleusercontent.com/pw/ADCreHdSVrX7SS6QYFhyLZTm8960OwsGglBDYybOEVv348MJsKykjTHPYV1OCv1viF5vGZApLHrl997Vc5-k3PpQUbF2DWQ9R93CMvkqi7wPbjJt5EiIKBa1qN_Q86nwM6RciD1-np1I89yqdqDYReJAo85G0A=w366-h651-s-no?authuser=0"
        document.querySelector("#pergunta").appendChild(img)
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Pedido de namoro">Pedido de namoro</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Momento de uma amiga">Momento de uma amiga</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Imagem do google">Imagem do google</button>
      </div>
      `
    } else if (numeroPergunta == 3) {
        //pergunta 
        let img = document.createElement("img")
        img.id = "momento"
        img.src = "https://lh3.googleusercontent.com/pw/ADCreHfmHJQTAk_pBNsfVqyYLu5K8_5I3k4CpRXKhN4LKa3xek86iUDg9AglgWk0J_xKo97FrbjejPTbMutQ-KKY2KYvGckGBK_WUTR7s99Xy3-tfe-zXLMmlGQ5W5k4LejImjc48V12E6RqDEn5KPHOliROfw=w366-h651-s-no?authuser=0"
        document.querySelector("#pergunta").appendChild(img)
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Nosso primogenito nasceu">Nosso primogenito nasceu</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Aniversário do Bê">Aniversário do Bê</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="1 mês de namoro">1 mês de namoro</button>
      </div>
      `
    } else if (numeroPergunta == 4) {
        //pergunta     
        document.querySelector("#pergunta").innerHTML = `<video width="100%" height="100%" controls autoplay>
        <source
            src="../video/video-missao-4.mp4"
            type="video/mp4">
    </video>`
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Eu to certo">Eu to certo</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Voce ta certa">Voce ta certa</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Os dois estao errados">Os dois estao errados</button>
      </div>
      `
    } else if (numeroPergunta == 5) {
        //pergunta 
        let img = document.createElement("img")
        img.id = "momento"
        img.src = "https://lh3.googleusercontent.com/pw/ADCreHdEi-Pn8OSNzrAXNdDcjCf3rzETA2EjaZqZ3uowt1huQuk1MtRe2wTKdinNRzIlRMkvFgx3et4a86Z-r-EwqFCA5ZUgSL7w887oEobLCYaRMqZH1-YIxT29aoJ62OibZ_SpSBA21RGe8lWBIdtV3ywCmg=w293-h651-s-no?authuser=0"
        document.querySelector("#pergunta").appendChild(img)
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Agosto de 2023">Agosto de 2023</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Setembro de 2023">Setembro de 2023</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Outubro de 2022">Outubro de 2022</button>
      </div>
      `
    } else if (numeroPergunta == 6) {
        //pergunta
        document.querySelector("#pergunta").innerHTML = "<a href='https://youtu.be/N7VCLNBNJQs?si=gpI2AVWpLGID7w3j' target='_blank'>Abrir</a>"
        //respostas
        document.querySelector("#content").innerHTML = ""
        document.querySelector("#content").innerHTML = `
      <div>
          <button type="button" id="respostaUm" onclick="respostaEscolhida('respostaUm')" value="Musica marcante">Musica marcante</button>
       </div>
       <div>
           <button type="button" id="respostaDois" onclick="respostaEscolhida('respostaDois')" value="Um amigo mandou">Um amigo mandou</button>
      </div>
      <div>
          <button type="button" id="respostaTres" onclick="respostaEscolhida('respostaTres')" value="Medos e traumas">Medos e traumas</button>
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
    let numeroPergunta = sessionStorage.getItem("missaoTres")
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
        case "5": pergunta(5)
            break;
        case "6": pergunta(6)
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

    let numeroPergunta = sessionStorage.getItem("missaoTres")
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

    let numeroPerguntaAtual = parseInt(sessionStorage.getItem("missaoTres"))

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