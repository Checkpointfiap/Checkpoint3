// RECUPERANDO ELEMENTOS
const inputName = document.querySelector("#idName")
const inputSurname = document.querySelector("#idSurname")
const inputEmail = document.querySelector("#idEmail")
const inputSenha = document.querySelector("#idSenha")
const inputConfirmPass = document.querySelector("#idConfirmPass")

// CAPTURANDO OS EVENTOS
addEventListener("click",(evt)=>{

    // OBJETO PARA 
    let usuarioLogado = {
        nameUsuarioLogado : inputName.value,
        surnameUsuarioLogado : inputSurname.value,
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value,
        corfirmPassUsuarioLogado : inputConfirmPass.value
    }
})