function something(){
    console.log('Normal function');
}

const something2 = () => console.log('arrow Function');
something2();

const addArray = (numbers) =>{
    if(!Array.isArray(numbers))
        return 'Invalid input.'
  
    let sum = 0;
    for(const num of numbers)
        sum += num;

    return sum;
}

const numlist = [1,2,3,4,5,6,7,8,9];

const output = addArray(numlist);
console.log(output);