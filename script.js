document.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    let button = document.querySelector(`button[data-id="${e.keyCode}"]`);
    if (!button) { return };
    button.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    myFunc2(button)
});
function myFunc2(btn) {
    setTimeout(() => {
        btn.classList.remove("playing");
    }, 90)
}
function myFunc1(num) {
    let button = document.querySelector(`button[data-id="${num}"]`);
    if (!button) { return };
    button.classList.add("playing");
    let audio = document.querySelector(`audio[data-id="${num}"]`);
    audio.currentTime = 0;
    audio.play();
    myFunc2(button)
}