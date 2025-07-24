

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0
for (i of a) {
    total += i
    if (total == 14){
        console.log(total)
            break
    }else {
        console.log("ainda")
        console.log(total)
        console.log("---------")
    }
        
}

