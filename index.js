const botao = document.getElementById('botao')

const formulario = document.getElementById('formulario')

botao.addEventListener('click', () => {
    const campoEmail = document.getElementById('campo-email')

    var value = campoEmail.value
    
    if(value.indexOf('@') > -1){
        // console.log("encontrou o @")
        formulario.submit()
    }else{
        // console.log("não encontrou o @")
        alert("Email inválido")
    }
})