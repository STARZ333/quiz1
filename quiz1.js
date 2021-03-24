function change() 
{     var header = document.getElementById("cgu"); 
      header.innerHTML = "CSIE@CGU";    
      var para = document.getElementById("bb");  
      para.innerHTML = "怎麼那麼棒！！";   
            }  
function newbutton(){
      var btn = document.createElement("BUTTON"); 
      btn.innerHTML = "Change this document";
      document.body.appendChild(btn); 
      btn.addEventListener("click",change);
    }