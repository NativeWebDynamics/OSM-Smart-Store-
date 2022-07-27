// index vali file main container change karna hai 

let checkbox_dark = document.querySelector("#toggle-switch-input")



$("#toggle-switch-input").click(function (event) {
    if (checkbox_dark.checked == true) {
        let navDark = document.querySelector("#Dark-Mode-nav");

        let dark_dropdown2 = document.querySelector("#dark-mode-back99")
        let dark_sidebar = document.querySelector("#dark-sidebar-1")

        let border_Color = document.querySelector("#user-style-border-dark1")
        //  document.cookie=("theme=dark; expires=Thu, 28 July 2022 12:00:00 UTC")

        localStorage.setItem("theme", "dark");
        navDark.classList.add("dark-Mode")


        dark_dropdown2.classList.add("dark-mode-back")
        border_Color.classList.add("user-style-border")
        dark_sidebar.classList.add("dark-sidebar")
        $(".dark-mode-text").css("color", "white");
        $(".dark-mode-inner-back").css("background-image", "linear-gradient(to bottom right,#030303,rgb(6, 5, 24),#030303)");
        $(".dark-mode-inner2-back").css("background-image", "linear-gradient(to bottom ,#142136,#050414");







    }
    if (checkbox_dark.checked == false) {
        let navDark = document.querySelector("#Dark-Mode-nav");

        let dark_dropdown2 = document.querySelector("#dark-mode-back99")
        let dark_sidebar = document.querySelector("#dark-sidebar-1")

        let border_Color = document.querySelector("#user-style-border-dark1")
        // document.cookie=("theme=light ;  expires=Thu, 28 July 2022 12:00:00 UTC")
        localStorage.setItem("theme", "light");
        navDark.classList.remove("dark-Mode")

        dark_dropdown2.classList.remove("dark-mode-back")
        border_Color.classList.remove("user-style-border")

        dark_sidebar.classList.remove("dark-sidebar")
        $(".dark-mode-text").css("color", "initial");
        $(".dark-mode-inner-back").css("background-image", "initial");
        $(".dark-mode-inner2-back").css("background-image", "initial");

    }
})

let cook = localStorage.getItem("theme");
console.log(cook)
if (cook == "dark") {
    
    checkbox_dark.checked = true

   
    

 
    $(".dark-mode-text").css("color", "white");
    $(".dark-mode-inner-back").css("background-image", "linear-gradient(to bottom right,#030303,rgb(6, 5, 24),#030303)");
    $(".dark-mode-inner2-back").css("background-image", "linear-gradient(to bottom ,#142136,#050414");




}
else {
    checkbox_dark.checked = false
   

    
   

    
    $(".dark-mode-text").css("color", "initial");
    $(".dark-mode-inner-back").css("background-image", "initial");
    $(".dark-mode-inner2-back").css("background-image", "initial");


}