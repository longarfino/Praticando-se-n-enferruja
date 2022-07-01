function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) { //varifica a caixa de texto
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // convesao para numero
        let c = 1
        tab. innerHTML = '' //para limpar formulario
        while (c<=10){
            let item = document.createElement('option') // adiciona formulario de opções no html
            item.text = `${n} x ${c} = ${n*c}`// adiciona o calculo na variavel item
            item.value = `tab${c}` // pssibilidade de selecionar para outras liguagens
            tab.appendChild(item) // adiciona um elemento 
            c++  
        }
    }
}