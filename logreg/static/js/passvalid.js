let Password = document.querySelector("#Npas")
let ConPass = document.querySelector("#CNpas");



$("#Npass-error1").hide()
$("#CNpass-error1").hide()
$("#CNpass-error2").hide()

$("#Changecredbutton").click(function (event) {
    
    if (Password.value=="" ||ConPass.value==""){
        event.preventDefault();
        if (Password.value == "") {

            $("#Npass-error1").show()
            
        }
        if (ConPass.value == "") {
            $("#CNpass-error2").hide()
            $("#CNpass-error1").show()
            
        }
        //  when correcting the values
        if (Password.value != "") {

            $("#Npass-error1").hide()
            
        }
        if (ConPass.value != "") {


            if (ConPass.value != Password.value) {

                $("#CNpass-error1").hide()
                $("#CNpass-error2").show()
                
            }
            if (ConPass.value == Password.value) {

                $("#CNpass-error1").hide()
                $("#CNpass-error2").hide()
                
            }

        }
 

    }
    if ( Password.value!=""|| ConPass.value != "") {
        if (Password.value != "") {

            $("#Npass-error1").hide()
            Password.classList.remove("error");
        }

        if (ConPass.value != Password.value) {
            event.preventDefault();
            
            $("#CNpass-error1").hide()
            $("#CNpass-error2").show()
         
        }
        if (ConPass.value == Password.value) {

            $("#CNpass-error1").hide()
            $("#CNpass-error2").hide()
            
        }



    }



})


