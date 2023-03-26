document.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    let button = document.querySelector(`button[data-id="${e.keyCode}"]`);
    if (!button) return;
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
let btn1 = document.querySelector(`button[data-id="65"]`)
btn1.onclick = () => {
    let audio = document.querySelector(`audio[data-id="65"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn2 = document.querySelector(`button[data-id="87"]`)
btn2.onclick = () => {
    let audio = document.querySelector(`audio[data-id="87"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn3 = document.querySelector(`button[data-id="83"]`)
btn3.onclick = () => {
    let audio = document.querySelector(`audio[data-id="83"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn4 = document.querySelector(`button[data-id="69"]`)
btn4.onclick = () => {
    let audio = document.querySelector(`audio[data-id="69"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn5 = document.querySelector(`button[data-id="68"]`)
btn5.onclick = () => {
    let audio = document.querySelector(`audio[data-id="68"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn6 = document.querySelector(`button[data-id="70"]`)
btn6.onclick = () => {
    let audio = document.querySelector(`audio[data-id="70"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn7 = document.querySelector(`button[data-id="84"]`)
btn7.onclick = () => {
    let audio = document.querySelector(`audio[data-id="84"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn8 = document.querySelector(`button[data-id="71"]`)
btn8.onclick = () => {
    let audio = document.querySelector(`audio[data-id="71"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn9 = document.querySelector(`button[data-id="89"]`)
btn9.onclick = () => {
    let audio = document.querySelector(`audio[data-id="89"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn10 = document.querySelector(`button[data-id="72"]`)
btn10.onclick = () => {
    let audio = document.querySelector(`audio[data-id="72"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn11 = document.querySelector(`button[data-id="85"]`)
btn11.onclick = () => {
    let audio = document.querySelector(`audio[data-id="85"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn12 = document.querySelector(`button[data-id="74"]`)
btn12.onclick = () => {
    let audio = document.querySelector(`audio[data-id="74"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn13 = document.querySelector(`button[data-id="75"]`)
btn13.onclick = () => {
    let audio = document.querySelector(`audio[data-id="75"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn14 = document.querySelector(`button[data-id="79"]`)
btn14.onclick = () => {
    let audio = document.querySelector(`audio[data-id="79"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn15 = document.querySelector(`button[data-id="76"]`)
btn15.onclick = () => {
    let audio = document.querySelector(`audio[data-id="76"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn16 = document.querySelector(`button[data-id="80"]`)
btn16.onclick = () => {
    let audio = document.querySelector(`audio[data-id="80"]`);
    audio.currentTime = 0;
    audio.play();
};
let btn17 = document.querySelector(`button[data-id="186"]`)
btn17.onclick = () => {
    let audio = document.querySelector(`audio[data-id="186"]`);
    audio.currentTime = 0;
    audio.play();
};