
let name=document.getElementById("name");
let phone=document.getElementById("phone");
let email=document.getElementById("email");
let addrees=document.getElementById("place");


let starters=document.getElementById("starters");
let chicken=document.getElementById("Chicken");
let burgger=document.getElementById("Burger");
let chines=document.getElementById("Chines");
let biryani=document.getElementById("Biryani");
let GST=document.getElementById("gst");

let button=document.getElementById("btn");

let resultname=document.getElementById("resultname");
let resultmobile=document.getElementById("resultmobile");
let resultemail=document.getElementById("resultemail");
let resultplace=document.getElementById("resultplace");
let resulttotalamount=document.getElementById("resulttotalamount");
let resulttotalbill=document.getElementById("resulttotalbill");
let resulttip=document.getElementById("resulttip");
let resultwithtip=document.getElementById("resultwithtip");



button.addEventListener("click", ()=>{
    
    let totalAmount = parseInt(starters.value) + parseInt(chicken.value) +parseInt(burgger.value) + parseInt(chines.value) +parseInt(biryani.value)
     let gstRate = (parseInt(GST.value)/100)*totalAmount+totalAmount;
     
     resultname.innerHTML ="Name :" + name.value;
     resultmobile.innerHTML="Mobile :"+phone.value;
     resultemail.innerHTML="Email :"+email.value;
     resultplace.innerHTML="Place :"+place.value;
     resulttotalamount.innerHTML="Total Amount" + totalAmount;
     resulttotalamount.innerHTML = `Total bill with ${GST.value}% is ${gstRate}`

     if(gstRate>=18000){
        resulttip.innerHTML = `With tip 1000 : ${gstRate + 1000}`
     }
     else{
        resulttip.innerHTML = `With tip 500 : ${gstRate + 500}`
     }

     resultwithtip.innerHTML = "Note : bill exceeds 18000 will pay tip of 500 else 1000"

})


















