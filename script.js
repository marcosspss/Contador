function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value == 0 || passo == 0) {
        alert('[ERRO] Verifique os dados e tente novamente !')
        res.innerHTML = 'impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo Inválido ! Considerando passo 1')
            p=1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.style.textAlign = 'center'
                res.innerHTML += ` ${c} \u{1F449}`
            }   

            
        }else {
            for (let c = i; c >= f; c -= p) {
                res.style.textAlign = 'center'
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    } res.innerHTML += `\u{1F3C1}`
}