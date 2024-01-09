const DOMSelectors={
  body:document.querySelector(".body"),
  card:document.querySelector('.card'),
  app:document.querySelector('#container'),
  org:document.querySelector('#question'),
  ger:document.querySelector('#answer'),
  h2:document.querySelectorAll('.h2')
 
 };
 
import '../style/style.css'
 const URL="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";
 async function getData(URL) {
  try {
      //         //requesting a response REST API's
      const response=await fetch(URL);
             if(response.status !=200){
                 throw new Error(response.status);
             }else{
              //convert response to JSON
             const data=await response.json();
          //    document.getElementById("api-response").textContent=data.content;
             console.log(data);
             makecard(data.results);
 //             data.results.forEach(question =>[
             }
            } catch (error) {
              console.log(error,"invalid")
              document.querySelector("h2").innerHTML="nothing man"
            }
 //              document.querySelector('.apple').innerHTML = `<p>${data.results}</p>`;
        
 }
 
 
 getData(URL);
 
 
 function makecard(questions) {
 questions.forEach((question)=> DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
 `<div class="laquestion">
      <h2 class="question">${question.question}</h2>
      <h3 class="answer">${question.correct_answer}</h3>`
    )
  )
 };
 