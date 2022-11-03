

let clockCont = document.getElementsByClassName('clockCont')[0];
let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');

// Maths logic Behind This...
/*--------------------- 
1. Hour-Hand 
    for ${h} Hours -> ( (${h}*30) + ${m/2} )deg
2. Minute-Hand 
    for ${m} Minutes -> (${m}*6)deg
3. Second-Hand 
    for ${s} Seconds -> (${s}*6)deg
----------------------- */

let nRotation ;
setInterval (function (){
        let timeObj = new Date();
        // console.clear();
        // console.log("Date",timeObj.getDate())
        // console.log("hours",timeObj.getHours())
        // console.log("mins",timeObj.getMinutes())
        // console.log("secsss     ",timeObj.getSeconds())
        
        s.style.transform = `rotate(${timeObj.getSeconds()*6}deg)`;
        m.style.transform = `rotate(${timeObj.getMinutes()*6}deg)`;
        h.style.transform = `rotate(${(timeObj.getHours()*30) + (timeObj.getMinutes()/2)}deg)`;
    }, 1000);
    