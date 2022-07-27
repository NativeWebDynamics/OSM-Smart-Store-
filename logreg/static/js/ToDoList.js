let parent =document.querySelector("#todolist");

let addbutton=document.querySelector("#AddButton");
addbutton.addEventListener('click',function(){
    let EachItem=document.querySelector("#listAdding");
    let cloneNode=EachItem.cloneNode(true);
    let last=cloneNode.lastElementChild.firstElementChild.firstElementChild;
    let inputfield=document.querySelector("#todo-input");
    if(inputfield.value==""){
        alert("please write something before add")
    }
    else{
        last.textContent=inputfield.value;
        parent.appendChild(cloneNode);
        cloneNode.classList.remove("manual-list");
        inputfield.value="";

        let close=document.createElement("button");
        let closesParent=cloneNode.lastElementChild.firstElementChild;
        close.textContent="x";
        close.classList.add("btn");
        closesParent.appendChild(close);
        close.addEventListener('click',function(){
            cloneNode.classList.add("manual-list");
        })

    }

});
let input_field=document.querySelector("#todo-input");

input_field.addEventListener('keyup',function(event){
    if(event.key==="Enter"){
        let EachItem=document.querySelector("#listAdding");
        let cloneNode=EachItem.cloneNode(true);
        let last=cloneNode.lastElementChild.firstElementChild.firstElementChild;
        let inputfield=document.querySelector("#todo-input");
        if(inputfield.value==""){
            alert("please write something before add")
        }
        else{
            last.textContent=inputfield.value;
            parent.appendChild(cloneNode);
            cloneNode.classList.remove("manual-list");
            inputfield.value="";
    
            let close=document.createElement("button");
            let closesParent=cloneNode.lastElementChild.firstElementChild;
            close.textContent="x";
            close.classList.add("btn");
            closesParent.appendChild(close);
            close.addEventListener('click',function(){
                cloneNode.classList.add("manual-list");
            })
    

        }
    }
})

