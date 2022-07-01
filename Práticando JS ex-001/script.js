function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()  
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12 ) {
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#e2cd9f' //muda a cor de fundo com JS

    }else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        window.document.body.style.background = '#b9846f'

    }else{
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#515150'
}

}
