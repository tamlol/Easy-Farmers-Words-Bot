function claim(){

   if(document.getElementsByClassName('plain-button short undefined')[0].innerText == "OK"){
    document.getElementsByClassName("plain-button short undefined")[0].click();
   }
    
    if(document.getElementsByClassName("button-section set-height")[0].innerText == "Mine"){
        document.getElementsByClassName("button-section set-height")[0].click();
      }
};

setInterval(claim, 20000);
