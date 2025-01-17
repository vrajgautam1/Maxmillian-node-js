async function timer() {
    let timeOutId = new Promise(resolve =>{
        setTimeout(() => {
            resolve("async Timer is done");
        }, 1000);
    })
    // let result = await timeOutId
    return timeOutId
}



const fetchData = () =>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise done")
        }, 1500)    
    })
    return promise   
}

async function fetchandprocessdata(){
    const data1 = await fetchData()
    console.log(data1, 1)

    const data1a = await timer()
    console.log(data1a, 2)

    const data2 = await fetchData()
    console.log(data2, 3)

    const data2a = await timer()
    console.log(data2a, 4)

    const data3 = await fetchData()
    console.log(data3, 5)

    const data3a = await timer()
    console.log(data3a, 6)
}

fetchandprocessdata()

// setTimeout(() => {
//     console.log("Timer is done");
//     timer()
//     fetchData().then(text =>{
//         console.log(text)
//         return fetchData()
//     }).then(text2 =>{
//         console.log(text2)
//     })
// }, 1000);

console.log("line 1");
console.log("line 2");
