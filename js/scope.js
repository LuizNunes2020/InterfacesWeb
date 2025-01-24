console.log("=== scope(var)")

function demo(){
    console.log("dentro de demo()1:" + meuNome)
    meuNome = "luiz"

    console.log("dentro de demo()2:" + meuNome)
    var meuNome
}

demo()

if (1 == 1){
    var batata = "sou uma batatinha"
    console.log('dentro do if: ' + batata)
}

console.log('fora do if: ' + batata)

console.log('==== scope(const,let)')
if (1 == 1) {
    const minhaIdade = 21
    let minhaDtNascto = "25/12/00"

    console.log('dentro do if(idade): ' + minhaIdade)
    console.log('dentro do if(dt): ' + minhaDtNascto)
}


console.log('fora do if: ' + minhaDtNascto)
