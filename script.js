/**Arrays */

let song=["Ai_kale_muluhadinma_oba_mata_adare","Iridata Palliyedi","Manike Mage Hithe"];


/**handlers */
let title=document.getElementById('song_title');
let title2=document.getElementById('song_title2');
let playSong=document.getElementById('play');
let progress=document.getElementById('progress');
let cover=document.getElementById('cover');
let audio=document.getElementById('audio');
let play1=document.getElementById('play1');
let preSong=document.getElementById('preSong');
let nextSong=document.getElementById('nextSong');

/**track of songs */
let currentSong=0;
/**loding songs */
loadingSongs(song[currentSong]);

function loadingSongs(song){

    title.innerHTML=song;
    title2.innerHTML=song;
    cover.src=`./images/${song}.jpeg`;
    audio.src=`./songs/${song}.mp3`;
    
}

/**event listners */

play1.addEventListener('click',()=>{
    audio.play();
});


