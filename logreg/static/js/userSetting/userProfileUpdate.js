
$("#image-picker").change(function (event) {
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image-preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}





let username = document.querySelector("#UserName");
let PhoneNumber = document.querySelector("#PhoneNumber");

let checkbox=document.querySelector("#ConfrimCheck1");
let checkboxLabel=document.querySelector("#ConfrimCheck1-label");
let Email = document.querySelector("#emailaddress");
let Organization = document.querySelector("#Organization-Name");
let Password = document.querySelector("#password-id")
let ConPass = document.querySelector("#passwordConfirm");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var letters =/[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


$("#Username-Error").hide()
$("#Username-Error2").hide()
$("#Phone-Error1").hide()
$("#Phone-Error2").hide()
$("#email-Error1").hide()
$("#email-Error2").hide()
$("#Orgaization-error").hide()
$("#Orgaization-error2").hide()
$("#Password-error").hide()
$("#CPassword-Error1").hide()
$("#CPassword-Error2").hide()

$("#Save-Profile-Update").click(function (event) {

    if (username.value == "" || PhoneNumber.value == "" || Email.value == "" || Organization.value == "" || Password.value == "" || ConPass.value == ""||checkbox.checked==false) {
        
        event.preventDefault();
        if (username.value == "") {
            username.classList.add("error");
            $("#Username-Error2").hide()
            $("#Username-Error").show()

        }
        if (PhoneNumber.value == "") {
            $("#Phone-Error1").show()
            $("#Phone-Error2").hide()
            PhoneNumber.classList.add("error");
        }
        if (checkbox.checked==false) {
            checkbox.classList.add("error-checkbox")
            checkboxLabel.classList.add("error-msgs");
        }

        if (Email.value == "") {
            Email.classList.add("error");
            $("#email-Error2").hide()
            $("#email-Error1").show()
        }
        if (Organization.value == "") {
            Organization.classList.add("error");
            $("#Orgaization-error2").hide()
            $("#Orgaization-error").show()
        }

        if (Password.value == "") {

            $("#Password-error").show()
            Password.classList.add("error");
        }
        if (ConPass.value == "") {
            $("#CPassword-Error2").hide()
            $("#CPassword-Error1").show()
            ConPass.classList.add("error");
        }

        // ------------ when correcting missing values-------------------------

        if (username.value != "") {
            $("#Username-Error").hide()
            console.log(username.value.match(letters))
            if (username.value.match(letters)) {
    
              username.classList.add("error");
             
              $("#Username-Error2").show()
              
              event.preventDefault();
    
            }
            else {
                $("#Username-Error2").hide();
                username.classList.remove("error");
              }
        }
        if (checkbox.checked==true) {
            checkbox.classList.remove("error-checkbox")
            checkboxLabel.classList.remove("error-msgs");
        }
        if (PhoneNumber.value != "") {
            $("#Phone-Error1").hide()
            if (PhoneNumber.value <= 0) {
              
                $("#Phone-Error2").show()
                PhoneNumber.classList.add("error");
            }
            else {
                PhoneNumber.classList.remove("error");
              
                $("#Phone-Error2").hide()
            }

        }

        if (Email.value != "") {
            $("#email-Error1").hide()
            if (Email.value != mailformat) {
               
               
                $("#email-Error2").show()
                Email.classList.add("error")


            }
            if (Email.value.match(mailformat)) {
                Email.classList.remove("error");
                $("#email-Error2").hide()
              

            }
        }

        if (Organization.value != "") {
            $("#Orgaization-error").hide()
            
            if (Organization.value.match(letters)) {
    
              Organization.classList.add("error");
             
              $("#Orgaization-error2").show()
              
              event.preventDefault();
    
            }
            else {
                $("#Orgaization-error2").hide();
                Organization.classList.remove("error");
              }
        }

     
        if (Password.value != "") {

            $("#Password-error").hide()
            Password.classList.remove("error");
        }
        if (ConPass.value != "") {

            if (ConPass.value != Password.value) {

                $("#CPassword-Error1").hide()
                $("#CPassword-Error2").show()
                ConPass.classList.add("error");
                Password.classList.add("error");
            }
            if (ConPass.value == Password.value) {

                $("#CPassword-Error1").hide()
                $("#CPassword-Error2").hide()
                ConPass.classList.remove("error");
                Password.classList.remove("error");
            }
        }
        //  Email should be positive

    }
    else {

        if (PhoneNumber.value != "" || Email.value != "" || ConPass.value != ""||Organization.value != ""||username.value != "") {
            if (PhoneNumber.value < 0) {

                event.preventDefault();
             
                $("#Phone-Error1").hide()
                $("#Phone-Error2").show()
                PhoneNumber.classList.add("error")
            }
            if (PhoneNumber.value > 0) {

                $("#Phone-Error1").hide()
                $("#Phone-Error2").hide()
                PhoneNumber.classList.remove("error")
            }
            if (username.value != "") {
                $("#Username-Error").hide()
                console.log(username.value.match(letters))
                if (username.value.match(letters)) {
        
                  username.classList.add("error");
                 
                  $("#Username-Error2").show()
                  
                  event.preventDefault();
        
                }
                else {
                    $("#Username-Error2").hide();
                    username.classList.remove("error");
                  }
            }
            if (Organization.value != "") {
                $("#Orgaization-error").hide()
                
                if (Organization.value.match(letters)) {
        
                  Organization.classList.add("error");
                 
                  $("#Orgaization-error2").show()
                  
                  event.preventDefault();
        
                }
                else {
                    $("#Orgaization-error2").hide();
                    Organization.classList.remove("error");
                  }
            }
    

            if (Password.value != "") {

                $("#Password-error").hide()
                Password.classList.remove("error");
            }

            if (ConPass.value != Password.value) {
                event.preventDefault();
                
                $("#CPassword-Error1").hide()
                $("#CPassword-Error2").show()
                ConPass.classList.add("error");
                Password.classList.add("error");
            }
            if (ConPass.value == Password.value) {

                $("#CPassword-Error1").hide()
                $("#CPassword-Error2").hide()
                ConPass.classList.remove("error");
                Password.classList.remove("error");
            }





            if(Email.value !=""){
               
                if (Email.value.match(mailformat)) {
                    Email.classList.remove("error");
                    $("#email-Error2").hide()
                    $("#email-Error1").hide()
    
                }
                else{
               
                    $("#email-Error1").hide()
                    $("#email-Error2").show()
                    Email.classList.add("error")
                    event.preventDefault();
            
    
                }
            }
            

        }



    }
})
