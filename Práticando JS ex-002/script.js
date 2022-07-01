function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length >= 0 && fano.value <= 1850 || fano.value > ano) {//fano.value.length VERIFICA O COMPRIMETO DO VALOR E SE A CAIXA ESTA VAZIA
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'foto-menino.png')  
            }else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovenM.png') 
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-homen.png') 
            }else {
                //idoso

                img.setAttribute('src', 'foto-idoso.png') 
            }   
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'foto-menina.png')
            }else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovenF.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idosa.png')
            }   
     }
        res.innerHTML = `<strong> ${genero}</strong> com ${idade} anos.`
        res.appendChild(img)//adicionar um elemento
      
    }

}