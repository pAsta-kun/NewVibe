const elo = document.getElementsByClassName('user-tagline-white');
const chatEloGain = document.querySelectorAll('[data-cy="live-game-start-rating"]');
const chatElo = document.getElementsByClassName('user-rating');
let eloChangeTimer;
let counter = 0;

function change()
{
    eloChangeTimer = setInterval(function() 
    {
        console.log(chatElo[0])
        chatEloGain[0].innerHTML = "???"
        for(let i = elo.length-1; i > -1; i--)
        {
            elo[i].innerHTML = '???'
            counter++;
            
        }
        for(let i = 0; i < chatElo.length; i++)
        {
            console.log(chatEloGain)
            chatEloGain[i].innerHTML = "???"
        }
        for(let i = 0; i < chatEloGain.length; i++)
        {
            console.log(chatEloGain)
            chatEloGain[i].innerHTML = "???"
        }
        if(counter > 100)
        {
            clearInterval(eloChangeTimer);
        }
    }, 1);

}
change();
window.onhashchange = function() {
    change();
};
  
