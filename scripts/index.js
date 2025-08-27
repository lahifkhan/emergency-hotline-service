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

        }
        else{
            alert("❌ You don't have enough coins. It takes at least 20 coins to make a call.")
        }

        



    }

    

})