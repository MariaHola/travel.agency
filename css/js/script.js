console.log("Alloha! Dziękuję za sprawdzenie mojej pracy domowej.");

let textColor = document.querySelector(".textColor");
let main = document.querySelector(".main")
let themeName = document.querySelector(".themeName");

textColor.addEventListener("click", () => {
    main.classList.toggle("blue")

    if (main.classList.contains("blue")) {
        themeName.innerText = "niebieskość";
    } else {
        themeName.innerText = "kolor";
    }
});