const DOMSelectors={
    body:document.querySelector(".body"),
    card:document.querySelector('#card'),
    app:document.querySelector('#container'),
    org:document.querySelector('#question'),
    ger:document.querySelector('#answer'),
    lop:document.querySelector('#wrong'),
    cof:document.querySelector('#difficulty'),
    abf:document.querySelector('#category'),
}
//   import '../style/style.css'
const URL="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";
async function question(URL) {
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

//  function insertCards(quiz){
//      quiz.forEach(x) => {
//     DOMSelectors.container.insertAdjacentHTML(
//      "beforeend",
//      `<div class="card">
//          <h3 class = "name">${x.name}</h3>
//          <img src="${x.image}" class="cardimg">
//          <h4 class = ${x.answer}></h4>
//      </div> `)}}

function makecard(e){
    let org= DOMSelectors.question.value;
    let ger=DOMSelectors.answer.value;
    let lop=DOMSelectors.wrong.value;
    let cof=DOMSelectors.hardness.value;
    let abf=DOMSelectors.choice.value;
    DOMSelectors.card.insertAdjacentHTML("beforeend",
`<div class="laquestion">
<h3> question: ${org}</h3>
<h3> answer: ${ger}</h3>
<h3> choices: ${abf}</h3>
<h3> wrong: ${lop}</h3>
<h3> hardness: ${cof}</h3>
</div>`); 
}



