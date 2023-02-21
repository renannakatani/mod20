let frutas = ['Maça', 'Banana', 'Uva']
console.log(frutas.length)

let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

frutas.forEach((fruta) => {
    console.log(fruta)
})

frutas.push('Pera')

frutas.forEach((fruta) => {
    console.log(fruta)
})

var jsonJs = [
    {
        "nome": function(){
            return 'João'
        },
        "idade": "42"
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]

console.log(jsonJs)

const jsonRest = {
    "nome": "Daniel",
    "idade": 25
}

console.log(jsonRest)

console.log(JSON.stringify(jsonJs))

const texto = '[{"idade": "42"},{ nome: "Maria", "idade": 25 }]'
console.log(JSON.parse(texto))