let nota1 = 9;
let nota2 = 9;
let media = (nota1 + nota2)/2;

if (media <= 4) {
    console.log("E " + media);  
}else if (media <= 6) {
    console.log("D " + media);
}else if (media <= 7.5) {
    console.log("C " + media);   
}else if (media <= 9) {
    console.log("B " + media);   
}else if (media <= 10) {
    console.log("A " + media);   
}else {
    console.log("Valor inválido");
    
}