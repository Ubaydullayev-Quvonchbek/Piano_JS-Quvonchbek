document.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    let button = document.querySelector(`button[data-id="${e.keyCode}"]`);
    if (!button) { return };
    button.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    myFunc1(button)
});
function myFunc1(btn) {
    setTimeout(() => {
        btn.classList.remove("playing");
    }, 100)
}
function myFunc2(num) {
    let audio = document.querySelector(`audio[data-id="${num}"]`);
    audio.currentTime = 0;
    audio.play();
}