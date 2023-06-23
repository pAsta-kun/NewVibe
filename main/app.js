let timeElement = document.getElementById('time');

function updateTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.innerText = time;
}

// Call updateTime once to set the time immediately
updateTime();

// Then call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);