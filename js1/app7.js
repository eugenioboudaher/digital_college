const macaPrecoSemDescinto = 0.30;
const macaPrecoComDescinto = 0.25;
var quantidade = 12 // 12 ou mais desconto


if (quantidade >= 12) {
    console.log(`Vc comprou ${quantidade} maçãs e o valor é de ${macaPrecoComDescinto}`)
    console.log(`O valor total é ${(macaPrecoComDescinto * quantidade).toFixed(2)}`);
}else {
    console.log(`Vc comprou ${quantidade} maçãs e o valor é de ${macaPrecoComDescinto}`)
    console.log(`O valor total é ${(macaPrecoComDescinto * quantidade).toFixed(2)}`);
}