const DOMSelectors={
  body:document.querySelector(".body"),
  card:document.querySelector('#card'),
  app:document.querySelector('#container'),
  org:document.querySelector('#question'),
  ger:document.querySelector('#answer'),
 
 
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
             console.log(data.results);
             makecard(data.results);
 //             data.results.forEach(question =>[
              console.log(question.question),
              console.log(question.answer)
             ;
              document.querySelector('.apple').innerHTML = `<p>${data.results}</p>`;
         } catch (error) {
         }
 }
 
 
 console.log(data.results)
 question(URL);
 
 
 function makecard(questions) {
 questions.forEach(question => {
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
 `<div class="laquestion">
      <h2 class="question">${question.question}</h2>
      <h3 class="answer">${question.correct_answer}</h3>
 </div>`);
 })};
 