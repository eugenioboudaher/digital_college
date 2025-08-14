let tipo = "file duplo"
let quantidade = 10
let cartao = true

if (tipo === "file duplo" && quantidade <= 5 && !cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 5.8}`)    
}else if (tipo === "file duplo" && quantidade > 5 && !cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 4.9}`)   
}else if (tipo === "file duplo" && quantidade <= 5 && cartao) {
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 5.8 * 0.95}`) 
}else if (tipo === "file duplo" && quantidade > 5 && cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 4.9 * 0.95}`)
}

else if (tipo === "alcatra" && quantidade <= 5 && !cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 5.9}`)    
}else if (tipo === "alcatra" && quantidade > 5 && !cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 4.9}`)   
}else if (tipo === "alcatra" && quantidade <= 5 && cartao) {
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 5.9 * 0.95}`) 
}else if (tipo === "alcatra" && quantidade > 5 && cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 4.9 * 0.95}`)
}  

else if (tipo === "picanha" && quantidade <= 5 && !cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 7.9}`)    
}else if (tipo === "picanha" && quantidade > 5 && !cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 6.9}`)   
}else if (tipo === "picanha" && quantidade <= 5 && cartao) {
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 7.9 * 0.95}`) 
}else if (tipo === "picanha" && quantidade > 5 && cartao){
    console.log(`A compra do ${tipo} de ${quantidade}kg custou ${quantidade * 6.9 * 0.95}`)
}  