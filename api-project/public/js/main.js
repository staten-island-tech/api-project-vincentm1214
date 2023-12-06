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
// const URL=`https://api.quotable.io/random`;
// // const URLP=`pokemom/${search}`;
// async function getData(URL){
//     try {
//         //requesting a response REST API's
//         const response=await fetch(URL);
//         if(response.status !=200){
//             throw new Error(response.statusText)
//         }
//         //convert response to JSON
//         const data=await response.json();
//         document.querySelector("h1").textContent=data.content;
//     } catch (error) {


//     }
// }
// getData(URL);

const URL="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";

async function getCatImage(URL) {
    //const image = await fetch(URL);
    //console.log(image);
    try {
        //         //requesting a response REST API's
        const response=await fetch(URL);
               if(response.status !=200){
                   throw new Error(response.statusText)
               }
                //convert response to JSON
               const data=await response.json();
            //    document.getElementById("api-response").textContent=data.content;
               console.log(data)
               document.querySelector('.apple').innerHTML = `<p>${data.results}</p>`;
           } catch (error) {
           }
}
getCatImage(URL);