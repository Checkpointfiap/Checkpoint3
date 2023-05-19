// RECUPERANDO ELEMENTOS
const inputName = document.querySelector("#idName");
const inputSurname = document.querySelector("#idSurname");
const inputEmail = document.querySelector("#idEmail");
const inputSenha = document.querySelector("#idPass");
const inputConfirmPass = document.querySelector("#idConfirmPass");
const msgStatus = document.querySelector("#msg");
const msgName = document.querySelector("#msgName")
const form = document.querySelector("#form")



addEventListener("click", (evt)=>{
    console.log(evt)
    console.log(evt.target)
    
        if(inputName.value.length < 5 && inputName.value.length > 0){
            console.log("errado");
            inputName.setAttribute("style","border:2px ridge red");
            msgStatus.innerHTML ="<span><strong><i>Campo nome preenchido incorretamente</i></strong></span>";
            msgStatus.setAttribute("style", "color:red");
            inputName.value ="";
            inputName.placeholder ="Minimo de 5 caracteres";
        }else if(inputName.value.length >= 5){
            console.log("certo");
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
            console.log("certo");
            inputSurname.setAttribute("style","border:2px ridge lime");
            msgStatus.innerHTML="";
        }else{
            inputSurname.setAttribute("style","");
        }


    })