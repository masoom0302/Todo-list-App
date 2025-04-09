const Inputbox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function addTask(){
if(Inputbox.value === ''){
    alert("you must write something!");
}
else{
    let li =document.createElement("li");
    li.innerHTML  = Inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
Inputbox.value = "";
saveData()
}

listcontainer.addEventListener("click",function(e){
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
}
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showTask()























// listcontainer.addEventListener("click", function(e){
    //     if(e.target.tagName ==="Li"){
    //         e.target.classList.toggle("checked");
    //     }
    //     else if(e.target.tagName ==="SPAN"){
    //         e.target.parentElement.remove();
    //     }
    // }, false);