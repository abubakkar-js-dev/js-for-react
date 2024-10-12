const person = {
    name: 'Abu Bakkar',
    gender: 'male',
    isStudent: true,
}

// let sentence = ""

// if(person.isStudent){
//     sentence = 'He is a student';
// }else{
//     sentence = 'He is not a student';
// }

// console.log(sentence);


// with ternary operator

// let sentence2 = "";

// person.isStudent ? sentence2 = 'He is a student.' : sentence2 = 'He is not a student.';

// console.log(sentence2);

const sentence3 = person.isStudent ? 'He is a student' : 'He is not a student';

console.log(sentence3);
