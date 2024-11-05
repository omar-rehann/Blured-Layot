let cont = document.querySelector(".container")
let btnEl = document.querySelector(".btn");
let popEl = document.querySelector(".popup-container");
let icon = document.querySelector(".close-icon");

btnEl.onclick = function() {
    btnEl.classList.add("active");
    popEl.classList.add("active");
    cont.classList.add("active")
}
icon.onclick = function() {
    btnEl.classList.remove("active");
    popEl.classList.remove("active");
    cont.classList.remove("active")
}