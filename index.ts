//unknown
//Tipo de topo, possível atribuir a qualquer variável. Não posso operar sem verificar seu tipo

let u: unknown

u = 'string'

if(typeof u === 'string') {
    console.log(u)
}

//never 
//o tipo never são valores que nunca acontecem. Usado em funções que nunca retornam um valor
//Normalmente lançam exception ou entrar em loops infinitos, ou são consideradas impossíveis

function exception(message: string): never {
    throw new Error(message)
}

function loop(): never {
    while(true) {}
}


//void
//marca uma função que tem apenas um funcionalidade lógica, que não retorna valor

function isvoid(message: string): void {
    console.log(message)
}


//literal
//object literal em TS representa a estrutura desse objeto, especificando as propriedades
let literal: { nome: string, idade: number } = { nome: 'Sabrina', idade: 20 }


//Array mutáveis
//São arrays dee tipo único que podem ter tamanho alterado

let list: number[] = [1,2,3,4,5,6]
let list2: Array<number> = [4,6,7,21]



//Tupla
//Tem número fixo de elementos e podem ser mutáveis

let tuple: [string, number]

tuple = ['hello', 10]

tuple[0] = 'world'
tuple[1] = 20



//Funções
//Define o tipo de uma função, incluindo seus parâmetros e seu valor de retorno

interface myCb<T1 = number,T2 = number,T3 = string ,T4 = number> {
    (n1: T1, n2: T2, message: T3): T4
}

let fn = function(n1: number, n2: number, message: string, callback: myCb): number {
    return callback(n1, n2, message)
}

const fnReturn  = fn(10, 10, 'Aqui eu deixo a minha mensagem', (n1: number, n2: number, msg: string) => {
    console.log(msg)
    return n1 + n2
})

console.log(fnReturn)

//Comparação entre unknown e any
//'unknown' se torna mais seguro que 'any', pois força a validação do tipo

let valor: unknown 
valor = 'hello'

// console.log(valor.toUpperCase())

if (typeof valor === 'string') valor.toUpperCase();