// RECUPERANDO ELEMENTOS
const inputName = document.querySelector("#idName");
const inputSurname = document.querySelector("#idSurname");
const inputEmail = document.querySelector("#idEmail");
const inputSenha = document.querySelector("#idPass");
const inputConfirmPass = document.querySelector("#idConfirmPass");
const msgStatus = document.querySelector("#msg");
const msgName = document.querySelector("#msgName")
const form = document.querySelector("#form")

let nameCorreto = false;
let surnameCorreto = false;
let emailCorreto = false;
let senhaCorreto = false;
let confirmPassCorreto = false;

addEventListener("click", (evt)=>{
    console.log(evt);
    console.log(evt.target);
    
        if(inputName.value.length < 5 && inputName.value.length > 0){
            console.log("errado");
            inputName.setAttribute("style","border:2px ridge red");
            msgStatus.innerHTML ="<span><strong><i>Campo nome preenchido incorretamente</i></strong></span>";
            msgStatus.setAttribute("style", "color:red");
            inputName.value ="";
            inputName.placeholder ="Minimo de 5 caracteres";
        }else if(inputName.value.length >= 5){
            nameCorreto = true;
            inputName.setAttribute("style","border:2px ridge lime");
            msgStatus.innerHTML="";
        }else{
            inputName.setAttribute("style","");
        }

        if(inputSurname.value.length < 5 && inputSurname.value.length > 0){
            console.log("errado");
            inputSurname.setAttribute("style","border:2px ridge red ");
            msgStatus.innerHTML ="<span><strong><i>Campo Segundo Nome preenchido incorretamente</i></strong></span>";
            msgStatus.setAttribute("style", "color:red");
            inputSurname.value ="";
            inputSurname.placeholder ="Minimo de 5 caracteres";

        }else if(inputSurname.value.length >= 5){
            surnameCorreto = true;
            inputSurname.setAttribute("style","border:2px ridge lime");
            msgStatus.innerHTML="";
        }else{
            inputSurname.setAttribute("style","");
        }

        if(inputEmail.value.length == 0){
            inputEmail.setAttribute("style","color;");
        }
        else if((inputEmail.value.length < 5 && inputEmail.value.length > 0) || (inputEmail.value.indexOf("@") == -1)){
            console.log("errado");
            inputEmail.setAttribute("style","border:2px ridge red   ");
            msgStatus.innerHTML ="<span><strong><i>Campo email preenchido incorretamente</i></strong></span>";
            msgStatus.setAttribute("style", "color:red");
            inputEmail.value ="";
            inputEmail.placeholder ="Email inválido";
        }else if(inputEmail.value.length >= 5){
            emailCorreto = true;
            inputEmail.setAttribute("style","border:2px ridge lime");
            msgStatus.innerHTML="";
        }

        if(inputSenha.value.length < 6 && inputSenha.value.length > 0){
            
            console.log("errado");
            inputSenha.setAttribute("style","border:2px ridge red ");
            msgStatus.innerHTML ="<span><strong><i>Campo Senha preenchido incorretamente</i></strong></span>";
            msgStatus.setAttribute("style", "color:red");
            inputSenha.value ="";
            inputSenha.placeholder ="minimo de 6 caracteres";
        }    
        else if (inputSenha.value.length == 0){
            inputSenha.setAttribute("style","");
        }
        else if(inputSenha.value.length >= 6 && inputSenha.value.length <= 8){
            senhaCorreto = true;
            inputSenha.setAttribute("style","border:2px ridge lime");
            msgStatus.innerHTML="";
        }

        if((inputConfirmPass.value != inputSenha.value) || (inputConfirmPass.value.length < 6 && inputConfirmPass.value.length > 0)){
            console.log("errado");
            inputConfirmPass.setAttribute("style","border:2px ridge red ");
            msgStatus.innerHTML ="<span><strong><i>Campo de confirmação de senha preenchido incorretamente</i></strong></span>";
            msgStatus.setAttribute("style", "color:red");
            inputConfirmPass.value ="";
            inputConfirmPass.placeholder ="Senha não condiz";
        }
        else if((inputConfirmPass.value.length >= 5 && inputConfirmPass.value.length <= 8) && (inputConfirmPass.value == inputSenha.value)){
            confirmPassCorreto = true;
            inputConfirmPass.setAttribute("style","border:2px ridge lime ");
            msgStatus.innerHTML="";
        }
        else if (inputConfirmPass.value.length == 0){
            inputConfirmPass.setAttribute("style","");
        }


    })