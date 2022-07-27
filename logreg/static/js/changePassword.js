
// to make responsive html 
let flag=0;

let form=document.querySelector("#Form-31");



visualViewport.addEventListener('resize',function(){
  
    

    if(screen.width<400){
        let normal_dec=400-screen.width;
        widthp=350-normal_dec;
        widthp=widthp +"px";
        form.style.width=widthp;
        // form2.style.width=widthp;
     
       
    }
 }

    );


// flip card script


// validation for passwords



let password_field=document.querySelector("#newPassword");
let Confirm_password_field=document.querySelector("#ConfirmPassword");

let Change_button= document.querySelector("#Change");


$("#error1").hide();
$("#error2").hide();
$("#error3").hide();



Change_button.addEventListener('click',function(event){
   
    if(password_field.value==""||Confirm_password_field.value==""){
        
        $("#error1").show("slow");
        $("#error2").hide();
        $("#error3").hide();
        event.preventDefault();
    
    }
    
    else if(password_field.value.length<=3){
        console.log("password is short")
        $("#error1").hide();
        $("#error2").show("slow");
        $("#error3").hide();
        event.preventDefault();
    
    }
    else if(password_field.value!=Confirm_password_field.value){
        console.log("matched")
        $("#error1").hide();
        $("#error2").hide();
        $("#error3").show("slow");
        event.preventDefault();
    
    }
    else{

    }

   
    


})
