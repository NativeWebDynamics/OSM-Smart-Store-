
let id = document.querySelector("#Id-input");
let Month = document.querySelector("#Month-input");
let Year = document.querySelector("#Year-input");



$("#Product-error").hide()
$("#Product-error2").hide()
$("#Month-error").hide()
$("#Month-error2").hide()
$("#Year-error").hide()
$("#Year-error2").hide()

$("#Check").click(function (event) {


  if (id.value == "" || Month.value == "" || Year.value == "" ) {
    event.preventDefault();


    if (id.value == "") {
      $("#Product-error2").hide()
      $("#Product-error").show()
      id.classList.add("error");
    }

    if (Month.value == "") {
      Month.classList.add("error");
      $("#Month-error2").hide()
      $("#Month-error").show()
    }
    if (Year.value == "") {
      Year.classList.add("error");
      $("#Year-error2").hide()
      $("#Year-error").show()
    }
   
    //  when correcting missing values

    if (id.value != "") {
      $("#Product-error").hide();
      
      if (id.value>0 && id.value<=19) {

        $("#Product-error2").hide();
        id.classList.remove("error");
       
      
      }
      else {
        $("#Product-error2").show();
        id.classList.add("error");
      }

    }


    if (Month.value != "") {
      $("#Month-error").hide()
      if (Month.value >0 && Month.value<=12) {
        Month.classList.remove("error");
        $("#Month-error2").hide()
      }
      else {

        Month.classList.add("error");
        $("#Month-error2").show()
       
      }

    }
    if (Year.value != "") {
      $("#Year-error").hide()
      if (Year.value >=2022 && Year.value <=2032 ) {
        Year.classList.remove("error");
        $("#Year-error2").hide()
      }
      else {
        Year.classList.add("error");
        $("#Year-error2").show()
      
      }
    }
  
    //  Month should be positive

  }
  else {

    if (Month.value !="" || Year.value !="" || id.value != "") {
      $("#Product-error").hide()
      $("#Month-error").hide()
      $("#Year-error").hide()



    if (id.value != "") {
        $("#Product-error").hide();
        
        if (id.value>0 && id.value<=19) {
  
          $("#Product-error2").hide();
          id.classList.remove("error");
         
        
        }
        else {
            event.preventDefault();
          $("#Product-error2").show();
          id.classList.add("error");
        }
  
      }
  
  
      if (Month.value != "") {
        $("#Month-error").hide()
        if (Month.value >0 && Month.value<=12) {
          Month.classList.remove("error");
          $("#Month-error2").hide()
        }
        else {
            event.preventDefault();
          Month.classList.add("error");
          $("#Month-error2").show()
         
        }
  
      }
      if (Year.value != "") {
        $("#Year-error").hide()
        if (Year.value >=2022 && Year.value <=2032 ) {
          Year.classList.remove("error");
          $("#Year-error2").hide()
        }
        else {
            event.preventDefault();
          Year.classList.add("error");
          $("#Year-error2").show()
        
        }
      }

     

     

   
    
     


    }







  }


});
