document.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    let button = document.querySelector(`button[data-id="${e.keyCode}"]`);
    if (!button) { return };
    button.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    rem()
});
function rem() {
    setTimeout(() => {
        let remove1 = document.querySelector(`#key[data-id="65"]`);
        remove1.classList.remove("playing");
        let remove2 = document.querySelector(`#key[data-id="87"]`);
        remove2.classList.remove("playing");
        let remove3 = document.querySelector(`#key[data-id="83"]`);
        remove3.classList.remove("playing");
        let remove4 = document.querySelector(`#key[data-id="69"]`);
        remove4.classList.remove("playing");
        let remove5 = document.querySelector(`#key[data-id="68"]`);
        remove5.classList.remove("playing");
        let remove6 = document.querySelector(`#key[data-id="70"]`);
        remove6.classList.remove("playing");
        let remove7 = document.querySelector(`#key[data-id="84"]`);
        remove7.classList.remove("playing");
        let remove8 = document.querySelector(`#key[data-id="71"]`);
        remove8.classList.remove("playing");
        let remove9 = document.querySelector(`#key[data-id="89"]`);
        remove9.classList.remove("playing");
        let remove10 = document.querySelector(`#key[data-id="72"]`);
        remove10.classList.remove("playing");
        let remove11 = document.querySelector(`#key[data-id="85"]`);
        remove11.classList.remove("playing");
        let remove12 = document.querySelector(`#key[data-id="74"]`);
        remove12.classList.remove("playing");
        let remove13 = document.querySelector(`#key[data-id="75"]`);
        remove13.classList.remove("playing");
        let remove14 = document.querySelector(`#key[data-id="79"]`);
        remove14.classList.remove("playing");
        let remove15 = document.querySelector(`#key[data-id="76"]`);
        remove15.classList.remove("playing");
        let remove16 = document.querySelector(`#key[data-id="80"]`);
        remove16.classList.remove("playing");
        let remove17 = document.querySelector(`#key[data-id="186"]`);
        remove17.classList.remove("playing");
    }, 100)
}
function myFunc(num) {
    let audio = document.querySelector(`audio[data-id="${num}"]`);
    audio.currentTime = 0;
    audio.play();
}