let msg= document.getElementById("txtInput");
let btn = document.getElementById("button");
let list = document.getElementById("list");

btn.addEventListener("click", function(){
    if(msg =""){
        prompt("type a message to be sent");
    }
    else{
        let createmsg= document.createElement("li");
        createmsg.innerHTML=msg.value;
        list.appendChild(createmsg);
        msg="";
    }
});