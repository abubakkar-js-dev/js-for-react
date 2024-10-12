function sum(...numbers){
    return numbers.reduce((acc,curr)=> acc + curr,0);
}

console.log(sum(3,4,6,2));