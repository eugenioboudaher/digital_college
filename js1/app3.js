const universidades = [
    [
        ["USP", "São Paulo", 1934],
        ["UFPE", "Recife", 1946]
    ],
    [
        ["Harvard", "Cambridge", 1636],
        ["MIT", "Cambridge", 1861]
    ],
    [
        ["Universidade de Tóquio", "Tóquio", 1877],
        ["Universidade de Kyoto", "Kyoto", 1897]
    ]
];

// Mostre a cidade e o ano de fundação da MIT.
console.log(`MIT cidade: ${universidades[1][1][1]} - ano: ${universidades[1][1][2]}`)

// Qual é a universidade mais antiga do Japão da lista?
let menor = universidades[2][0][2]; 
for (let i of universidades[2]) {
    if (i[2] < menor) {
        menor = i[1];
    }
}
console.log(menor);


// Qual universidade brasileira está localizada em Recife?
console.log(`MIT Universidade: ${universidades[0][1][0]}`)