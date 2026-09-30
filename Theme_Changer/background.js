let start = document.querySelector(".but1");
let stop = document.querySelector(".but2");

const hex = "ABCDEF1234567890";
let p;

const fun = () => {

    // prevent multiple intervals
    if (p) {
        return;
    }

    p = setInterval(function () {

        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }

        document.body.style.backgroundColor = color;

    }, 2000);
};

start.addEventListener("click", () => {
    fun();
});

stop.addEventListener("click", () => {
    clearInterval(p);
    p = null;
});