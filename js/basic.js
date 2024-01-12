    console.log('Olá, Javascript!')

    var userName = 'Carol Caracol'

    document.getElementById('userName').innerHTML = userName

    //  Variáveis //
    // var nome = 'Mestre Yoda'
    // var idade = 100
    // var jedi = true

    // console.log(typeof nome)
    // console.log(typeof idade)
    // console.log(typeof jedi)

    // Operadores matemáticos //
    // var n1 = 5
    // var n2 = 5

    // var total = n1 / n2
    // console.log(total)

    // Operadores de comparação //
    // var v1 = 5
    // var v2 = 5

    // var resultado = v1 === v2
    // console.log(resultado)

    // Funções //
    // function soma(n1, n2) {
    //     console.log(n1 + n2)
    // }

    // soma (5, 85)

    // function boasVindas(nome) {
    //     alert(nome + ', seja bem vinde')
    // }
    // boasVindas('Carol')

    // function soma(n1, n2) {
    //     return n1 + n2
    // }

    // var resultado = soma (5, 5)
    // console.log(resultado)

    // Controle de fluxos //
    // Sendo um cliente correntista do banco
    // Posso sacar dinheiro em caixas eletrônicos
    // Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

    // Cenário 1: Saque com sucesso
    // Dado que meu saldo é de 1000 reais
    // Quando eu faço um saque de 400 reais
    // Então o valor do saque deve ser deduzido do meu saldo

    // var saldo = 1000

    // function saque(valor) {
    //     saldo = saldo - valor
    // }
    // saque(400)
    // console.log(saldo)


    // Cenário 2: Saque com valor superior ao saldo
    // Dado que meu saldo é de 1000 reais
    // Quando eu faço um saque de 1001 reais
    // Então não deve deduzir do meu saldo
    // E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

    // var saldo = 1000

    // function saque(valor) {

    //     if (valor > saldo) {
    //         console.log('Valor do saque superior ao saldo')
    //     } else {
    //     saldo = saldo - valor
    //     }
        
    // }
    // saque(1001)
    // console.log(saldo)

    // Cenário 3: Saque com valor máximo
    // Dado que meu saldo é de 1000 reais
    // E o valor máximo por operação é de 700
    // Quando eu faço um saque de 701 reais
    // Então não deve deduzir do meu saldo
    // E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

    
    // var saldo = 1000
    
    // function saque(valor) {

    //     if (valor > 700) {
    //         console.log('Valor do saque superior ao máximo permitido por operação')
    //     } else {
    //         saldo = saldo - valor
    //     }
        
    // }
    // saque(701)
    // console.log(saldo)

    // Arrays //
    // var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

    // console.log(gaveteiro[0])


    // var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

    // personagens.push('C3p0')
    // personagens.push('R2D2')
    
    // //personagens.pop() //remove apenas o último item do array

    // // elimina o Darth Vader do array
    // personagens = personagens.filter(function(p){
    //     return p !== 'Darth Vader'
    // })

    // console.log(personagens)

    // Controles de repetição (Loops) //
    
    // var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2DR']
    
    // personagens.forEach(function(p){
    //     console.log(p)
    // })

    // for (var i in personagens) {
    //     console.log(personagens[i])
    // }

    // for (var i = 0; i <= 10; i++) {
    //     console.log(i) 
    //     // código vai ser executado enquanto até a condição retornar false (até 10)
    // }


    // Objetos //

    // var yoda = {
    //     nome: 'Mestre Yoda',
    //     idade: 100,
    //     jedi: true,
    //     mostraIdade: function() {
    //         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    //     }
    // }

    // console.log(yoda)
    // yoda.mostraIdade()


    // Constantes (diferente de variável, a constante não tem seu valor alterado, é imutável//

    const nome = 'Darth Vader'
    console.log(nome)

    nome = 'Mestre Yoda'
    console.log(nome)

    
