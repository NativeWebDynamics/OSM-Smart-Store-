
let theme = localStorage.getItem("theme");

let navDark=document.querySelector("#Dark-Mode-nav");

let dark_dropdown2=document.querySelector("#dark-mode-back99")
let dark_sidebar=document.querySelector("#dark-sidebar-1")

if(theme=="dark"){

    navDark.classList.add("dark-Mode")

    
    dark_dropdown2.classList.add("dark-mode-back")
    // border_Color.classList.add("user-style-border-dark")
  
    dark_sidebar.classList.add("dark-sidebar")
}
if(theme=="light"){
    navDark.classList.remove("dark-Mode")

  
    dark_dropdown2.classList.remove("dark-mode-back")
    // border_Color.classList.remove("user-style-border-dark")
  
    dark_sidebar.classList.remove("dark-sidebar")

}


// ----------------------------------------------------
