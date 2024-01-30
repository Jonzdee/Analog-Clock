const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

min.tex

function displayTime(){
    let date = new Date();

    //Getting hour, mins, secs, from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let se = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation = 6*mm;
    let srotation = 6*se;

    hr.style.transform =`rotate(${hrotation}deg)`
    min.style.transform =`rotate(${mrotation}deg)`
    sec.style.transform =`rotate(${srotation}deg)`
}
setInterval(displayTime, 1000);