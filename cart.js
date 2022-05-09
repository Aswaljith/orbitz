var myarr=JSON.parse(localStorage.getItem('flight'))||[];
document.querySelector('#mybtn').addEventListener('click',func);
function func(){
    myarr=arr;
    localStorage.setItem('flight',JSON.stringify(myarr));
    window.location.href='payment.html';  
}
var arr=[{departing:"Raipur to Mumbai",returning:'Mumbai to Raipur',time1:'7:40pm - 9:25pm (1h 45m, nonstop)',time2:'12:20pm - 2:15pm (1h 55m, nonstop)',plane1:'IndiGo • Sat, May 21',plane2:"Indigo • Sun, May 22",charge:112,Taxes_and_fees:26}];

document.querySelector('#container4_1>div>h2').innerText=(arr[arr.length-1].departing);
document.querySelector('#container4_1>div>h2+p').innerText=(arr[arr.length-1].time1);
document.querySelector('#container4_1>div>h2+p+img+p').innerText=(arr[arr.length-1].plane1);
document.querySelector('#container4_2>div>h2').innerText=(arr[arr.length-1].returning);
document.querySelector('#container4_2>div>h2+p').innerText=(arr[arr.length-1].time2);
document.querySelector('#container4_2>div>h2+p+img+p').innerText=(arr[arr.length-1].plane2);

document.querySelector('#part2>:nth-child(1)').innerText='$'+(arr[arr.length-1].charge+arr[arr.length-1].Taxes_and_fees)
document.querySelector('#part2>:nth-child(2)').innerText='$'+(arr[arr.length-1].charge);
document.querySelector('#part2>:nth-child(3)').innerText='$'+(arr[arr.length-1].Taxes_and_fees);

document.querySelector('#part4>h3').innerText='$'+(arr[arr.length-1].charge+arr[arr.length-1].Taxes_and_fees)