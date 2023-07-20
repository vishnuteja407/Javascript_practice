
document.addEventListener("DOMContentLoaded", init);

function init(){
let btn = document.getElementById("btn");
let lnk = document.getElementById("lnk");
let txt = document.getElementById("txt");

btn.addEventListener("click", function (ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
})

lnk.addEventListener("click", function(ev){
    ev.preventDefault()
    console.log(ev.type, ev.target, ev.currentTarget);
})

txt.addEventListener("input", ev => console.log(ev.type, ev.target.value))

txt.addEventListener("change", ev => console.log(ev.type, ev.target.value))

txt.addEventListener("blur", ev => console.log(ev.type, ev.target.value))

}