const dataNascimento = document.querySelector("#nascimento")
dataNascimento.addEventListener('blur', (evento) =>{
    validaDataDeNascimento(evento.target)
})

function validaDataDeNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ""

    if(!maiorQue18(dataRecebida)){
        mensagem = "Você deve ter mais de 18 anos para se cadastrar!"
    }
    input.setCustomValidity(mensagem)
}

function maiorQue18(data){
    const dataAtual = new Date()
    const dataMaisQue18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMaisQue18 <= dataAtual
}