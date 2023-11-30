// //get a promise
// function greet(name){
//     const greetPromise=new Promise(function(resolve,reject){
//         resolve(`Hello ${name}`);
//     });
//         return greetPromise;
//     }

// const mandy=greet("Mandy");
// //handle the promise
// mandy.then((result)=>{
//     //putting data into html
//     console.log(result);
// });
const URL=`https://opentdb.com/api.php?amount=10`;
// const URLP=`pokemom/${search}`;
async function getData(URL){
    try {
        //requesting a response REST API's
        const response=await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText)
        }
        //convert response to JSON
        const data=await response.json();
        document.querySelector("h1").textContent=data.content;
    } catch (error) {
        // console.log(error,"haha");
        // document.querySelector("h1").textContent= "no rizz"
    }
}
getData(URL);