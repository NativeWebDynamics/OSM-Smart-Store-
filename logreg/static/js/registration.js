

function optionalField(){
 let id=document.getElementById("flexSwitchCheckChecked");
 let input=document.querySelector("#securtiy-Questionfield");
 let postition= input.firstElementChild;
 let select_box=document.querySelector("#selectitem");

 if(id.hasAttribute("checked")){
     console.log("ok added");
    
     id.removeAttribute("checked");
     input.style.cssText+="visibility:hidden"
     select_box.setAttribute("disabled","disabled");
     
 }
 else{
     id.setAttribute("checked","checked");
     input.style.cssText+="visibility:visible"
     select_box.removeAttribute("disabled");
 }

}