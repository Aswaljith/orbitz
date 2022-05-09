var res = document.querySelectorAll("#reserve");
res.forEach(element => {
    element.addEventListener("click",myfun)
    function myfun(){
        window.location.href = "cart.html";
    }
});