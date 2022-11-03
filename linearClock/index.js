console.log('h');
let cont = document.getElementsByClassName('clockCont')[0]
let h = document.getElementById('h')
let m = document.getElementById('m')
let s = document.getElementById('s')


setInterval(() => {
    let myDate = new Date();
    // console.log(myDate.getHours())
    // console.log(myDate.getMinutes())
    console.log(myDate.getSeconds(), myDate.getSeconds()*6)
    s.style.width = `${myDate.getSeconds()*6}vh`;
    m.style.width = `${myDate.getMinutes()*6}vh`;
    h.style.width = `${myDate.getHours()*6}vh`;
}, 1000);