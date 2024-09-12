let initialAmount = parseFloat(prompt('Qual a quantidade de dinheiro que você tem?'))
let information
let additionalAmount
let subtractionalAmount

do {
    information = prompt(`Quantidade de dinheiro disponível: R$${initialAmount.toFixed(2)}

        1- Adicionar dinheiro
        2- Remover dinheiro
        3- Sair
            `)

    switch(information) {
    case '1':
        additionalAmount = parseFloat(prompt('Qual a quantidade a ser adicionada?'))
        initialAmount += additionalAmount
        break
    case '2':
        subtractionalAmount = parseFloat(prompt('Qual a quantidade a ser removida?'))
        initialAmount -= subtractionalAmount
        break
    }
} while (information !== '3')

if (information === '3') {
    alert('O programa foi encerrado.')
}