// const numbers = [2,34,55,65];
// const numbers2 = [ ...numbers];
// numbers2.unshift(594);

// console.log(numbers,numbers2);

const numbers3 = [64,23,75,234,765,34];

const [first,second,...all] = numbers3;
console.log(first,second);
console.log(all);