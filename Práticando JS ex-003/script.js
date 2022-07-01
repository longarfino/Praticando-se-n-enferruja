function verificar(){
    var ini = document.getElementById('num')
    var fim = document.getElementById('num2')
    var pas = document.getElementById('pass')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Caixa de dados vazia!')
    } else {
    res.innerHTML = 'contando:<br>'                 //conversão STRING para NUMBER.
    let i = Number(ini.value)
    let f = Number(fim.value)                       // LET e uma vaiavel que vale somente dentro do proprio {ESCOPO}.
    let p = Number(pas.value)
    if(p <=0){
        window.alert('[ERRO] Passo invalido! vale número 1!')
        p =1
    }
    if(i <f){
        for(i; i <=f; i += p){
            res.innerHTML += `${i} \u{1f449} `
        }  
    } else {
        for(i; i >=f; i -= p){                      // comnado for fazendo a mesma coisa que o while
            res.innerHTML += `${i} \u{1f449} `
        }  
            
        }  
    }       res.innerHTML += `\u{1F3C1} ` // fora dos {escopos} para o resultado funcionar para os dois if e eslse
 
       
}
function recarregar(){ // botao recarregar pagina
    location.reload()
} 

    
    
       
       

    