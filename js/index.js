let btnCriarAcesso = document.querySelector("#btnCriarAcesso"),
    btnLogin = document.querySelector("#btnLogin"),
    formLogin = document.querySelector("#formFazerLogin"),
    formCriarAcesso = document.querySelector("#formCriarConta")

btnCriarAcesso.addEventListener("click", (event) => {
    formCriarAcesso.classList.remove("none")
    formLogin.classList.add("none")
    event.preventDefault()
})

btnLogin.addEventListener("click", (event) => {
    formCriarAcesso.classList.add("none")
    formLogin.classList.remove("none")
    event.preventDefault()
})

//armazenando novo cadastro de usuário com base em classe

class Usuario {
    constructor(userName, name, senha, usuarioLocalizado) {
        this.userName = userName,
            this.name = name,
            this.senha = senha,
            this.usuarioLocalizado = usuarioLocalizado
    }

    adicionarUser() {
        let userJson = {
            "nome": this.name,
            "senha": this.senha,
            "username": this.username,
            "pontuacao": 0,
            "missoes": [
                {
                    nome_missao: "Perguntas e respostas",
                    numero_missao: 1,
                    status_missao: "incompleto"
                },
                {
                    nome_missao: "Sobre nossa história",
                    numero_missao: 2,
                    status_missao: "incompleto"
                },
                {
                    nome_missao: "Quando foi cada momento ou onde foi",
                    numero_missao: 3,
                    status_missao: "incompleto"
                },
                {
                    nome_missao: "Desafios superados",
                    numero_missao: 4,
                    status_missao: "incompleto"
                },
                {
                    nome_missao: "Lembre-se de como vocês se apaixonaram",
                    numero_missao: 5,
                    status_missao: "incompleto"
                },
                {
                    nome_missao: "Responda essas perguntas sobre mim",
                    numero_missao: 6,
                    status_missao: "incompleto"
                },
                {
                    nome_missao: "A surpresa",
                    numero_missao: 7,
                    status_missao: "incompleto"
                }
            ]
        }
        localStorage.setItem(this.userName, JSON.stringify(userJson))
    }

    login() {
        let usuario = JSON.parse(this.usuarioLocalizado)
        sessionStorage.setItem(this.userName, usuario.nome)
        window.location = `pages/apresentacao.html?userName=${this.userName}`
    }
}
/*===================================================================*/

formCriarAcesso.addEventListener("submit", (event) => {
    let newUserName = document.querySelector("#newUserName").value
    let newName = document.querySelector("#newName").value
    let newSenha = document.querySelector("#newSenha").value

    if (localStorage.getItem(newUserName)) {
        alert("Usuário já cadastrado")
        event.preventDefault()
    } else if (newUserName == "" || newName == "" || newSenha == "") {
        alert("Verifique se todos os campos foram preenchidos")
        event.preventDefault()
    } else {
        let novo_usuario = new Usuario(newUserName, newName, newSenha)
        novo_usuario.adicionarUser()
    }
})

formLogin.addEventListener("submit", (event) => {
    let userName = document.querySelector("#userName").value
    let senha = document.querySelector("#senha").value
    let usuarioLocalizado = localStorage.getItem(userName)

    if (userName == "" || senha == "") {
        alert("Verifique se todos os campos foram preenchidos corretamente")
        event.preventDefault()
    } else if (usuarioLocalizado == null) {
        alert("Usuário ou senha estão incorretos")
        event.preventDefault()
    } else {
        let usuario = new Usuario(userName, "", senha, usuarioLocalizado)
        usuario.login()
        event.preventDefault()
    }
})
