let start = document.querySelectorAll(".but")[0];
let stop = document.querySelectorAll(".but")[1];
let reset = document.querySelectorAll(".but")[2];

let display = document.querySelector(".display h1");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

start.addEventListener("click", function () {

    // Don't create multiple intervals
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        display.innerText =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

    }, 1000);
});


stop.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});


reset.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerText = "00:00:00";

});