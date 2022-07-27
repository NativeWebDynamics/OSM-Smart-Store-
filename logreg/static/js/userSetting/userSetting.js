let threshold= document.querySelector("#threshold-input");
console.log(threshold)



$("#threshold-error1").hide()
$("#threshold-error2").hide()
$("#user-setting-apply").click(function (event) {

  
  if (threshold.value == "" ) {
    event.preventDefault();
    
  
 
    if (threshold.value == "") {
      threshold.classList.add("error");
      $("#threshold-error2").hide()
      $("#threshold-error1").show()
    }
  
 
    //  when correcting missing values
  
   
    
    if (threshold.value != "") {
        $("#threshold-error1").hide()
      if (threshold.value < 1) {
        threshold.classList.add("error");
        $("#threshold-error2").show()
      }
      else {
        threshold.classList.remove("error");
        $("#threshold-error2").hide()
      }

    }
   

  }
  else {

    if (threshold.value < 1 ) {
     
      $("#threshold-error1").hide()
   
      threshold.classList.add("error")
      $("#threshold-error2").show()
      
      

      
    
     
      if (threshold.value != "" && threshold.value > 1) {
        threshold.classList.remove("error");
        $("#threshold-error2").hide()
      }

      event.preventDefault();
    }
    if (threshold.value > 1 ) {
      threshold.classList.remove("error");
      $("#threshold-error2").hide()
    }
  




   
    

  }


});
