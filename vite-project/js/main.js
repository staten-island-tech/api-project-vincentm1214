const DOMSelectors={
  body:document.querySelector(".body"),
  card:document.querySelector('#card'),
  app:document.querySelector('#container'),
  org:document.querySelector('#question'),
  ger:document.querySelector('#answer'),
}
// import { DOMSelectors } from './dom';


//   import '../style/style.css'
let url = new URL('https://corsproxy.io/?https://opentdb.com/api.php?amount=10');
// const link="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";
async function question(url) {
  try {
      //         //requesting a response REST API's
      const response=await fetch(url);
             if(response.status !=200){
                 throw new Error("u suck"+response.status)
             }
              //convert response to JSON
             const data=await response.json();
             data.forEach(obj=>{
              DOMSelectors.app.insertAdjacentHTML(
                  ("beforeend",
                  `<div class="laquestion">
                  <h3> question: ${org}</h3>
                  <h3> answer: ${ger}</h3>
                  </div>`))
             })
          //    document.getElementById("api-response").textContent=data.content;
             console.log(data)
             data.results.forEach(question => console.log(question));
              document.querySelector('.apple').innerHTML = `<p>${data.results}</p>`;
         } catch (error) {
         }
}

question(url);