console.log("connected");

function getElement(id){
    return document.getElementById(id);
    
}
getElement("card-container").addEventListener("click",function(event){
   
    // love button functionality
    if(event.target.className.includes("love-btn")){
        heartCount = Number( getElement("heart-count").innerText);
         getElement("heart-count").innerText = heartCount+1
       
    }
    // console.log(event.target)

     if(event.target.closest(".call-btn")){
      const callBtn = event.target.closest(".call-btn")
     
        const serviceName= callBtn.parentNode.parentNode.children[1].children[1].innerText;
         
        // console.log(event.target.parentNode.parentNode.children[1].children[0].innerText)
        const serviceHeadlineName = callBtn.parentNode.parentNode.children[1].children[0].innerText;
       
        const serviceNumber = callBtn.parentNode.parentNode.children[1].children[2].innerText;
       
        const numberOfCoin =Number(getElement("coin-count").innerText) ;
        if(numberOfCoin>=20){
             getElement("coin-count").innerText = numberOfCoin-20;
             alert(`📞 Calling ${serviceName} ${serviceNumber}...`);
            time = new Date().toLocaleTimeString();
            let historyContainer = getElement("history-container");
            let div = document.createElement("div");
            div.innerHTML=`
              <div class="flex justify-between items-center bg-[#fafafa] px-3 py-4 rounded-lg shadow-lg">
                <div >
                    <p class="text-lg font-semibold">${serviceHeadlineName}</p>
                    <p class="text-[#5c5c5c]">${serviceNumber}</p>
                </div>
                <div>
                    <p>${time}</p>
                </div>
            </div>

            `
            historyContainer.appendChild(div);


        }
        else{
            alert("❌ You don't have enough coins. It takes at least 20 coins to make a call.")
        }


    }

     // copies functionality 
    if(event.target.closest(".copy-btn")){
        const copyBtn = event.target.closest(".copy-btn");
         const serviceNumber = copyBtn.parentNode.parentNode.children[1].children[2].innerText;
         console.log(serviceNumber);

       const copyCount = Number( getElement("copy-count").innerText);
       getElement("copy-count").innerText = copyCount+1;

         navigator.clipboard.writeText(serviceNumber)
         .then(()=>{
            alert(`Number has been copied:${serviceNumber}`);
         })


    }

    

})


// clear button functionality 
getElement("clear-btn").addEventListener("click",function(){
     let historyContainer = getElement("history-container");
     historyContainer.innerHTML="";
})