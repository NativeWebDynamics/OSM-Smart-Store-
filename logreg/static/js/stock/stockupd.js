
let id = document.querySelector("#product-id");
let name1 = document.querySelector("#product-name");

let price = document.querySelector("#product-price");
let quantity = document.querySelector("#product-Quantity");
let check1 = document.querySelector("#ConfrimCheck1")
let CheckLabel = document.querySelector("#ConfrimCheck1-label");
var letters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
console.log(CheckLabel)

$("#Name-error").hide()
$("#Name-error2").hide()
$("#price-error").hide()
$("#price-error2").hide()
$("#quantity-error").hide()
$("#quantity-error2").hide()

$("#updatedSave").click(function (event) {


  if (name1.value == "" || price.value == "" || quantity.value == "" || check1.checked == false) {
    event.preventDefault();


    if (name1.value == "") {
      $("#Name-error2").hide()
      $("#Name-error").show()
      name1.classList.add("error");
    }

    if (price.value == "") {
      price.classList.add("error");
      $("#price-error2").hide()
      $("#price-error").show()
    }
    if (quantity.value == "") {
      quantity.classList.add("error");
      $("#quantity-error2").hide()
      $("#quantity-error").show()
    }
    if (check1.checked == false) {
      check1.classList.add("check-input-error")
      CheckLabel.classList.add("check-error")
    }
    //  when correcting missing values

    if (name1.value != "") {
      $("#Name-error").hide();
      console.log(name1.value.match(letters))
      if (name1.value.match(letters)) {

        $("#Name-error2").show();
        name1.classList.add("error");
      
      }
      else {
        $("#Name-error2").hide();
        name1.classList.remove("error");
      }

    }


    if (price.value != "") {
      $("#price-error").hide()
      if (price.value < 1) {
        price.classList.add("error");
        $("#price-error2").show()
      }
      else {
        price.classList.remove("error");
        $("#price-error2").hide()
      }

    }
    if (quantity.value != "") {
      $("#quantity-error").hide()
      if (quantity.value < 1) {
        quantity.classList.add("error");
        $("#quantity-error2").show()
      }
      else {
        quantity.classList.remove("error");
        $("#quantity-error2").hide()
      }
    }
    if(check1.checked==true){
      check1.classList.remove("check-input-error")
      CheckLabel.classList.remove("check-error")
    }
    //  price should be positive

  }
  else {

    if (price.value < 1 || quantity.value < 1 || name1.value != "") {
      $("#Name-error").hide()
      $("#price-error").hide()
      $("#quantity-error").hide()
      price.classList.add("error")
      $("#price-error2").show()
      quantity.classList.add("error")
      $("#quantity-error2").show()



      if (name1.value != "") {
        console.log(name1.value.match(letters))
        if (name1.value.match(letters)) {

          name1.classList.add("error");
          $("#Name-error2").show();
          
          event.preventDefault();

        }
        else {
          $("#Name-error2").hide();
          name1.classList.remove("error");
        }

      }

      if(check1.checked==true){
        check1.classList.remove("check-input-error")
        CheckLabel.classList.remove("check-error")
      }


      if (price.value < 1) {
        price.classList.add("error")
        $("#price-error2").show()
        $("#price-error").hide()
        event.preventDefault();
      }
      if (price.value > 1) {
        $("#price-error").hide()
        $("#price-error2").hide()
        price.classList.remove("error");
      }
      if (quantity.value < 1) {
        quantity.classList.add("error");
        $("#quantity-error").hide()
        $("#quantity-error2").show()
        event.preventDefault();
      }
      if (quantity.value > 1) {
        $("#quantity-error").hide()
        $("#quantity-error2").hide()
        quantity.classList.remove("error");
      }


    }







  }


});
