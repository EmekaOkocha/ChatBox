let msg= document.getElementById("custInput");
let msg2= document.getElementById("suppInput");
let cust = document.getElementById("button");
let supp = document.getElementById("button2");
let list = document.getElementById("customer");
let list2 = document.getElementById("support");

cust.addEventListener("click", function(){
   // if(msg.value ==""){
     //   alert("please type a message and click send");
   // }
    let createmsg= document.createElement("li");
        createmsg.innerHTML= msg.value;
        list2.appendChild(createmsg);
        msg.value="";

});
supp.addEventListener("click", function(){
//    if(msg2.value ==""){
  //      alert("please type a message and click send");
    //}
    let createmsg= document.createElement("li");
        createmsg.innerHTML= msg2.value;
        list.appendChild(createmsg);
        msg2.value="";

});