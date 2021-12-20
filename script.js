//Variables or selector from html
const time = document.querySelector('.watch .time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
let counter=0;
let interval = null;

//Click Event Listener on start,pause and reset button 
startButton.addEventListener('click',start);
pauseButton.addEventListener('click',pause);
resetButton.addEventListener('click',reset);

//update the timer function by 1 seconds
function timer(){
    counter++;
    //Time Format
    let hours = Math.floor(counter/3600);
    let minutes = Math.floor((counter - (hours*3600)) /60);
    let seconds = (counter - (hours*3600)-(minutes*60));

    if(hours < 10) hours = '0'+hours;
    if(minutes < 10) minutes ='0'+minutes;
    if(seconds < 10) seconds='0'+seconds;

    time.innerText = `${hours}:${minutes}:${seconds}`;

}

//Start function start the timer
function start(){

    if(interval){
        return;
    }

    interval = setInterval(timer,1000);
}

//Stop the timer
function pause(){
    clearInterval(interval);
    interval=null;
}

//Reset the timer
function reset(){
    pause();
    counter=0;
    time.innerText='00:00:00';
}