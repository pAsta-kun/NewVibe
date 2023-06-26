let timeElement = document.getElementById('time');
let backgrounds = ['assets/bedroom.gif', 'assets/port.gif', 'assets/blossom.gif', 'assets/room.gif', 'assets/star.gif', 'assets/sunset.gif']
let counter = 0;
let lastMinute

function updateTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.innerText = time;

    if(date.getMinutes() == 0 &&  lastMinute != 0)
    {
        counter++;
        setBackground(counter);
    }
    lastMinute = date.getMinutes();
}

function setBackground()
{
    document.body.style.background = `url(${backgrounds[counter]})`;
    document.body.style.backgroundSize = "100%"; 
    document.body.style.backgroundPosition = "25% 70%"; 
    if(counter == 1)
        document.body.style.color = '#C35D84'
    if(counter == 2)
        document.body.style.color = '#FFC8E9'
    if(counter == 3)
        document.body.style.color = '#F7F7F7'


    if(counter == backgrounds.length-1)
        counter = -1;
}

// Call updateTime once to set the time immediately
updateTime();

// Then call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
