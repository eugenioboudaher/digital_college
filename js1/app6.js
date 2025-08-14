let anoNasc = 2000;
let anoAtual = 2025;
let idade =anoAtual - anoNasc;

if (idade < 16) {
    console.log(`Sua idade é de ${idade} e vc não pode votar`);
}else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log(`Sua idade é de ${idade} e vc pode votar se quiser`);
}else {
    console.log(`Sua idade é de ${idade} e vc é obrigado a votar`);
}