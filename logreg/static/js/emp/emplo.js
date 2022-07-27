let parentTr = document.querySelector("#sample-fields");

let addbutton = document.querySelector("#Add-button");


// addbutton.addEventListener('click',function(){
//     console.log("hello");
//     parentTr.classList.remove("fields");
// });
$("#close1-button").hide();
$("#Save-button-1").hide();


$("#Add-button").click(function () {

  if (parentTr.classList.contains("fields") === true) {
    $("#sample-fields").show("slow");
    parentTr.classList.remove("fields");
    $("#Add-button").hide();
    $("#close1-button").show()
  }


});

$("#close1-button").click(function () {

  if (parentTr.classList.contains("fields") === false) {
    $("#sample-fields").hide("slow");
    parentTr.classList.add("fields");
    $("#close1-button").hide();
    $("#Add-button").show();
    $(".missing-value").hide();
  }


});



//  validations 


// Current Date

var today = new Date();
let curYear = today.getFullYear();
let curMonth = today.getMonth() + 1;
let curday = today.getDate();

curMonth = "0" + curMonth;
// console.log(curMonth)

$(".missing-value").hide();
let id = document.querySelector("#emp-id");
let name1 = document.querySelector("#emp-name");
let date = document.querySelector("#emp-date");
let salary = document.querySelector("#num");
let password = document.querySelector("#emp-password");
var letters =/[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
$("#Save-button").click(function (event) {
  // getting Date form input field
  let dateStore = date.value;
  let year = dateStore.slice(0, 4);
  let Month = dateStore.slice(5, 7);
  let Day = dateStore.slice(8, 10);
  // console.log(Month)
  if (name1.value == "" || date.value == "" || salary.value == "" || password.value == "") {
    event.preventDefault();
    $(".missing-value").show("slow");
    // if( id.value=="" ){
    //   id.classList.add("error");
    // }
    if (name1.value == "") {
      name1.classList.add("error");

    }
    if (date.value == "") {
      date.classList.add("error");
    }
    if (salary.value == "") {
      salary.classList.add("error");
    }
    if (password.value == "") {
      password.classList.add("error");
    }

    //  when correcting missing values
    if (id.value != "") {
      id.classList.remove("error");
    }
    if (name1.value != "") {
     console.log(name1.value.match(letters))
      if(name1.value.match(letters)){
        console.log("name sdsa")
        name1.classList.add("error");
        alert("name contain only alphabets")
      }
      else{
        name1.classList.remove("error");
      }
      
    }
    if (date.value != "") {


      if (curYear <= year && curMonth < Month) {
        if (curday < Day) {
          date.classList.add("error");
          alert("Sorry you selected invalid Date");
        }
        else {
          date.classList.add("error");
          alert("Sorry you selected invalid Date");
        }

      }
      else {
        if (curMonth === Month) {
          if (curday < Day) {
            date.classList.add("error");
            alert("Sorry you selected invalid Date");
          }
          else {
            date.classList.remove("error");
          }
        }
        else {
          date.classList.remove("error");
        }

      }
    }
    if (salary.value != "") {
      if (salary.value < 1) {
        salary.classList.add("error");
        alert("salary should be positive");
      }
      else {
        salary.classList.remove("error");
      }

    }
    if (password.value != "") {
      password.classList.remove("error");
    }
    //  salary should be positive

  }

  // checking of all values after entering 
  else {
    if (salary.value < 1 || date.value != ""||name1.value != "") {
      if (name1.value != "") {
     
        if(name1.value.match(letters)){
          
          name1.classList.add("error");
          alert("name should contain alphabets")
          event.preventDefault();
        }
        else{
          name1.classList.remove("error");
        }
        
      }

      if (salary.value < 1 ) {
           salary.classList.add("error")
           alert("salary should be positive");
           event.preventDefault();
      }
      if (salary.value > 1 ) {
        salary.classList.remove("error")
      
      }
      
    if (curYear <= year && curMonth < Month) {
      if(curday < Day ){
        date.classList.add("error");
      alert("Sorry you selected invalid Date");
      }
      else{
        date.classList.add("error");
      alert("Sorry you selected invalid Date");
      }
      event.preventDefault();
    }
    else {
      if(curMonth === Month){
        if(curday < Day ){
          date.classList.add("error");
        alert("Sorry you selected invalid Date");
        event.preventDefault();
        }
        else{
          date.classList.remove("error");
        }
      }
      else{
        date.classList.remove("error");
      }

    }
      if (password.value != "") {
        password.classList.remove("error");
      }


    }

  

  }


});


