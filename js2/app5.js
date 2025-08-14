for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

console.log("---------------------");

let arr = [1, 2, 3, 4]
for (i of arr) {
    console.log(doubleElement(i));
    
}

console.log("---------------------")

arr.forEach(i => {
    console.log(tripleElement(i));
    
})

function doubleElement (element) {
    return element * 2
}
function tripleElement (element) {
    return element * 3
}