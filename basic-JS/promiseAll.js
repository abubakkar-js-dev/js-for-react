const promise1 = new Promise((res,rej)=>{
    const err = false;
    setTimeout(() => {
        if(!err){
            res('resolved promise 1')
        }else{
            rej('rejected promise 1')
        }
    }, 1000);
});
const promise2 = new Promise((res,rej)=>{
    setTimeout(() => {
       res('resolved promise 2')
    // rej('rejected promise 2')
    }, 3000);
});
const promise3 = new Promise((res,rej)=>{
    setTimeout(() => {
       res('resolved promise 3')
    }, 2000);
});

// promise1
// .then((res)=>{
//     console.log(res);
//     promise2.then(res =>{
//         console.log(res);
//         promise3.then(res=>{
//             console.log(res);
//         })
//     })
// }).catch(err=>{
//     console.log(err);
// })

// Promise.all([promise1,promise2,promise3])
// .then(res=> console.log(res))
// .catch(err => console.log(err));

const promiseAll = async () => {
    const resAll = await Promise.all([promise1,promise2,promise3]);
    console.log(resAll);
}
promiseAll();