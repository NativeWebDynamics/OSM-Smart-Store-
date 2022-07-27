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



$(".missing-value").hide();
let id = document.querySelector("#product-id");
let name1 = document.querySelector("#product-name");

let price = document.querySelector("#product-price");
let quantity = document.querySelector("#product-quan");
var letters =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
$("#Save-button").click(function (event) {


  if (name1.value == "" || price.value == "" || quantity.value == "") {
    event.preventDefault();
    $(".missing-value").show("slow");
  
    if (name1.value == "") {
      name1.classList.add("error");
    }
   
    if (price.value == "") {
      price.classList.add("error");
    }
    if (quantity.value == "") {
      quantity.classList.add("error");
    }

    //  when correcting missing values
    if (id.value != "") {
      id.classList.remove("error");
    }
    if (name1.value != "") {
      console.log(name1.value.match(letters))
       if(name1.value.match(letters)){
        
         name1.classList.add("error");
         alert("name contain only alphabets")
         
       }
       else{
         name1.classList.remove("error");
       }
       
     }
    
    if (price.value != "") {
      if (price.value < 1) {
        price.classList.add("error");
        alert("price should be greater than zero");
      }
      else {
        price.classList.remove("error");
      }

    }
    if (quantity.value != "") {
      if (quantity.value < 1) {
        quantity.classList.add("error");
        alert("quantity should be greater than zero");
      }
      else {
        quantity.classList.remove("error");
      }
    }
    //  price should be positive

  }
  else {

    if (price.value != "" ||quantity.value !=""||name1.value != "" ) {
     
     
      if (name1.value != "") {
        console.log(name1.value.match(letters))
         if(name1.value.match(letters)){
           console.log("name sdsa")
           name1.classList.add("error");
           alert("name contain only alphabets")
           event.preventDefault();           

         }
         else{
           name1.classList.remove("error");
         }
         
       }

      if (price.value <1 ) {
        price.classList.add("error")
      alert("price should be greater than zero");
      event.preventDefault();
      }
      if (price.value > 1) {
        price.classList.remove("error");
      }
      if (quantity.value < 1) {
        quantity.classList.add("error");
        alert("quantity should be greater than zero");
        event.preventDefault();
      }
      if (quantity.value > 1) {
        quantity.classList.remove("error");
      }

     

     
    }
   

// Quantity
// if (quantity.value < 1) {

//   // if( id.value!="" ){
//   //   id.classList.remove("error");
//   // }
//   if (name1.value != "") {
//     name1.classList.remove("error");
//   }

//   if (price.value != "") {
//     price.classList.remove("error");
//   }
//   if (quantity.value != "") {
//     quantity.classList.remove("error");
//   }
//   quantity.classList.add("error")
//   alert("quantity should be greater than zero");

//   event.preventDefault();
// }
// if ( quantity.value > 1) {
//   quantity.classList.remove("error");
// }





   
    

  }


});


// update button 
// let update = document.querySelector("#update-button");
// let parent_row = update.parentElement.parentElement;

// let updatedDate = parent_row.firstElementChild.firstElementChild;
// let updatedName = parent_row.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
// let updatedSalary = parent_row.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
// let updatedquantity = parent_row.lastElementChild.previousElementSibling.firstElementChild;
// let updatedShift = parent_row.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
// let updatedDutyRole = parent_row.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild;


// console.log(parent_row)







// $("#update-button").click(function (event) {
//   $("#update-button").hide()
//   $("#delete-button").hide()
 
//   $("#Save-button-1").show("slow")
//   updatedDate.removeAttribute("disabled")
//   updatedDate.setAttribute("type", "date")

//   updatedName.removeAttribute("disabled")
//   updatedSalary.removeAttribute("disabled")
//   updatedquantity.removeAttribute("disabled")
//   updatedShift.removeAttribute("disabled")
//   updatedDutyRole.removeAttribute("disabled")


// })


// $("#Save-button-1").click(function () {
//   $("#Save-button-1").hide()
//   $("#update-button").show("600")
//   $("#delete-button").show("600")
//   updatedDate.setAttribute("disabled","disabled")
//   updatedDate.setAttribute("type", "text")

//   updatedName.setAttribute("disabled","disabled")
//   updatedSalary.setAttribute("disabled","disabled")
//   updatedquantity.setAttribute("disabled","disabled")
//   updatedShift.setAttribute("disabled","disabled")
//   updatedDutyRole.setAttribute("disabled","disabled")
// })
