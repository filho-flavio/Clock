

let divHours = document.getElementById('inHrs');
let divMinutes = document.getElementById('inMins');
let divSeconds = document.getElementById('inSecs');

const clock = setInterval(() => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10 ) hours = "0" + hours;

    if (minutes < 10 ) minutes = "0" + minutes;

    if (seconds < 10 ) seconds = "0" + seconds;

    divHours.textContent = hours;
    divMinutes.textContent = minutes;
    divSeconds.textContent = seconds;
});

