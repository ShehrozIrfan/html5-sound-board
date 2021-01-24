//the project is done using html5 audio api. and it's the introductry project, of-cousre we can do alot of cool things with html5 audio api.

//array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//using for of loop to iterate in the array
for(const sound of sounds) {
    
    //creating button
    const btn = document.createElement("button");
    
    //adding class to button
    btn.classList.add("btn");
    
    //applying inner text to each button
    btn.innerText = sound;

    //adding event listener, so that clicking on each button will play a sound.
    btn.addEventListener('click', () => {
        
        //below function is added so that only one sound is played at a time.
        stopSound();
        
        //so to play this, we use HTML5 JS API 'play'
        document.getElementById(sound).play();
    })
    //getting the buttons from dom and appending the created btn to that
    document.getElementById("buttons").appendChild(btn);
}

const stopSound = () => {
    for(const sound of sounds) {
        const playingSound = document.getElementById(sound);
        //pausing the sound
        playingSound.pause();
        //setting the current time to zero
        playingSound.currentTime = 0;
    }
}