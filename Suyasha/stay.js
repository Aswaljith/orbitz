//you need to code here
  
  
function suyashafun() {
    var x = document.querySelector("#visit").value;
    console.log(x)
   
}

var form=document.querySelector("#form");
form.addEventListener("submit",gosuyasha);
function gosuyasha(){
    var x = document.querySelector("#visit").value;
    event.preventDefault();
if(x=="goa"){
   window.location.href="p1.html"
}
else if(x=="mumbai"){
   window.location.href="p2.html"
}
else if(x=="kollkata"){
   window.location.href="p3.html"
}
}
