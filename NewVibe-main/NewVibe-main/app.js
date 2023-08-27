let timeElement = document.getElementById('time');
let backgrounds = ['assets/bedroom.gif', 'assets/constellations.gif', 'assets/blossom.gif', 'assets/room.gif', 'assets/star.gif', 'assets/sunset.gif', 'assets/redtree.gif']


function updateTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.innerText = time;
}

function setBackground()
{
    let random = Math.floor(Math.random()*6.99)
    document.body.style.background = `url(${backgrounds[random]})`;
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundPosition = "center"; 
    document.body.style.backgroundRepeat = 'no-repeat'
    if(random == 0)
    {
        document.body.style.color = '#CA8BA3'
    }
    if(random == 1)
    {
        document.body.style.color = '#FF87A1'
    }
        
    if(random == 2)
        document.body.style.color = '#FFC8E9'
    if(random == 3)
        document.body.style.color = '#48D2F6'     
    if(random == 4)
        document.body.style.color = '#E9B79A'
    if(random == 5)
        document.body.style.color = '#FFD8A2'
    if(random == 6)
    {
        document.body.style.color = '#96152D'
    }
        

}

// Call updateTime & setBackground once to set them up
updateTime();
setBackground();
//  call updateTime every sec
setInterval(updateTime, 1000);