const student1 = {
    name: 'Sathi',
    age: 20,
    department: 'Bangla',
}

// const student2 = {...student1};

// student2.phone = 'Vivo';
// student2.name = 'Mr. Abc';

// console.log(student1,student2);

const {name: myfriend, ...otherInfo} = student1;
console.log(myfriend);
console.log(otherInfo);