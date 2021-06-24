
export const cpfMask = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const telefoneMask = value => {

    const telefone = value.replace(/\D/g, '')
    if(value){
        const tamanho = telefone.length
        
        const ddd = telefone.slice(0,2)
        const inicio = tamanho < 11 ? telefone.slice(2,6) : telefone.slice(2,7)
        const fim = tamanho < 11 ? telefone.slice(6,10) : telefone.slice(7,11)

        if(tamanho < 3){
            return '(' + ddd
        } else if(tamanho < 7) {
            return '(' + ddd + ') ' + inicio
        } else {
            return '(' + ddd + ') ' + inicio + '-' + fim
        }
    }
    return value
}

export const cepMask = value => {

    const cep = value.replace(/\D/g, '')
    if(value){
        const tamanho = cep.length
        
        const inicio = cep.slice(0,2)
        const meio = cep.slice(2,5)
        const fim = cep.slice(5,8)

        if(tamanho < 3){
            return inicio
        } else if(tamanho < 6) {
            return inicio + '.' + meio
        } else {
            return inicio + '.' + meio + '-' + fim
        }
    }
    return value
}

export const dataMask = value => {

    const data = value.replace(/\D/g, '')
    if(value){
        const tamanho = data.length
        
        const inicio = data.slice(0,2)
        const meio = data.slice(2,4)
        const fim = data.slice(4,8)

        if(tamanho < 3){
            return inicio
        } else if(tamanho < 5) {
            return inicio + '/' + meio
        } else {
            return inicio + '/' + meio + '/' + fim
        }
    }
    return value
}