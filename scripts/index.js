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

    

})