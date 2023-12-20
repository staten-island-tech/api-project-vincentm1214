//   import '../style/style.css'
const URL="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";

//  function insertCards(quiz){
//      quiz.forEach(x) => {
//     DOMSelectors.container.insertAdjacentHTML(
//      "beforeend",
//      `<div class="card">
//          <h3 class = "name">${x.name}</h3>
//          <img src="${x.image}" class="cardimg">
//          <h4 class = ${x.answer}></h4>
//      </div> `)}}

function makecard(){
    let org= DOMSelectors.question
    let ger=DOMSelectors.answer
    let lop=DOMSelectors.wrong
    let cof=DOMSelectors.hardness
    let abf=DOMSelectors.choice
    
}


async function question(URL) {
    //const image = await fetch(URL);
    //console.log(image);
    try {
        //         //requesting a response REST API's
        const response=await fetch(URL);
               if(response.status !=200){
                   throw new Error("u suck"+response.status)
               }
                //convert response to JSON
               const data=await response.json();
            //    document.getElementById("api-response").textContent=data.content;
               console.log(data)
               data.results.forEach(question => console.log(question));
                document.querySelector('.apple').innerHTML = `<p>${data.results}</p>`;
           } catch (error) {
           }
}

question(URL);


