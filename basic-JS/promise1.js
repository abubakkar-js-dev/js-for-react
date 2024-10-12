// const promises = new Promise((resolve,reject)=>{
//     console.log('This is a promise');
//     let error = false;
//     setTimeout(() => {
//         if(!error){
//             resolve('promise is resolved');
//         }else{
//             reject('rejected the promise');
//         }
//     }, 3000);
// });

// promises
// .then(res =>{
//     console.log(res);
// })
// .catch(err =>{
//    console.log(err);
// })
// .finally(()=>{
//     console.log('This is finally block');
// })

// const getResponse = async () =>{
//     const response = await promises;
//     try{
//         console.log(response);
//     }catch(err){
//         console.log(err);
//     }

// }
// getResponse();

const promise =  new Promise((res,rej)=>{
    console.log('Promise is created');
    const err = false;
    setTimeout(() => {
        if(!err){
            res('resolved promise');
        }else{
            rej('rejected promise');
        }
    }, 3000);
});

// const promiseRestult = async ()=>{

//     const response = await promise;
//     console.log(response);

// }

// promise
// .then(response =>{
//     console.log(response);
// })
// .catch(err =>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log('I am from finally block.')
// })

const promiseRestult = async ()=>{
    const response = await promise;
    try{
        console.log(response);
    }catch(err){
        console.log(err);
    }finally{
        console.log('finally block run.')
    }
}

promiseRestult();