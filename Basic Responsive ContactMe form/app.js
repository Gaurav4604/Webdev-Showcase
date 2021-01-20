const inputs=document.querySelectorAll(".input");

function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}
function BlurFunc(){
    let parent=this.parentNode;
    if(this.value=="")
    parent.classList.remove("focus");
}

inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",BlurFunc);
});