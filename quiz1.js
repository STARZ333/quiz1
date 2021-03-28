function change() 
{     $("#cgu").html("CSIE@CGU");
      $("#bb").html("怎麼那麼棒！！");
      /*var header = document.getElementById("cgu"); 
      header.innerHTML = "CSIE@CGU";    
      var $para = $("#bb")[0];  
      para.innerHTML = "怎麼那麼棒！！";   */
            }  
function newbutton(){
      var change_button="<button id='change'>Change this document</button>";
      $("body").append(change_button);
      $("#change").click(change);
      /*var btn = document.createElement("BUTTON"); 
      btn.innerHTML = "Change this document";
      document.body.appendChild(btn); 
      btn.addEventListener("click",change);
      */
}
$("#btn").click(newbutton);