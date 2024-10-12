fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

// const base_url = 'https://jsonplaceholder.typicode.com/'

// const showData = async()=>{
//     const url = `${base_url}/todos/5`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }

// showData();