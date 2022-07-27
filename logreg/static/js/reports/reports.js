// hiding and showing of reports part
$("#SP-Date").hide()
$("#SP-Month").hide()
function validate(){
 var ddl = document.getElementById("sel1");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "op-date")
   {
    $("#SP-Month").hide()
    $("#SP-Date").show("slow")
   }
   if(selectedValue == "op-month"){
    $("#SP-Date").hide()
    $("#SP-Month").show("slow")
   }


}



$("#sel1").change(function(){
    validate();
})

// month validation
$("#Month-error").hide()
$("#Month-error2").hide()
let Month = document.querySelector("#Month-input");

$("#submit-month-report").click(function(){
    if ( Month.value == "" ) {
        event.preventDefault();
    
    
        if (Month.value == "") {
          Month.classList.add("error");
          $("#Month-error2").hide()
          $("#Month-error").show()
        }

        //  Month should be positive
    
      }
      else {
    
        if (Month.value !="") {
          
          $("#Month-error").hide()

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
          
    
        }
      }
})


// Specific Date Validation


let date1=document.querySelector("#date-input")

var today = new Date();
let curYear = today.getFullYear();
let curMonth = today.getMonth() + 1;
let curday = today.getDate();

curMonth = "0" + curMonth;

$("#date-error").hide()
$("#date-error2").hide()


$("#Submit-sp-date").click(function(){
    let dateStore = date1.value;
    let year = dateStore.slice(0, 4);
    let Month = dateStore.slice(5, 7);
    let Day = dateStore.slice(8, 10);
    if (date1.value == "" ){
        event.preventDefault();
            $("#date-error2").hide()
            $("#date-error").show()
            date1.classList.add("error");
    
       
    }
    else{
        if (date1.value != "") {
            $("#date-error").hide()
            if (curYear <= year && curMonth < Month) {
              if(curday < Day ){
                date1.classList.add("error");
                
                $("#date-error2").show()
             
              }
              else{
                date1.classList.add("error");
                $("#date-error2").show()
              
              }
              event.preventDefault();
            }
            else {
              if(curMonth === Month){
                if(curday < Day ){
                  date1.classList.add("error");
                  $("#date-error2").show()
                
                event.preventDefault();
                }
                else{
                  date1.classList.remove("error");
                  $("#date-error2").hide()
                }
              }
              else{
                date1.classList.remove("error");
                $("#date-error2").hide()
              }
             
            }
           
          }
    
     
    }
})