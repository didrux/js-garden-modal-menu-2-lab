setTimeout(showModal, 5000);
setTimeout(showCloseButton, 10000);
setTimeout(hideTimer, 10000);

function showModal() {
    document.querySelector('.modal').style.display = "flex";
}

function showCloseButton() {
    document.querySelector('.close-btn').style.display = "flex"; 
}

document.querySelector('#modalFormCloseButton').onclick = closeModalForm;
function closeModalForm() {
    document.querySelector('.modal').style.display = "none";
}


function hideTimer(){
    document.querySelector('#time').style.display = "none";
}
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveSeconds = 9,
        display = document.querySelector('#time');
    startTimer(fiveSeconds, display);
};