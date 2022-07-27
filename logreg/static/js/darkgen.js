
let cook1 = localStorage.getItem("theme");

console.log(cook1)
if(cook1=="dark"){


            $(".dark-mode-text").css("color", "white");
            $(".dark-mode-inner-back").css("background-image", "linear-gradient(to bottom right,#030303,rgb(6, 5, 24),#030303)");
            $(".dark-mode-inner2-back").css("background-image", "linear-gradient(to bottom ,#142136,#050414");
            $(".dark-mode-table").css({
                "border": "3px groove red",
                "border-radius": "20px",

            });
            $(".dark-LcD").css({
                "border": "4px groove darkred",
                "background-image": "linear-gradient(to bottom right,white,wheat)"
            })

}

// light
if(cook1=="light"){
      
            $(".dark-mode-text").css("color", "initial");
            $(".dark-mode-inner-back").css("background-image", "initial");
            $(".dark-mode-inner2-back").css("background-image", "initial");
            $(".dark-mode-table").css({
                "border":"3px groove gold",
                "border-radius":"20px",
        
        });
        $(".dark-LcD").css({
            "border":"4px groove goldenrod",
         
           "background-image": "linear-gradient(to right top,#F3F6F9,rgb(189, 189, 189))",
        })
           



}






