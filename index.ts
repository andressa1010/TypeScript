//E pra usar a tipagem no typeScript eu preciso escrever assim: const nome:string='andressa'//
//aqui eu to especificando que essa variável que eu crie tem que ser sempre de um tipo number, boolean ou string//

const nome:string= 'Andressa'
const email:string= 'andressa.1100@gmail.com'
const celular: number= 199999999

// outro tipo bem famoso é o Array que é quando agente trabalha com coleções por exemplo uma lista de filmes, uma lista de pessoas//

//no typeScript agente usar o array assim: //

const nomes: string[]=['Andressa', 'Vanessa','Dressa']
const idades: number[]=[26,27,28]

//posso fazer assim também//

let idade:Array<number>=[26, 27,28]
let nomesNovos:Array<String>=['Mel','Maria','Ana']
// essa forma é uma forma mais generica//

//outro tipo muito comum usando no typeScript é o any//
//o any é um tipo especial no typeScript que agente pode usar sempre que agente não quiser um erro de verificação de tipo//

let objeto: any={x: 0}

//e pra usar o tipo objeto no typeScript agente vai simplesmente listar as propriedades//

function imprimirCordenadas(pt:{x:number , y:number}) {
  console.log('the coordinates x value is + pt.x')
  console.log('the coordinates x value is + pt.y')
}

imprimirCordenadas({x: 3, y:7})

//também poderia ser assim a tiapagem de objetos//

let obj:{x:number, y:number}={x:3, y:7}

//um tipo de tuple é outro tipo de array mas diferença é que ele sabe extamente quantos elementos esse array contêm e exatamente quais tipos de dados ele contêm em posições especificas.//

let color:[number, number, number]=[255,0,0];

//tipos tuples , a tupla é ideal quando agente quer criar coleções com tamanhos e tipos especificos//

let bgColor:[number, number, number, number?];
bgColor=[0,255,255]


//tipos enums os enum são interessantes para deixar o código mais legével e organizados//
//Enum no typeScript são uma ferramenta poderozisima pra gente lidar com conjuntos de valores constantes no desenvolvimento de solfware ele são simples mais ajudam muito a nomear essa constantes facilitando o entendimento do código//
//tipos de enum//

//enum numérico//

enum Colors{
    red,
    blue,
    green,
    pink,
}

//tipos de tranzações tipos de negociações//

enum TradeType{
    ACAO=9281,
    TESOURO_DIRETO=3221,
    TESOURO_SELIC=6554,
}

//tradeType seria tipos de transação tipos de negociação //
//é possivel atribuir valores aleatórios para cada elemento dentro do Enum//

enum StatusCodes{
    ok= 200,
    BadRequest=400
}

//além dos tipos númericos também é possivel ter tipos de string dentro de um enum//

enum Gender{
    m='masculino',
    f='ferminino'
}

//tipagem em funções//
// type Anotation = dar um tipo para cada parâmetro da função//

function greet(nome:string){
console.log(`Olá, ${nome}`)
}
//então ta pronta minha função ela vai saudar o nome que eu passar por parâmetro//
//para rodar npx tsc + nome da pasta e compilar o código para JS//

//também posso definir que uma função vai ter um retorno //

function doubleNumber(number: number){
    return number*2
}

//essa função vai dobrar o valor que eu passar pra essa função//

//se eu quiser deixar o retorno dessa função explicida eu preciso colocar depois do  parentes :number//

function dobrarNumero(number: number):number{
    return number*2
};

