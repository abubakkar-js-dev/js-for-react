// const fun1 = (x,y,callback) =>{
//     return callback(x,y);
// };

// const fun2 = (x,y) =>{
//     return x+y;
// }

// const output = fun1(2,4,fun2);
// console.log(output)


function greeting(name,callback){
    return callback(name);
}

function sayHello(name){
    return `Hello Mr. ${name}. How are you?`;
}

console.log(greeting('Abu Bakkar',sayHello));
