var arr = [
    {departing:"Raipur to Mumbai",time1:'7:40pm - 9:25pm (1h 45m, nonstop)',plane1:'IndiGo • Sat, May 21',returning:'Mumbai to Raipur',time2:'12:20pm - 2:15pm (1h 55m, nonstop)',plane2:"Indigo • Sun, May 22",charge:112,Taxes_and_fees:26},
    {departing:"Delhi to Goa",time1:'10:00pm - 12:40am (2h 40m, nonstop)',plane1:'Air India • Mon, May 23',returning:'Goa to Delhi',time2:'6:50am - 12:20pm (5h 30m, nonstop)',plane2:"Air India • Tue, May 24",charge:207,Taxes_and_fees:31.28},
    {departing:"Hyderabad to Jaipur",time1:'11:45am - 1:50pm (2h 5m, nonstop)',plane1:'IndiGo • Sat, May 21',returning:'Mumbai to Raipur',time2:'12:20pm - 2:15pm (1h 55m, nonstop)',plane2:"Indigo • Sun, May 22",charge:112,Taxes_and_fees:26},
    {departing:"Amritsar to Mumbai",time1:'7:40pm - 9:25pm (1h 45m, nonstop)',plane1:'IndiGo • Sat, May 21',returning:'Mumbai to Raipur',time2:'12:20pm - 2:15pm (1h 55m, nonstop)',plane2:"Indigo • Sun, May 22",charge:112,Taxes_and_fees:26},
    {departing:"Bengaluru to Mumbai",time1:'7:40pm - 9:25pm (1h 45m, nonstop)',plane1:'IndiGo • Sat, May 21',returning:'Mumbai to Raipur',time2:'12:20pm - 2:15pm (1h 55m, nonstop)',plane2:"Indigo • Sun, May 22",charge:112,Taxes_and_fees:26}
];

var city = [
    "Raipur (RPR - Raipur)",
    "Delhi (DEL - Indira Gandhi Intl.)",
    "Hyderabad (HYD - Rajiv Gandhi Intl.)",
    "Amritsar (ATQ - Raja Sansi Intl.)",
    "Bengaluru (BLR-Kempegowda Intl.)"
]

var city1 = document.querySelector("#city1");
var city2 = document.querySelector("#city2");

document.querySelector("#swap").addEventListener("click",swap);
function swap(){
    var temp = city1.innerText;
    city1.innerText = city2.innerText;
    city2.innerText = temp;
}

document.querySelector("#flightDetails").addEventListener("click",myFun);
function myFun(){
    var dep = document.querySelector("#depart").innerText;
    var data = [
        {
            departing:"Delhi to Goa",
            time1:'10:00pm - 12:40am (2h 40m, nonstop)',
            plane1:'Air India • Mon, June 23',
            returning:'Goa to Delhi',
            time2:'6:50am - 12:20pm (5h 30m, nonstop)',
            plane2:"Air India • Tue, June 24",
            charge:209,
            Taxes_and_fees:31.28
        }
    ];
    localStorage.setItem("flight",JSON.stringify(data));
    window.location.href='cart.html';
}