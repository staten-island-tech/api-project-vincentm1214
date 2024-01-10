const DOMSelectors={
  body:document.querySelector(".body"),
  card:document.querySelector('.card'),
  app:document.querySelector('#container'),
  org:document.querySelector('#question'),
  ger:document.querySelector('#answer'),
  button:document.querySelectorAll('.button')
 }
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
             function filt() {
              let boutons = document.querySelectorAll(".bouton")
              boutons.forEach((bouton) => bouton.addEventListener("click", function () {
                if(bouton.textContent.toLowerCase()==="show all"){document.querySelector(".card").innerHTML=''
              makecard(data.results);
            }else{
                  let difficult = bouton.textContent.toLowerCase()
                  let newArr = data.results.filter((quest) => quest.difficulty.includes(difficult))
                  document.querySelector(".card").innerHTML = ""
                  makecard(newArr)
            }}))
            }
           
            filt();
 //             data.results.forEach(question =>[
             }
            } catch (error) {
              console.log(error,"invalid")
              document.querySelector("h2").textContent="nothing man"
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
 