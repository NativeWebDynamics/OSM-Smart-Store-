// this is for slider
let clickbutton=document.querySelector("#switch-toggle1");
let admin=document.querySelector("#Admin-Page");
let employee=document.querySelector("#Employee-Page");
function time(){
    employee.classList.add("active");
    admin.classList.remove("active");
}
function time2(){
    employee.classList.remove("active");
    admin.classList.add("active");
}

$(document).ready(function(){
    $("#switch-toggle1").click(function(){
        
        if(admin.classList.contains("active")===true){
            $("#Admin-Page").fadeOut("slow");
            $("#Employee-Page").fadeIn("slow");
            setTimeout(time,500)
        }
        else{
            $("#Employee-Page").fadeOut("slow");
            $("#Admin-Page").fadeIn("slow");
            setTimeout(time2,500)
        }
       
    });
  });

// to make responsive html 
let flag=0;
let Fpassword=document.querySelector("#Fpassword");
let undo=document.querySelector("#undo");
let form=document.querySelector("#Form-31");
let form2=document.querySelector("#Form-31-b");
Fpassword.addEventListener('click',function(){
    flag=1;
    if(screen.width<400){
        let normal_dec=400-screen.width;
        widthp=350-normal_dec;
        console.log(widthp);
        widthp=widthp +"px";
        // form.style.width=widthp;
        form2.style.width=widthp;
     
       
    }
});
if(screen.width<400){
    let normal_dec=400-screen.width;
    widthp=350-normal_dec;
    widthp=widthp +"px";
    form.style.width=widthp;
    // form2.style.width=widthp;
 
   
}



visualViewport.addEventListener('resize',function(){
  
    
 if(flag===0){
    if(screen.width<400){
        let normal_dec=400-screen.width;
        widthp=350-normal_dec;
        widthp=widthp +"px";
        form.style.width=widthp;
        // form2.style.width=widthp;
     
       
    }
 }
 if(flag===1){
    if(screen.width<400){
        let normal_dec=400-screen.width;
        widthp=350-normal_dec;
        widthp=widthp +"px";
        // form.style.width=widthp;
        form2.style.width=widthp;
     
       
    }
 }
      });




// flip card script
let parent=document.querySelector(".flip-card-inner");
let position=parent.firstElementChild;

function removeFrontCard(){
    
    parent.removeChild(position);
}
function flipTheCard(){

    let move=document.querySelector(".flip-card-inner");
     move.style.cssText= "transform: rotateY(180deg);"
    
    setTimeout(removeFrontCard,500)

    
    
 }
 
 function flipTheCard2(){
     parent.appendChild(position);
     let move1=document.querySelector(".flip-card-inner");
     move1.style.cssText= "transform: rotateY(0deg);"
   
 }
 
 