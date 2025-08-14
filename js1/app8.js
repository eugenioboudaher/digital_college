var n1 = 3;
var n2 = 9;
var n3 = 2;
var menor, meio, maior;

if (n1 <= n2 && n1 <= n3) {
    menor = n1;
    if (n2 <= n3) {
        meio = n2;
        maior = n3;
    } else {
        meio = n3;
        maior = n2;
    }
} else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
    if (n1 <= n3) {
        meio = n1;
        maior = n3;
    } else {
        meio = n3;
        maior = n1;
    }
} else {
    menor = n3;
    if (n1 <= n2) {
        meio = n1;
        maior = n2;
    } else {
        meio = n2;
        maior = n1;
    }
}

console.log(`Ordem crescente: ${menor}, ${meio}, ${maior}`);
