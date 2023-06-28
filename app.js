let timeElement = document.getElementById('time');
let backgrounds = ['assets/bedroom.gif', 'assets/port.gif', 'assets/blossom.gif', 'assets/room.gif', 'assets/star.gif', 'assets/sunset.gif']


function updateTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.innerText = time;
}

function setBackground()
{
    let random = Math.floor(Math.random()*5.99)
    document.body.style.background = `url(${backgrounds[random]})`;
    document.body.style.backgroundSize = "100%"; 
    document.body.style.backgroundPosition = "25% 70%"; 
    if(random == 1)
        document.body.style.color = '#C35D84'
    if(random == 2)
        document.body.style.color = '#FFC8E9'
    if(random == 3)
        document.body.style.color = '#F7F7F7'     
}

// Call updateTime once to set the time immediately
updateTime();
setBackground();
// Then call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
setInterval(setBackground, 3600000);