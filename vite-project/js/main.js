import { DOMSelectors } from "./dommy";
   import '../style/style.css'


// let url = new URL('https://corsproxy.io/?https://opentdb.com/api.php?amount=10');
 const link="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";
async function question(link) {
  try {
      //         //requesting a response REST API's
      const response=await fetch(link);
             if(response.status !=200){
                 throw new Error("u suck"+response.status)
             }
              //convert response to JSON
             const data=await response.json();
             data.forEach(obj=>{
              DOMSelectors.app.insertAdjacentHTML(
                  ("beforeend",
                  `<div class="laquestion">
                  <h2> question: ${obj.org}</h2>
                  <h3> answer: ${obj.ger}</h3>
                  </div>`))
             })
          //    document.getElementById("api-response").textContent=data.content;
             console.log(data)
             data.results.forEach(question => console.log(question));
              document.querySelector('.apple').innerHTML = `<p>${data.results}</p>`;
         } catch (error) {

         }
}

question(link);