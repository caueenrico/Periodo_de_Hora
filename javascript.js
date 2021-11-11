function carregar() {
    var msg = document.querySelector('span#msg')
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
   

    if(hora<10) hora = "0"+hora
  
    var tempo = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        msg.innerHTML += `Bom Dia !</br>`
        document.getElementById('msg').innerHTML+=tempo
        document.body.style.background = 'blue'
    
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        msg.innerHTML += `Boa Tarde !</br>`
        document.getElementById('msg').innerHTML+=tempo
        document.body.style.background = 'green'
    } else {
        img.src = 'noite.jpg'
        msg.innerHTML += `Boa noite !</br>`
        document.getElementById('msg').innerHTML+=tempo
        document.body.style.background = 'black'
    }

}
