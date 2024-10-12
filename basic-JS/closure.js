// function outerFunc(){
//     let outerval = 50;
//     function innerFunc(){
//         var innerVal = 100;
//         console.log(outerval);
//     }
//     innerFunc();
// }

// console.log(outerFunc());

function outerFunc2(num1){
    return function(num2){
        return num1 + num2;
    }
}

const addFour = outerFunc2(4);
const addFive = addFour(5);
const output = addFive;
console.log(output);