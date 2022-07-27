
let id = document.querySelector("#emp-id");
let name1 = document.querySelector("#emp-name");
let date1=document.querySelector("#emp-date")
let salary = document.querySelector("#emp-salary");
let password = document.querySelector("#emp-password");
let check1=document.querySelector("#ConfrimCheck1")
let CheckLabel=document.querySelector("#ConfrimCheck1-label");
var letters =/[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
// Current Date

var today = new Date();
let curYear = today.getFullYear();
let curMonth = today.getMonth() + 1;
let curday = today.getDate();

curMonth = "0" + curMonth;
// console.log(curMonth)


$("#Name-error").hide()
$("#Name-error2").hide();
$("#salary-error").hide()
$("#salary-error2").hide()
$("#date-error").hide()
$("#date-error2").hide()
$("#password-error").hide()

$("#updatedSave").click(function (event) {
    let dateStore = date1.value;
    let year = dateStore.slice(0, 4);
    let Month = dateStore.slice(5, 7);
    let Day = dateStore.slice(8, 10);
  
    if (name1.value == "" || salary.value == "" || date1.value == "" || password.value == "" || check1.checked==false) {
      event.preventDefault();
      
    
      if (name1.value == "") {
        $("#Name-error2").hide();
          $("#Name-error").show()
          name1.classList.add("error");
      }

      if (date1.value == "") {
        $("#date-error2").hide()
        $("#date-error").show()
        date1.classList.add("error");

      }
     
      if (salary.value == "") {
        salary.classList.add("error");
        $("#salary-error2").hide()
        $("#salary-error").show()
      }
      if (password.value == "") {
        password.classList.add("error");
        $("#password-error").show()
      }
      if(check1.checked==false){
        check1.classList.add("check-input-error")
        CheckLabel.classList.add("check-error")
      }

      //  when correcting missing values
    
      if (name1.value != "") {
        $("#Name-error").hide();
        console.log(name1.value.match(letters))
         if(name1.value.match(letters)){
           console.log("name sdsa")
           $("#Name-error2").show();
           name1.classList.add("error");
           alert("name contain only alphabets")
         }
         else{
          $("#Name-error2").hide();
           name1.classList.remove("error");
         }
         
       }
      
      if (password.value != "") {
        password.classList.remove("error");
        $("#password-error").hide();
      }

      // Date 

      if (date1.value != "") {

        $("#date-error").hide()
        if (curYear <= year && curMonth < Month) {
          if(curday < Day ){
            date1.classList.add("error");
            $("#date-error2").show()
          alert("Sorry you selected invalid Date");
          }
          else{
            date1.classList.add("error");
            $("#date-error2").show()
          alert("Sorry you selected invalid Date");
          }
          
        }
        else {
          if(curMonth === Month){
            if(curday < Day ){
              date1.classList.add("error");
              $("#date-error2").show()
            alert("Sorry you selected invalid Date");
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

      if (salary.value != "") {
          $("#salary-error").hide()
        if (salary.value < 1) {
          salary.classList.add("error");
          $("#salary-error2").show()
        }
        else {
          salary.classList.remove("error");
          $("#salary-error2").hide()
        }
  
      }
   
      if(check1.checked==true){
        check1.classList.remove("check-input-error")
        CheckLabel.classList.remove("check-error")
      }
      //  salary should be positive
  
    }
    else {
     
      $("#Name-error2").hide();
      $("#salary-error").hide()
      $("#salary-error2").hide()
      $("#date-error").hide()
      $("#date-error2").hide()
     
      
      if (salary.value < 1 || date1.value != ""||name1.value != "") {
        if (name1.value != "") {
          $("#Name-error").hide()
          if(name1.value.match(letters)){
            
            name1.classList.add("error");
            $("#Name-error2").show();
            event.preventDefault();
          }
          else{
            name1.classList.remove("error");
            $("#Name-error2").hide();
          }
          
        }
        if (password.value != "") {
          $("#password-error").hide()
      
          password.classList.remove("error");
        }
  
        if (salary.value < 1 ) {
             salary.classList.add("error")
             $("#salary-error2").show()
             alert("salary should be positive");
             event.preventDefault();
        }
        if (salary.value > 1 ) {
          salary.classList.remove("error")
          $("#salary-error2").hide()
        }
        
        if (date1.value != "") {
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

  
      // if  (salary.value < 1 ) {
      //   $("#Name-error").hide()
      //   $("#salary-error").hide()
      //   $("#password-error").hide()
      //   $("#date-error").hide()
      //   $("#date-error2").hide()
      //   salary.classList.add("error")
      //   $("#salary-error2").show()
       
       
       
  
        
      //   if (name1.value != "") {
      //     name1.classList.remove("error");
      //   }
      //   if(check1.checked==true){
      //     check1.classList.remove("check-input-error")
      //     CheckLabel.classList.remove("check-error")
      //   }
      //   if (password.value != "") {
      //     password.classList.remove("error");
      //     $("#password-error").hide();
      //   }
      //   if (date1.value != "") {
      //     if (curYear <= year && curMonth < Month) {
      //       if(curday < Day ){
      //         date1.classList.add("error");
      //         $("#date-error2").show()
           
      //       }
      //       else{
      //         date1.classList.add("error");
      //         $("#date-error2").show()
            
      //       }
      //       event.preventDefault();
      //     }
      //     else {
      //       if(curMonth === Month){
      //         if(curday < Day ){
      //           date1.classList.add("error");
      //           $("#date-error2").show()
              
      //         event.preventDefault();
      //         }
      //         else{
      //           date1.classList.remove("error");
      //           $("#date-error2").hide()
      //         }
      //       }
      //       else{
      //         date1.classList.remove("error");
      //         $("#date-error2").hide()
      //       }
           
      //     }
         
      //   }
        
        
  
      //   if (salary.value != "" && salary.value > 1) {
      //     salary.classList.remove("error");
      //     $("#salary-error2").hide()
      //   }
  
  
      //   event.preventDefault();
      
      // }

      // //  its ok
      // if (date1.value != "") {
      //   $("#date-error").hide()
      

      //   if (name1.value != "") {
      //     name1.classList.remove("error");
      //     $("#Name-error").hide()
      //   }
      //   if(check1.checked==true){
      //     check1.classList.remove("check-input-error")
      //     CheckLabel.classList.remove("check-error")
      //   }
      //   if (password.value != "") {
      //     password.classList.remove("error");
      //     $("#password-error").hide();
      //   }
      //   if (salary.value != "" && salary.value > 1) {
      //     salary.classList.remove("error");
      //     $("#salary-error").hide()
      //     $("#salary-error2").hide()
      //   }

      //   if (curYear <= year && curMonth < Month) {
      //     if(curday < Day ){
      //       date1.classList.add("error");
      //       $("#date-error2").show()
         
      //     }
      //     else{
      //       date1.classList.add("error");
      //       $("#date-error2").show()
          
      //     }
      //     event.preventDefault();
      //   }
      //   else {
      //     if(curMonth === Month){
      //       if(curday < Day ){
      //         date1.classList.add("error");
      //         $("#date-error2").show()
            
      //       event.preventDefault();
      //       }
      //       else{
      //         date1.classList.remove("error");
      //         $("#date-error2").hide()
      //       }
      //     }
      //     else{
      //       date1.classList.remove("error");
      //       $("#date-error2").hide()
      //     }
         
      //   }
       
      // }


  
      // if (salary.value > 1 ) {
      //   salary.classList.remove("error");
      //   $("#salary-error2").hide()
      // }
    
  
  
  
  
  
  
     
      
  
    }
  
  
  });
  
  