import '../style/style.css'
const URL="https://corsproxy.io/?https://opentdb.com/api.php?amount=10";

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