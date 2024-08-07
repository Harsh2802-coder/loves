const btn = document.getElementById("btn");
const div = document.querySelector(".harsh");
const text = document.querySelector(".text");
const btny = document.getElementById("btny");

btn.addEventListener("mouseover",(e)=>{
    if(div.getAttribute("id") == "a"){div.setAttribute("id","b")}
    else if(div.getAttribute("id") == "b"){
        div.setAttribute("id","a")
    }
})

btny.addEventListener("click",(e)=>{

    text.style.display = "block";
    // if(text.style.display === "none"){
    // text.style.display = "block";}
    // else {
    //     text.style.display = "none";
    // }
})

