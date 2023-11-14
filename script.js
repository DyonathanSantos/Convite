const  form = document.getElementById("form")
const  NOME = document.getElementById("NOME")
const  CPF = document.getElementById("CPF")
const  IDADE = document.getElementById("IDADE")

form.addEventListener("submit",(event) => {
    event.preventDefault();

    checkForm();

})

NOME.addEventListener("blur",() =>{
    checkInputNOME();
})
CPF.addEventListener("blur",() =>{
    checkInputCPF();
})
IDADE.addEventListener("blur",() =>{
    checkInputIDADE();
})


function checkInputNOME(){
    const NOMEvalue = NOME.value;

    if(NOMEvalue === ""){
        errorInput(NOME,"preencha com o nome!")

}else{
    const formItem =  NOME.parentElement;
    formItem.className = "form-content"    
}

}

function checkInputCPF(){
    const CPFValue = CPF.value;

if(CPFValue === ""){
    errorInput(CPF,"CPF obrigatório.")
}else if(CPFValue.length < 11){
    errorInput(CPF,"precisa ter no máximo 11 números.")

}else{
    const formItem = CPF.parentElement;
    formItem.className = "form-content"
}

}

function checkInputIDADE(){
    const IDADEValue = IDADE.value;
if(IDADEValue === ""){
    errorInput(IDADE,"Digite sua Idade!")
}else{
    const formItem = IDADE.parentElement;
    formItem.className = "form-content"
}

}

function checkForm(){
    checkInputNOME();
    checkInputCPF();
    checkInputIDADE();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
    
        return item.className === "form-content" 
    });

if(isValid){
    alert("Conluido com Sucesso")
}else{
    alert("preencha todos os campos.")
}

}




function errorInput(input,message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    
    formItem.className = "form-content error"
}