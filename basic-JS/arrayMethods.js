// forEach,map,filter,find

const numbers = [64,23,75,234,765,34];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
// const newNumbers = numbers.map(num => num-num);

// console.log(newNumbers);

// const sentence = `The number is ${numbers.map(num => num + 6).join(' and ')}`;

// console.log(sentence);


// const findResult = numbers.find(item => item%2 && item > 30);

// console.log(findResult);

// const arr1 = [];
// console.log(!arr1 ? 'Falsy Value' : 'Truthy value');


// const filterResult = numbers.filter(number => number > 200);
// console.log(filterResult);



// calculation using reduce

// const sum = numbers.reduce((prev,curr) => prev + curr,0);
// console.log(sum);

const product = [
    {name: 'sope',price:150},
    {name: 'shampo',price:350},
    {name: 'ayna',price:200},
];

const totalPrice = product.reduce((acc,curr)=> acc+curr.price,0);

console.log(totalPrice);
